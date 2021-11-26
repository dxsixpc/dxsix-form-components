#!/usr/bin/env sh

#发布流程，按顺序执行下方命令

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build
# 生成storybook静态文件
npm run build-storybook

# 进入生成的文件夹
cd storybook-static


git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:dxsixpc/dxsix-form-components.git master:gh-pages

cd -
