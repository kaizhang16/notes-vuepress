# Bash

## 快捷键

- `Ctrl + a`：将光标移动到行首
- `Ctrl + e`：将光标移动到行尾
- `Alt + f`: 将光标向前移动一个单词
- `Alt + b`: 将光标向后移动一个单词

> 参考于 <https://www.tecmint.com/linux-command-line-bash-shortcut-keys/>。

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

## find

```sh
find . -type d -empty -delete  # 删除空文件夹
```

## 变量替换（Parameter Substitution）

- `${#var}`: String length
- `${var#Pattern}`: 从 `$var` 前面移除最短匹配 `$Pattern` 的部分
- `${var##Pattern}`: 从 `$var` 前面移除最长匹配 `$Pattern` 的部分
- `${var%Pattern}`: 从 `$var` 后面移除最短匹配 `$Pattern` 的部分
- `${var%%Pattern}`: 从 `$var` 后面移除最长匹配 `$Pattern` 的部分

## 条件检查

### 命令是否存在

```sh
if command -v xcompmgr; then
    xcompmgr -c &
fi
```

### 进程是否存在

```sh
if pgrep -x "gedit" > /dev/null
then
    echo "Running"
else
    echo "Stopped"
fi

if ! pgrep -x "gedit" > /dev/null
then
    echo "Stopped"
fi
```

> 参考于 <https://askubuntu.com/questions/157779/how-to-determine-whether-a-process-is-running-or-not-and-make-use-it-to-make-a-c>。

## for 循环

```sh
for x in "a" "b" "c"
do
  echo "${x}"
done
```
