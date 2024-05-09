call npm run docs:build
cd .vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

git push -f https://github.com/ColaWsl/slwang.github.io.git master:gh-pages
