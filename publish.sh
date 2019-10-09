#!/usr/bin/env bash

set -ex

cd src/.vuepress/dist/

#################################
# Deploy to git.dev.tencent.com
#################################
git init
git add -A
git commit -m "deploy"
git push -f git@git.dev.tencent.com:kaizhang91/notes.git master:coding-pages

#################################
# Deploy to e.coding.net
#################################
# zip -r dist.zip *

cd -
