# VuePress

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
