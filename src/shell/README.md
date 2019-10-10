# Bash

## IO 重定向

将 `stderr` 和 `stdout` 追加到同一个文件：

```sh
cmd >>file.txt 2>&1
```

## Here Documents

把 `limit string` 用引号括起来会阻止参数替换，比如：

```sh
cat << 'EOF' >> ~/.zshenv
typeset -U PATH path
path=("$HOME/.local/bin" "$HOME/.yarn/bin" "$path[@]")
export PATH
EOF
```

> 参考于 <http://tldp.org/LDP/abs/html/here-docs.html>。
