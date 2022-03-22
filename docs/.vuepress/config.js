module.exports = {
  theme: "reco",
  title: "泡椒",
  description: "鱼与熊掌不可兼得",

  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  // 移动端优化
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  // 主题设置
  themeConfig: {
    type: "blog",
    //信息名字
    author: "泡椒",
    // 显示在个人信息的头像
    authorAvatar: "/avatar.jpg",
    // 导航栏左侧logo
    logo: "/avatar.jpg",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航及其深度
    subSidebar: "auto",
    sidebarDepth: 1,
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 项目开始时间
    startYear: "2022",
    // 导航栏配置
    nav: [
      { text: "Home", link: "/", icon: "reco-home" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      {
        text: "GitHub",
        link: "https://github.com/lili142580/Vuepress_blog",
        icon: "reco-github",
      },
    ],
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认文案 “标签”
      },
    },
    // 友情链接
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        logo: "https://assets.smallsunnyfox.com/images/reco.png",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        logo: "https://assets.smallsunnyfox.com/images/theme_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
  },
  // 插件配置
  plugins: [
    [
      "permalink-pinyin",
      {
        lowercase: true,
        separator: "-",
      },
    ],
    [
      "vuepress-plugin-live2d",
      {
        modelName: [
          "z16",
          "Epsilon2.1",
          "izumi",
          "koharu",
          "shizuku",
          "miku",
          "hijiki",
          "tororo",
        ],
        mobileShow: false,
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: "烈火战马+空城计+重庆魂 (Live)",
            artist: "GAI周延",
            url:
              "http://m10.music.126.net/20210909162122/c1dce3a85a1dcb49c410143c4ee783a3/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3971505149/3fed/4c8c/4e1d/ffc3a4a312c2357f7cb3f82c3d2e4147.mp3",
            cover:
              "https://p1.music.126.net/NJf-GE3JeTimrsOvh05Flg==/109951165309368718.jpg?param=130y130",
          },
          {
            name: "桃子汽水",
            artist: "吕大叶 / 廖智慧",
            url:
              "http://m801.music.126.net/20210909163431/61e6aaeb4d1a1077b21aa6ea230a0d7a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/10519867318/231f/5563/6332/4b46ba3ac91cee569c928431be381e6c.mp3",
            cover:
              "https://p2.music.126.net/QCioazU_FEfCHnwLouZH9g==/109951166320237461.jpg?param=130y130",
          },
          {
            name: "经济舱",
            artist: "KEY.L刘聪 / Kafe.Hu",
            url:
              "http://m701.music.126.net/20210909164427/fb7d2bac3461916968844c04f7c32625/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/4667224709/3e57/fea2/6c59/708faba967a46610b5452c85842ea746.mp3",
            cover:
              "https://p1.music.126.net/fEOnFVVXSAe2LThsNfx0XA==/109951165432413857.jpg?param=130y130",
          },
          {
            name: "Broken Boy",
            artist: "Tonspender",
            url:
              "https://cdn-image.tsanfer.xyz/music/Tonspender%20-%20Broken%20Boy.flac",
            cover:
              "https://p2.music.126.net/4TnTRyHqa3-D2H1UnOa00w==/109951163666994621.jpg",
          },
          {
            name: "Life Of Sin Pt. 4",
            artist: "MitiS",
            url:
              "https://cdn-image.tsanfer.xyz/music/MitiS%20-%20Life%20Of%20Sin%20Pt.%204.mp3",
            cover:
              "https://p2.music.126.net/LmjTrSwvSLSNBsfFsQFO6g==/2533274793491743.jpg",
          },
          {
            name: "Sea Of Voices (RAC Mix)",
            artist: "Porter Robinson",
            url:
              "https://cdn-image.tsanfer.xyz/music/Porter%20Robinson%20-%20Sea%20Of%20Voices%20%28RAC%20Mix%29.mp3",
            cover:
              "https://p1.music.126.net/zjQROkEUokU7iS5eUvnVZQ==/3264450027161111.jpg",
          },
          {
            name: "New Lipstick",
            artist: "The Kissaway Trail",
            url:
              "https://cdn-image.tsanfer.xyz/music/The%20Kissaway%20Trail%20-%20New%20Lipstick.flac",
            cover:
              "https://p2.music.126.net/VjN74c1hoYgPCEZ9DngeQw==/109951163772624643.jpg",
          },
        ],

        shrinkMode: "mini",
      },
    ],
    [
      "@vuepress-reco/comments",
      {
        solution: "valine",
        options: {
          appId: "w2FwxYRubIKIiX6gzRwC02eU-gzGzoHsz", // your appId
          appKey: "uNlIvHvgTicoyJ6aUJzEQE25", // your appKey
        },
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-pagation",
      {
        perPage: 10
       
      },
    ],
  ],
};
