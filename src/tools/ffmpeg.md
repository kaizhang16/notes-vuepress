# ffmpeg

## 安装

### Nix

```sh
nix-env -iA nixpkgs.ffmpeg
```

### Ubuntu

```sh
sudo apt install ffmpeg
```

## 把图片转换为视频

```sh
ffmpeg -i image-%04d.jpg -framerate 30 -c:v libx264 -profile:v high -crf 20 -pix_fmt yuv420p output.mp4
```

- `-i`: 寻找的图片序列模式
- `-framerate`: 帧率
- `-c:v libx264`：the video codec is libx264 (H.264)
- `-profile:v high`: use H.264 High Profile (advanced features, better quality)
- `-crf 20`：constant quality mode, very high quality
  (lower numbers are higher quality, 18 is the smallest you would want to use)
- `-pix_fmt`：use YUV pixel format and 4:2:0 Chroma subsampling

> 参考于 <https://askubuntu.com/questions/610903/how-can-i-create-a-video-file-from-a-set-of-jpg-images>。

## 把视频转化为照片

```sh
ffmpeg -i a.mp4 image-%04d.jpg
```

> 参考于 <https://www.bugcodemaster.com/article/extract-images-frame-frame-video-file-using-ffmpeg>。

## 查看帧率

```sh
ffmpeg -i a.mp4
```

> 参考于 <https://askubuntu.com/questions/110264/how-to-find-frames-per-second-of-any-video-file>。
