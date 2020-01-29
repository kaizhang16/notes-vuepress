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

## 函数

```sh
function_name () {
  commands
}
```

> 参考于 <https://linuxize.com/post/bash-functions/#bash-function-declaration>。

## 颜色

| 颜色         | 编码 |
|--------------|------|
| Black        | 0;30 |
| Dark Gray    | 1;30 |
| Red          | 0;31 |
| Light Red    | 1;31 |
| Green        | 0;32 |
| Light Green  | 1;32 |
| Brown/Orange | 0;33 |
| Yellow       | 1;33 |
| Blue         | 0;34 |
| Light Blue   | 1;34 |
| Purple       | 0;35 |
| Light Purple | 1;35 |
| Cyan         | 0;36 |
| Light Cyan   | 1;36 |
| Light Gray   | 0;37 |
| White        | 1;37 |

: ANSI 转义码

```sh
RED='\033[0;31m'
NC='\033[0m' # No Color
printf "I ${RED}love${NC} Stack Overflow\n"
```

> 参考于
> <https://stackoverflow.com/questions/5947742/how-to-change-the-output-color-of-echo-in-linux>。

## 字符串长度为 0 或者只包含空格

```sh
[[ -z "${param// }" ]]
```

> 参考于
> <https://unix.stackexchange.com/questions/146942/how-can-i-test-if-a-variable-is-empty-or-contains-only-spaces>。

## 函数返回 boolean

```sh
#!/bin/bash

isdirectory() {
  if [ -d "$1" ]
  then
    # 0 = true
    return 0
  else
    # 1 = false
    return 1
  fi
}


if isdirectory $1; then echo "is directory"; else echo "nopes"; fi
```

> 参考于
> <https://stackoverflow.com/questions/5431909/returning-a-boolean-from-a-bash-function>。

## 格式化字符串

用 `0` 补齐数字位数

```sh
$ printf "%05d\n" 99
00099
```

> 参考于
> <https://stackoverflow.com/questions/8789729/how-to-zero-pad-a-sequence-of-integers-in-bash-so-that-all-have-the-same-width>。

## 算术

`$((    ))` 里可以进行算术运算。

> 参考于
> <https://stackoverflow.com/questions/5688576/how-to-use-mod-operator-in-bash>。

### 数字

`10#` 表示十进制：

```sh
a=008
let b=a+1       # Generates an error because 008 is not valid in octal.
let b=10#$a+1   # Force a to be treated as base 10.  Note: the $ is required.
```

> 参考于
> <http://www.softpanorama.org/Scripting/Shellorama/arithmetic_expressions.shtml>。

`bash` 没有类型，视环境把变量解释为数字。

> 参考于
> <https://unix.stackexchange.com/questions/232384/argument-string-to-integer-in-bash/232386>。

## 备忘单

<https://devhints.io/bash>
