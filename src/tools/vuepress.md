# VuePress

## vuepress-plugin-mathjax

```sh
yarn add vuepress-plugin-mathjax
```

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {
        presets: ["\\def\\bm#1{\\boldsymbol#1}"],
        showError: true
      },
    ],
  ],
}
```

## 语法高亮

- Bash: `sh`
- Javascript: `js`
- Makefile: `makefile`
- Markdown: `md`
- Rust: `rust`

## 行号

```js
// .vuepress/config.js
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```

## last-updated

```sh
yarn add moment
```

```js
// .vuepress/config.js
const moment = require("moment");

module.exports = {
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
        }
      }
    ]
  ]
}
```

## back-to-top

```sh
yarn add -D @vuepress/plugin-back-to-top@next
```

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    "@vuepress/back-to-top"
  ]
}
```

## 使用 markdown-it 插件

```sh
yarn add markdown-it-xxx
```

```js
// .vuepress/config.js
module.exports = {
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-xxx'))
    }
  }
}
```
