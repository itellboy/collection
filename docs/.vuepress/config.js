module.exports = {
  title: 'Collection',
  description: 'Love what you do, do what you love. :)',
  base: '/collection/',
  head: [
    ['link', { ref: 'icon', href: '/image/js-cube.png' }],
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
    logo: '/image/js-cube.png',
    sidebar: [
      ['/welcome', '欢迎'],
      {
        title: '2020年',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/monthly/m202003', '03月']
        ]
      }
    ],
    nav: [{ text: '宝藏博主', link: '/blog' }],
  },
}