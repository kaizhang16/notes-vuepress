# Zsh

## $PATH

```sh
cat << 'EOF' >> ~/.zshenv
typeset -U PATH path
path=("$HOME/.local/bin" "$HOME/.yarn/bin" "$path[@]")
export PATH
EOF
```
