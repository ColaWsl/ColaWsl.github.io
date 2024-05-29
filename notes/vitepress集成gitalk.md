# 教程：Vitepress 集成 Gitalk

## 概述
在这个教程中，我们将学习如何在你的 Vitepress 文 档中集成 Gitalk，
以便读者可以在你的文档页面中进行评论交流。Gitalk 是一个基于 GitHub
Issue 和 GitHub API 的评论系统，它的集成能够方便地让你管理评论，同时与你的文档代码托管在同一个仓库中。

## 步骤

### 步骤一：在 GitHub 创建 OAuth Application
1. 登录 GitHub 账号。
2. 进入 Settings > Developer settings > OAuth Apps。
3. 点击 "New OAuth App"。
4. 填写应用信息，如 "Application name"、"Homepage URL" 和 "Authorization callback URL"。在 "Homepage URL" 和 "Authorization callback URL" 中填写你的网站的 URL。
5. 点击 "Register application"。

### 步骤二：安装并配置 Vitepress 插件
1. 在你的 Vitepress 项目目录下安装 `@vuepress/plugin-docsearch` 插件：
    ```bash
    npm install @vuepress/plugin-docsearch
    ```
2. 添加Comment vue 组件
    ```js
    tianjia zujian 
    ```
3. 绑定

### 步骤三：

### 暗黑模式
gitalk 官方是不带暗黑模式的 可以通过修改css去达到dark 模式

## 参考文档
- [教程](https://blog.csdn.net/qq_38689395/article/details/136615496)
- [可能遇到的问题](https://zhuanlan.zhihu.com/p/260781932)


