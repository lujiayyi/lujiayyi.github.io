#!/bin/bash

# 创建 images 目录（如果不存在）
mkdir -p images

# 下载背景图片
curl -o images/main-bg.png "https://raw.githubusercontent.com/templated/barn-animal/master/images/main-bg.png"
curl -o images/menu-active-bg.jpg "https://raw.githubusercontent.com/templated/barn-animal/master/images/menu-active-bg.jpg"
curl -o images/page-gradient-bg.png "https://raw.githubusercontent.com/templated/barn-animal/master/images/page-gradient-bg.png"

# 创建一个临时的个人照片（如果您还没有自己的照片）
convert -size 166x235 xc:white -gravity center -pointsize 20 -annotate 0 "Photo\nPlaceholder" images/head.png

# 创建一个临时的项目图片
convert -size 280x200 xc:white -gravity center -pointsize 20 -annotate 0 "Project\nImage" images/project.jpg

echo "图片下载完成！" 