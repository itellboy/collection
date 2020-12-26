module.exports = {
  title: 'Collection',
  description: 'Love what you do, do what you love. :)',
  base: '/collection/',
  head: [['link', { rel: 'icon', href: '/svg/js-cube.svg' }]],
  evergreen: true,
  cache: true,
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-161940276-1',
      },
    ],
  ],
  themeConfig: {
    repo: 'itellboy/collection',
    lastUpdated: 'Last Updated',
    logo: '/svg/js-cube.svg',
    sidebarDepth: 2,
    sidebar: [
      ['/welcome', '欢迎'],
      {
        title: '我的专栏',
        children: [
          '/post/sort',
          '/post/binary-tree',
          '/post/es-latest',
          '/post/style',
          '/post/regexp',
          '/post/knowledge-graph',
          '/interview/question',
        ],
      },
      {
        title: '分享',
        children: [],
      },
      ['/recommendation', '社区精选'],
      {
        title: '2020年',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/monthly/m202012', '12月'],
          ['/monthly/m202011', '11月'],
          ['/monthly/m202010', '10月'],
          ['/monthly/m202009', '09月'],
          ['/monthly/m202008', '08月'],
          ['/monthly/m202007', '07月'],
          ['/monthly/m202006', '06月'],
          ['/monthly/m202005', '05月'],
          ['/monthly/m202004', '04月'],
          ['/monthly/m202003', '03月'],
        ],
      },
    ],
    nav: [
      { text: 'Treasure Blog', link: '/blog' },
      { text: 'Treasure Website', link: '/website' },
      { text: 'About Me', link: '/aboutme' },
      // {
      //   text: 'Interview', items: [
      //     { text: 'Question', link: '/interview/question' },
      //   ],
      // },
      {
        text: 'History',
        items: [
          { text: '三国', link: '/history/three-kingdoms' },
          { text: '明朝那些事', link: '/history/ming-dynasty' },
        ],
      },
      {
        text: 'Friendly',
        items: [
          {
            text: 'JavaScriptBasic',
            link: 'https://itellboy.github.io/javascript-basic',
          },
        ],
      },
    ],
  },
}
