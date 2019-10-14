# Git

## 设置默认远端分支

```sh
git branch --set-upstream-to=origin/master
```

## 撤销某个文件的更改

```sh
git checkout -- ${filePath}
```

## 把某些文件重置到某个 commit

```sh
git checkout c5f567 -- file1/to/restore file2/to/restore
```

## coding.net

- push 到 `mr/master/branch_name` 分支即可自动提交 Merge Request（合并入 master）
