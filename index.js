const { getOptions } = require('loader-utils');
const {BASE, DOM, NODE} = require('./const');
const effetcRex = /\{|\:|,|;|\s|\(|\)|（|）|，|；|：/; // 验证有效的关键字

let keyWords = BASE;

const keyWordsRex = [];

function initKeyWordsRex () {
  const checkExistArray = [];
  for (let index = 0; index < keyWords.length; index++) {  // 不能使用静态获取长度方式
    const word = keyWords[index][0]
    const rex = new RegExp(`${word}`, 'ig');

    // 去重
    if (checkExistArray.indexOf(word) === -1 ) {
      keyWordsRex.push(rex);
    } else {
      keyWords.splice(index, 1);
      index--
    }
    checkExistArray.push(word);
  }
}

function findKeyWord(value) {
  const {key} = this;
  return value[1] == key;
}

function replaceKeywords(keywordsArray, replaceArray) {
  keywordsArray.forEach((key, i) => {
    const keyThis = {
      key
    }
    const nodeKeywordIdex = keyWords.findIndex(findKeyWord, keyThis);
    if (nodeKeywordIdex !== -1) {
      keyWords[nodeKeywordIdex][1] = replaceArray[i];
    }
  })
}

module.exports = function (source) {
  const {
    target
  } = this;

  const options = getOptions(this);
  const {
    ECMAscript = true,
    custom = []
  } = options || {};

  if (custom.length !== 0) {
    keyWords = keyWords.concat(custom);
  }

  // 更新不同环境下的关键字
  if (target === 'web' || !target) {
    keyWords = keyWords.concat(NODE);
    initKeyWordsRex();

    // 解决传多次传入target不同问题
    replaceKeywords(['module.exports', 'require', 'exports'], ['import', 'form', 'export']);
  } else {
    replaceKeywords(['import', 'form', 'export'], ['module.exports', 'require', 'exports']);
    keyWords = keyWords.concat(DOM);
    // console.log(keyWords)
    initKeyWordsRex();
  }

  const letIndex = keyWords.findIndex(findKeyWord, {key: 'let'});
  if (!ECMAscript && letIndex !== -1) keyWords[letIndex][1] = 'var';

  for (let index = 0, len = keyWords.length; index < len; index++) {
    const rex = keyWordsRex[index];
    const str = keyWords[index][1];
    source = source.replace(rex, function(string, index) {
      const start = index + string.length;
      
      // console.log(source.slice(start , start + 1))
      const blank = source.slice(start , start + 1);
      if (effetcRex.test(blank)) {
        return str;
      }
      return string;
    });
  }

  return `${source}`;
}