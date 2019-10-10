# VuePress

## 语法高亮

- Bash: `shell`
- Makefile: `makefile`
- Markdown: `md`
- Rust: `rust`

## 行号

```md
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

```md
module.exports = {
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-xxx'))
    }
  }
}
```
