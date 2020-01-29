# Python

## Anaconda

创建环境：

```sh
conda create --name py3 python=3.7

# conda create --name py2 python=2.7
```

激活环境：

```sh
conda activate py3

# conda activate py2
```

## PyTorch

```sh
conda install pytorch torchvision cudatoolkit=10.0 -c pytorch
```

> 参考于 <https://pytorch.org/get-started/locally/>。

## 目录结构

```sh
project_name/
  main.py
  package_name/  # 常常与 project_name 相同
    config.py  # 定义 LOGGING_CONFIG 等
```

> 参考于 <https://docs.python-guide.org/writing/structure/>。

## subprocess

- [subprocess 不分割参数](https://stackoverflow.com/questions/16809198/python-subprocess-with-complex-arguments?answertab=votes#tab-top)。

## Virtualenv

### 安装

```sh
sudo pip3 install virtualenv
```

### 创建环境

```sh
virtualenv --python=/usr/bin/python2.7 ~/.virtualenvs/py2
```

### 激活环境

```sh
source ~/.virtualenvs/py2/bin/activate
```

## Python 2

### UTF-8

```py
#!/usr/bin/env python2
# -*- coding: utf-8 -*-

...
```
