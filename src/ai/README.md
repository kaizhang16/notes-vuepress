# GPU

## 驱动安装

```sh
ubuntu-drivers devices
```

## 显卡信息查看

```sh
nvidia-smi
```

## CUDA 版本查看

```sh
nvcc --version
```

## CUDA 与 Nvidia Driver 对应关系

| CUDA 版本 | Nvidia Driver 版本 |
|-----------|--------------------|
| 10.0      | 410                |
| 9.2       | 396                |
| 9.0       | 384                |

> 参考于 <https://docs.nvidia.com/deploy/cuda-compatibility/index.html>。
