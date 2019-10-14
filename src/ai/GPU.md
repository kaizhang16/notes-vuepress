# GPU

## CUDA 与 Nvidia Driver 对应关系

| CUDA 版本 | Nvidia Driver 版本 |
|-----------|--------------------|
| 10.0      | 410                |
| 9.2       | 396                |
| 9.0       | 384                |

> 参考于 <https://docs.nvidia.com/deploy/cuda-compatibility/index.html>。

## 显卡信息查看

```sh
nvidia-smi
```

## 显卡驱动安装

```sh
ubuntu-drivers devices
```

## CUDA 版本查看

```sh
nvcc --version
```

## CUDA 安装

### CUDA 9.0 on Ubuntu 16.04

```sh
curl -L \
  https://developer.nvidia.com/compute/cuda/9.0/Prod/local_installers/cuda-repo-ubuntu1604-9-0-local_9.0.176-1_amd64-deb \
  -o cuda-repo-ubuntu1604-9-0-local_9.0.176-1_amd64.deb
sudo dpkg -i cuda-repo-ubuntu1604-9-0-local_9.0.176-1_amd64.deb
sudo apt-key add /var/cuda-repo-9-0-local/7fa2af80.pub
sudo apt update
sudo apt install cuda
```

> 参考于 <https://developer.nvidia.com/cuda-90-download-archive?target_os=Linux&target_arch=x86_64&target_distro=Ubuntu&target_version=1604&target_type=deblocal>。
