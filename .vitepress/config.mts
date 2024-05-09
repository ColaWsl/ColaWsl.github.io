import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Austin Blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'notes', link: '/notes/docker/Docker' },
      { text: 'Guide', link: '/guide' },
      {
        text: 'Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Docker', link: '/notes/docker/Docker' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'docker',
        items: [
          { text: 'Docker', link: '/notes/docker/Docker' },
          { text: 'K8S', link: '/notes/docker/Docker' },
          { text: '部署中间件', link: '/notes/docker/Docker' },
          { text: '自动化部署持续集成CI/CD', link: '/notes/docker/Docker' },
        ]
      },
      {
        text: 'springboot',
        items: [
          { text: 'Introduction', link: '/notes/springboot/' },
          { text: 'springboot入门', link: '/notes/springboot/index.md' },
          { text: '整合三方框架', link: '/notes/springboot/index.md' },
        ]
      },
      {
        text: 'redis',
        items: [
          { text: 'Introduction', link: '/notes/redis/' },
          { text: 'redis', link: '/notes/redis/index.md' },
          { text: '整合三方框架', link: '/notes/redis/index.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ColaWsl' },
      { icon: 'instagram', link: 'https://github.com/ColaWsl' },
      { icon: 'x', link: 'https://github.com/'}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Austin Slwang'
    },

    editLink: {
      pattern: 'https://github.com/ColaWsl/vitepress-docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
