# Pandoc

## 元信息块

```md
% title
% author(s) (用英文分号分隔)
% date  # 比如 2019-10-13
```

## 标题

`{-}` 或者 `{.unnumbered}` 表示标题不编号，比如：

```md
# My heading {-}
```

或者

```md
# My heading {.unnumbered}
```

## 链接

- 自动链接：`<http://google.com>`

## 常用命令

输出默认 $\LaTeX$ 模板：

```sh
pandoc -D latex
```
