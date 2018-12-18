const BASE = [
  ['否则如果', 'else if'], ['如果', 'if'], ['否则', 'else'],  // 当前行前后位置不可变化
  ['常量', 'const'], ['变量', 'let'],
  ['试图', 'try'], ['捕获', 'catch'], ['最后', 'finally'],
  ['结束', 'break'], ['返回', 'return'], ['继续', 'continue'],
  ['循环', 'for'], ['转换', 'switch'], ['当', 'while'], ['情况', 'case'], 
  ['做', 'do'], ['随着', 'with'], ['内', 'in'], ['默认', 'default'],

  ['新', 'new'], ['函数', 'function'], ['删除', 'delete'], ['这', 'this'], ['空', 'void'], ['实例', 'instranceof'], ['类型', 'typeof'],
  ['抛', 'throw'],  ['抛出', 'throws'],  
  ['导入', 'import'], ['从', 'from'], ['导出', 'export'],
  ['打印', 'console.log'],

  ['（', '('], ['）', ')'], ['，', ','], ['：', ':'], ['；', ';'],

  ['字符串', 'String'], ['数字', 'Number'], ['布尔', 'Boolean'], 
  ['对象', 'Object'], ['未定义', 'undefined'], ['空', 'null'], ['非数值', 'NaN'], ['数组', 'Array']
];
const DOM = [];
const NODE = [];

module.exports = {
  DOM,
  NODE,
  BASE
}