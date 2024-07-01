import { defineConfig } from 'vitepress'

import timeline from 'vitepress-markdown-timeline'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "爱幻想的Sheep",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/home.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '分类',
        items: [
          { text: 'redis', link: '/notes/redis/index.md' },
          { text: 'docker', link: '/notes/docker/index.md' },
          { text: 'springboot', link: '/notes/springboot/index.md' },
          {
            // 该部分的标题
            text: '二级菜单',
            items: [
              { text: 'Item A', link: '...' },
              { text: 'Item B', link: '...' }
            ]
          },
          { text: '百度', link: 'https://www.baidu.com' },
        ]
      },
      { text: '后端',
        items: [
          { text: 'Spring Security', link: '/notes/spring-security/SpringSecurity.md' },
          { text: 'Springboot', link: '/notes/springboot/Linux.md' },
          { text: 'Linux OS', link: '/notes/linux/Linux.md' },
          { text: 'ElasticSearch', link: '/notes/elasticsearch/ElasticSearch.md' },
        ]
      },
      { text: '前端', link: '/' },
      { text: 'Spring 全家桶', link: '/' },
      { text: 'Todo', link: '/todo/index.md' },
      { text: '关于我', link: '/about/index.md' }
    ],

    sidebar: {
      //   配置当位于不同目录分类时 显示不同的侧边栏
      '/about':[
        {
          text: '关于我',
          collapsed: false,
          items: [
            { text: 'about me', link: '/about/'},
            { text: '旅游日记', link: '/about/travel'},
            { text: '我的经历', link: '/about/我的经历'}
          ]
        }
      ],
      '/todo': [
        {
          'text': '清单',
          'link': '/todo/list'
        },
        {
          'text': '2024',
          collapsed: false,
          items: [
            { text: 'May', link: '/todo/2024/May'},
            { text: 'June', link: '/todo/2024/June'},
          ]
        },
        {
          'text': '2025',
          collapsed: false,
        }
      ],
      '/notes/docker/':[
        {
          text: 'docker',
          collapsed: true,
          items: [
            { text: 'Docker', link: '/notes/docker/' },
            { text: '部署中间件', link: '/notes/docker/部署中间件' },
            { text: '自动化部署持续集成CI/CD', link: '/notes/docker/自动化部署持续集成CI/CD' },
            { text: 'Introduction', link: '/notes/springboot/' },
            { text: '多环境开发', link: '/notes/springboot/多环境开发' },
            { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' }
          ]
        },
        { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
        {
          text: 'docker',
          collapsed: true,
          items: [
            { text: 'Docker', link: '/notes/docker/' },
            { text: '部署中间件', link: '/notes/docker/部署中间件' },
            { text: '自动化部署持续集成CI/CD', link: '/notes/docker/自动化部署持续集成CI/CD' },
            { text: 'Introduction', link: '/notes/springboot/' },
            { text: '多环境开发', link: '/notes/springboot/多环境开发' },
            { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' }
          ]
        }
      ],
      '/notes/redis/':[
        {
          text: 'springboot',
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/notes/springboot/' },
            { text: '多环境开发', link: '/notes/springboot/多环境开发' },
            { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
            { items: [
                { text: 'Introduction', link: '/notes/springboot/' },
                { text: '多环境开发', link: '/notes/springboot/多环境开发' },
                { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
              ] }
          ]
        },
        {
          text: 'springboot',
          items: [
            { text: 'Introduction', link: '/notes/springboot/' },
            { text: '多环境开发', link: '/notes/springboot/多环境开发' },
            { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
            { items: [
                { text: 'Docker', link: '/notes/docker/' },
                { text: 'Introduction', link: '/notes/springboot/' },
                { text: '多环境开发', link: '/notes/springboot/多环境开发' },
                { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
              ] }
          ]
        }
      ],
      '/notes/springboot/':[
        {
          text: 'springboot',
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/notes/springboot/' },
            { text: '多环境开发', link: '/notes/springboot/多环境开发' },
            { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
            { text: 'springboot 集成第三方框架',
              collapsed: true,
              items: [
                { text: 'Docker', link: '/notes/docker/' },
                { text: 'Introduction', link: '/notes/springboot/' },
                { text: '多环境开发', link: '/notes/springboot/多环境开发' },
                { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
              ] },
            { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ColaWsl' },
      { icon: 'instagram', link: 'https://github.com/ColaWsl' },
      { icon: 'x', link: 'https://github.com/'}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Austin Slwang'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    editLink: {
      pattern: 'https://github.com/ColaWsl/ColaWsl.github.io/tree/master/:path',
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: 'local'
    },

  },

  // config timeline
  markdown: {
    config: (md) =>{
      md.use(timeline)
    }
  }
})
