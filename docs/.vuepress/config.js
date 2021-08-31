module.exports = {
    theme: 'reco',
    title: "hello reco",
    description: "鱼与熊掌不可兼得",
    // 移动端优化
    head: [
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    // 主题设置
    themeConfig: {
      type: 'blog',
      //信息名字
      author: 'new recoer',
      // 显示在个人信息的头像
      authorAvatar: '/avatar.jpg',
      // 导航栏左侧logo
      logo: '/avatar.jpg',
      // 搜索设置
      search: true,
      searchMaxSuggestions: 10,
      // 自动形成侧边导航及其深度
      subSidebar: 'auto',
      sidebarDepth: 1,
      // 最后更新时间
      lastUpdated: 'Last Updated',
      // 项目开始时间
      startYear: '2022',
      // 导航栏配置
      nav: [
        { text: 'Home', link: '/', icon: 'reco-home' },
        { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
        { text: 'GitHub', link: 'https://github.com/lili142580/Vuepress_blog', icon: 'reco-github' }
      ],
      // 博客配置
      blogConfig: {
        category: {
          location: 2,     // 在导航栏菜单中所占的位置，默认2
          text: 'Category' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: 'Tag'      // 默认文案 “标签”
        }
      },
      // 友情链接
      friendLink: [
        {
          title: '午后南杂',
          desc: 'Enjoy when you can, and endure when you must.',
          logo: 'https://assets.smallsunnyfox.com/images/reco.png',
          link: 'https://www.recoluan.com'
        },
        {
          title: 'vuepress-theme-reco',
          desc: 'A simple and beautiful vuepress Blog & Doc theme.',
          logo: "https://assets.smallsunnyfox.com/images/theme_reco.png",
          link: 'https://vuepress-theme-reco.recoluan.com'
        }
      ]
    },
    // 插件配置
    plugins: [
      [
        'permalink-pinyin',
        {
          lowercase: true,
          separator: '-'
        }
      ],
      [
        "vuepress-plugin-live2d",
        {
          "modelName": ["z16","Epsilon2.1","izumi","koharu","shizuku","miku","hijiki","tororo"],
          "mobileShow": false
        }
      ],
      [
          "vuepress-plugin-bgm-player",
          {
           "audios":[],
           
          }
      ]
    ]
  }