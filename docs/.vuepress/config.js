module.exports = {
  title: 'Collection',
  description: 'Love what you do, do what you love. :)',
  base: '/collection/',
  head: [
    ['link', { rel: 'icon', href: '/svg/js-cube.svg', }],
  ],
  evergreen: true,
  cache: true,
  plugins: [
    '@vuepress/back-to-top', [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-161940276-1'
      }
    ]
  ],
  themeConfig: {
    repo: 'itellboy/collection',
    lastUpdated: 'Last Updated',
    logo: '/svg/js-cube.svg',
    sidebarDepth: 2,
    sidebar: [
      ['/welcome', '欢迎'],
      ['/recommendation', '社区精选'],
      {
        title: '2020年',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/monthly/m202005', '05月'],
          ['/monthly/m202004', '04月'],
          ['/monthly/m202003', '03月'],
        ]
      }
    ],
    nav: [
      { text: 'Treasure Blog', link: '/blog' },
      { text: 'Treasure Website', link: '/website' },
      { text: 'About Me', link: '/aboutme' },
      {
        text: 'Friendly',
        items: [
          {
            text: 'JavaScriptBasic',
            link: 'https://itellboy.github.io/javascript-basic',
          }
        ],
      }
    ],
  },
}