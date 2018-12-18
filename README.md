## 一个好玩的loader

---

#### 其实你的代码可以这样

```
函数 测试 () {
  变量 长度 = 10
  如果 (true) {
    打印('如果')
  }
  循环(变量 基数 = 0; 基数 < 长度; 基数++) {
    打印(基数)
    打印('返回')
  }
}
```

#### 最后就变成了这样

```
function 测试 () {
  let 长度 = 10
  if (true) {
    console.log('如果')
  }
  for(let 基数 = 0; 基数 < 长度; 基数++) {
    console.log(基数)
    console.log('返回')
  }
}
```

#### 体验

- vue-cli3下初始化项目
- npm install -D chinese-loader
- 新建vue.config.js文件，内容如下
```
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'chinese-loader',
          // 可选
          options: {
            ECMAscript: true (false), // 定义变量替换是否为var 默认是let,
            custom: [['😀', 'let']] 
            // 自定义规则，替换关键字，格式需要规范
            // 就可以使用了 
            // 😀 长度 = 10
          }
        }
      ]
    }
  }
}
```

##### 默认替换内容

| 关键字 | 替换   |
| ------ | ------ |
| let    | 变量   |
| .....  | ...... |


#### Tip

- 编辑器在你写的时候报很多warn，等啥时候弄个vscode插件即可
