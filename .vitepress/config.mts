import { defineConfig } from 'vitepress'

import timeline from 'vitepress-markdown-timeline'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    // 添加 favicon 链接
    ['link', { rel: 'icon', href: '/home.jpg' }],
  ],
  title: "NULL神",
  description: "A Shared Site",
  themeConfig: {
    logo: '/home.jpg',
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   {
    //     text: '分类',
    //     items: [
    //       { text: 'redis', link: '/notes/redis/index.md' },
    //       { text: 'docker', link: '/notes/docker/index.md' },
    //       { text: 'springboot', link: '/notes/springboot/index.md' },
    //       {
    //         // 该部分的标题
    //         text: '二级菜单',
    //         items: [
    //           { text: 'Item A', link: '...' },
    //           { text: 'Item B', link: '...' }
    //         ]
    //       },
    //       { text: '百度', link: 'https://www.baidu.com' },
    //     ]
    //   },
    //   { text: '后端',
    //     items: [
    //       { text: 'Spring Security', link: '/notes/spring-security/SpringSecurity.md' },
    //       { text: 'Springboot', link: '/notes/springboot/Linux.md' },
    //       { text: 'Linux OS', link: '/notes/linux/Linux.md' },
    //       { text: 'JVM 虚拟机', link: '/notes/jvm/bytecode.md' },
    //       { text: 'ElasticSearch', link: '/notes/elasticsearch/ElasticSearch.md' },
    //     ]
    //   },
    //   { text: 'Spring 全家桶', link: '/' },
    //   { text: 'Todo', link: '/todo/index.md' },
    //   { text: '关于本站', link: '/about/index.md' }
    // ],

    nav: [
      { text: '首页', link: '/' },
      { text: '交易入门', link: '/docs/trading-intro' },
      { text: '社区介绍', link: '/docs/community' },
      // { text: 'GitHub', link: 'https://github.com/ColaWsl/ColaWsl.github.io' }
    ],

    // sidebar: {
    //   //   配置当位于不同目录分类时 显示不同的侧边栏
    //   '/about':[
    //     {
    //       text: '关于我',
    //       collapsed: false,
    //       items: [
    //         { text: '个人介绍', link: '/about/'},
    //         { text: '旅游日记', link: '/about/travel'},
    //         { text: '我的经历', link: '/about/我的经历'},
    //         { text: '本站配置', link: '/about/Vitepress 配置'}
    //       ]
    //     }
    //   ],
    //   '/todo': [
    //     {
    //       'text': '清单',
    //       'link': '/todo/list'
    //     },
    //     {
    //       'text': '2024',
    //       collapsed: false,
    //       items: [
    //         { text: 'May', link: '/todo/2024/May'},
    //         { text: 'June', link: '/todo/2024/June'},
    //       ]
    //     },
    //     {
    //       'text': '2025',
    //       collapsed: false,
    //     }
    //   ],
    //   '/notes/jvm/':[
    //     {
    //       text: 'JVM 虚拟机相关',
    //       collapsed: true,
    //       items: [
    //         { text: '字节码杂谈', link: '/notes/jvm/bytecode' },
    //       ]
    //     },
    //   ],
    //   '/notes/docker/':[
    //     {
    //       text: 'docker',
    //       collapsed: true,
    //       items: [
    //         { text: 'Docker', link: '/notes/docker/' },
    //         { text: '部署中间件', link: '/notes/docker/部署中间件' },
    //         { text: '自动化部署持续集成CI/CD', link: '/notes/docker/自动化部署持续集成CI/CD' },
    //         { text: 'Introduction', link: '/notes/springboot/' },
    //         { text: '多环境开发', link: '/notes/springboot/多环境开发' },
    //         { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' }
    //       ]
    //     },
    //     { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
    //     {
    //       text: 'docker',
    //       collapsed: true,
    //       items: [
    //         { text: 'Docker', link: '/notes/docker/' },
    //         { text: '部署中间件', link: '/notes/docker/部署中间件' },
    //         { text: '自动化部署持续集成CI/CD', link: '/notes/docker/自动化部署持续集成CI/CD' },
    //         { text: 'Introduction', link: '/notes/springboot/' },
    //         { text: '多环境开发', link: '/notes/springboot/多环境开发' },
    //         { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' }
    //       ]
    //     }
    //   ],
    //   '/notes/redis/':[
    //     {
    //       text: 'springboot',
    //       collapsed: true,
    //       items: [
    //         { text: 'Introduction', link: '/notes/springboot/' },
    //         { text: '多环境开发', link: '/notes/springboot/多环境开发' },
    //         { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
    //         { items: [
    //             { text: 'Introduction', link: '/notes/springboot/' },
    //             { text: '多环境开发', link: '/notes/springboot/多环境开发' },
    //             { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
    //           ] }
    //       ]
    //     },
    //     {
    //       text: 'springboot',
    //       items: [
    //         { text: 'Introduction', link: '/notes/springboot/' },
    //         { text: '多环境开发', link: '/notes/springboot/多环境开发' },
    //         { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
    //         { items: [
    //             { text: 'Docker', link: '/notes/docker/' },
    //             { text: 'Introduction', link: '/notes/springboot/' },
    //             { text: '多环境开发', link: '/notes/springboot/多环境开发' },
    //             { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
    //           ] }
    //       ]
    //     }
    //   ],
    //   '/notes/springboot/':[
    //     {
    //       text: 'springboot',
    //       collapsed: true,
    //       items: [
    //         { text: 'Introduction', link: '/notes/springboot/' },
    //         { text: '多环境开发', link: '/notes/springboot/多环境开发' },
    //         { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
    //         { text: 'springboot 集成第三方框架',
    //           collapsed: true,
    //           items: [
    //             { text: 'Docker', link: '/notes/docker/' },
    //             { text: 'Introduction', link: '/notes/springboot/' },
    //             { text: '多环境开发', link: '/notes/springboot/多环境开发' },
    //             { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
    //           ] },
    //         { text: '整合第三方框架', link: '/notes/springboot/整合第三方框架' },
    //       ]
    //     }
    //   ],
    // },

    sidebar: {
      '/': [
        {
          text: '入门指南',
          items: [
            { text: '交易入门', link: '/docs/trading-intro' },
            { text: '币安使用', link: '/docs/exchanges/binance' },
            { text: '欧易使用', link: '/docs/exchanges/okx' },
          ]
        },
        {
          text: '实战策略',
          items: [
            { text: '现货策略', link: '/docs/strategies/spot-strategy' },
            { text: '合约基础', link: '/docs/strategies/futures-basic' },
            { text: '量化交易', link: '/docs/strategies/ai-quant' },
          ]
        },
        {
          text: '辅助工具',
          items: [
            { text: 'TradingView 教程', link: '/docs/tools/tradingview' },
            { text: '热点追踪工具', link: '/docs/tools/token-tools' },
            { text: '机器人工具', link: '/docs/tools/bot-usage' },
          ]
        },
        {
          text: '其他',
          items: [
            { text: '社区介绍', link: '/docs/community' },
            { text: '术语表', link: '/docs/glossary' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ColaWsl' },
      { icon: 'instagram', link: 'https://github.com/ColaWsl' },
      { icon: 'x', link: 'https://github.com/'}
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2025-present NULL'
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
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local'
    },

    // carbon 广告位
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // }

  },

  // config timeline
  markdown: {
    config: (md) =>{
      md.use(timeline)
    }
  }
})
