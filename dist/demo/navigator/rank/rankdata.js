const results = {
  code: 200,
  count: 60,
  results: [
    {
      "link": "https://s.weibo.com/top/summary?cate=realtimehot",
      "text": "微博热搜",
      "image": "https://static.jiabe.com/qcool/category-rank/r1.jpg",
      "category": "search",
      "hot": true
    }, {
      "link": "http://top.baidu.com/",
      "text": "百度风云榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r2.jpg",
      "category": "search",
      "hot": false
    }, {
      "link": "http://top.sogou.com/home.html",
      "text": "搜狗热搜榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r3.jpg",
      "category": "search",
      "hot": false
    }, {
      "link": "https://trends.so.com/hot",
      "text": "360实时热点",
      "image": "https://static.jiabe.com/qcool/category-rank/r4.jpg",
      "category": "search",
      "hot": false
    }, {
      "link": "https://index.toutiao.com/",
      "text": "头条指数",
      "image": "https://static.jiabe.com/qcool/category-rank/r5.jpg",
      "category": "search",
      "hot": false
    }, {
      "link": "https://www.zhihu.com/billboard",
      "text": "知乎热榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r6.jpg",
      "category": "comment",
      "hot": true
    }, {
      "link": "http://c.tieba.baidu.com/hottopic/browse/topicList?res_type=1",
      "text": "贴吧热议榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r7.jpg",
      "category": "comment",
      "hot": false
    }, {
       "link": "https://dig.chouti.com/all/hot/24hr/1",
       "text": "抽屉新热榜",
       "image": "https://static.jiabe.com/qcool/category-rank/r8.jpg",
      "category": "comment",
       "hot": false
    }, {
      "link": "https://www.douban.com/group/explore",
      "text": "豆瓣讨论精选",
      "image": "https://static.jiabe.com/qcool/category-rank/r6.jpg",
      "category": "comment",
      "hot": false
    }, {
      "link": "https://www.zhihu.com/topic/19776749/top-answers",
      "text": "知乎话题榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r7.jpg",
      "category": "comment",
      "hot": true
    }, {
      "link": "https://www.v2ex.com/?tab=hot",
      "text": "V2EX最热",
      "image": "https://static.jiabe.com/qcool/category-rank/b2.jpg",
      "category": "comment",
      "hot": false
    }, {
      "link": "https://www.qdaily.com/tags/29.html",
      "text": "好奇心TOP15",
      "image": "https://static.jiabe.com/qcool/category-rank/b7.jpg",
      "category": "comment",
      "hot": false
    }, {
      "link": "https://www.cnbeta.com/top10.htm",
      "text": "cnBeta TOP10",
      "image": "https://static.jiabe.com/qcool/category-rank/b8.jpg",
      "category": "comment",
      "hot": false
    }, {
      "link": "http://www.hurun.net/CN/HuList/Index",
      "text": "胡润百富榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r5.jpg",
      "category": "money",
      "hot": true
    }, {
      "link": "http://www.fortunechina.com/rankings/index.htm",
      "text": "财富榜单",
      "image": "https://static.jiabe.com/qcool/category-rank/r4.jpg",
      "category": "money",
      "hot": false
    }, {
      "link": "http://www.forbeschina.com/list/",
      "text": "福布斯榜单",
      "image": "https://static.jiabe.com/qcool/category-rank/r3.jpg",
      "category": "money",
      "hot": false
    }, {
      "link": "https://v.qq.com/x/hotlist/search/?channel=555&source=common_nav_vs",
      "text": "全网影视热搜榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r2.jpg",
      "category": "movie",
      "hot": false
    }, {
      "link": "http://www.cbooo.cn/",
      "text": "电影票房榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b12.jpg",
      "category": "movie",
      "hot": false
    }, {
      "link": "http://maoyan.com/board",
      "text": "热映口碑榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r7.jpg",
      "category": "movie",
      "hot": true
    }, {
      "link": "https://movie.douban.com/chart",
      "text": "豆瓣电影榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b6.jpg",
      "category": "movie",
      "hot": false
    }, {
      "link": "http://movie.mtime.com/all/list/",
      "text": "时光电影热门",
      "image": "https://static.jiabe.com/qcool/category-rank/b11.jpg",
      "category": "movie",
      "hot": true
    }, {
      "link": "http://top.youku.com/rank/?spm=a2htp.20023922.m_232715.5~5~5~5!2~5~H2~A",
      "text": "优酷指数榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b4.jpg",
      "category": "movie",
      "hot": false
    }, {
      "link": "http://top.iqiyi.com/rebobang.html",
      "text": "爱奇艺风云榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b7.jpg",
      "category": "movie",
      "hot": false
    }, {
      "link": "https://tv.sohu.com/hothdtv/",
      "text": "搜狐视频榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b3.jpg",
      "category": "movie",
      "hot": false
    }, {
      "link": "https://www.vmovier.com/hot#rotate-nav",
      "text": "热门短视频",
      "image": "https://static.jiabe.com/qcool/category-rank/b2.jpg",
      "category": "movie",
      "hot": true
    }, {
      "link": "https://www.bilibili.com/ranking?spm_id_from=333.334.banner_link.1",
      "text": "B站热门排行榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b8.jpg",
      "category": "movie",
      "hot": false
    }, {
      "link": "https://y.qq.com/n/yqq/toplist/4.html#stat=y_new.index.toplist.detail.4",
      "text": "QQ音乐巅峰榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b9.jpg",
      "category": "music",
      "hot": true
    }, {
      "link": "https://music.163.com/#/discover/toplist",
      "text": "云音乐飙升榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r3.jpg",
      "category": "music",
      "hot": false
    }, {
      "link": "https://www.xiami.com/chart?spm=a1z1s.6843761.1110925385.2.8vQoSa",
      "text": "虾米官方榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r4.jpg",
      "category": "music",
      "hot": false
    }, {
      "link": "http://www.kugou.com/yy/rank/home/1-8888.html?from=rank",
      "text": "酷狗TOP500",
      "image": "https://static.jiabe.com/qcool/category-rank/r5.jpg",
      "category": "music",
      "hot": false
    }, {
      "link": "http://music.taihe.com/top/",
      "text": "千千音乐榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r6.jpg",
      "category": "music",
      "hot": false
    }, {
      "link": "http://www.app-echo.com/#/rank/sound-hot",
      "text": "echo回声榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b10.jpg",
      "category": "music",
      "hot": true
    }, {
      "link": "http://vchart.yinyuetai.com/vchart/trends",
      "text": "音乐MV榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b7.jpg",
      "category": "music",
      "hot": false
    }, {
      "link": "https://music.douban.com/chart",
      "text": "豆瓣音乐榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b8.jpg",
      "category": "music",
      "hot": false
    }, {
      "link": "http://www.poco.cn/works/works_list?classify_type=0&works_type=week",
      "text": "POCO人气摄影",
      "image": "https://static.jiabe.com/qcool/category-rank/r7.jpg",
      "category": "photo",
      "hot": false
    }, {
      "link": "http://www.polayoutu.com/collections",
      "text": "泼辣有图",
      "image": "https://static.jiabe.com/qcool/category-rank/r8.jpg",
      "category": "photo",
      "hot": true
    }, {
      "link": "https://tuchong.com/explore/",
      "text": "图虫摄影",
      "image": "https://static.jiabe.com/qcool/category-rank/b4.jpg",
      "category": "photo",
      "hot": false
    }, {
      "link": "https://500px.com/upcoming",
      "text": "500px热门",
      "image": "https://static.jiabe.com/qcool/category-rank/b5.jpg",
      "category": "photo",
      "hot": false
    }, {
      "link": "https://unsplash.com/",
      "text": "unsplash",
      "image": "https://static.jiabe.com/qcool/category-rank/b11.jpg",
      "category": "photo",
      "hot": true
    }, {
      "link": "http://huaban.com/favorite/beauty/",
      "text": "花瓣人像",
      "image": "https://static.jiabe.com/qcool/category-rank/b3.jpg",
      "category": "photo",
      "hot": false
    }, {
      "link": "https://h.bilibili.com/common/rank#/draw",
      "text": "B站画友榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b4.jpg",
      "category": "photo",
      "hot": false
    }, {
      "link": "https://www.zcool.com.cn/top/product.do?rankId=76&rankProductCategory=33",
      "text": "站酷摄影榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b10.jpg",
      "category": "photo",
      "hot": false
    }, {
      "link": "https://photos.oneplus.com/cn/gallery",
      "text": "一加摄影榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b7.jpg",
      "category": "photo",
      "hot": false
    }, {
      "link": "http://top.jd.com/",
      "text": "京东排行榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r7.jpg",
      "category": "product",
      "hot": false
    }, {
      "link": "https://product.pconline.com.cn/hot/",
      "text": "热门IT产品榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r1.jpg",
      "category": "product",
      "hot": true
    }, {
      "link": "http://top.zol.com.cn/",
      "text": "中关村产品指数",
      "image": "https://static.jiabe.com/qcool/category-rank/r8.jpg",
      "category": "product",
      "hot": true
    }, {
      "link": "https://product.pconline.com.cn/hot/mobile/smalltype/",
      "text": "手机排行榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r6.jpg",
      "category": "product",
      "hot": false
    }, {
      "link": "http://bang.dangdang.com/books/bestsellers/01.00.00.00.00.00-recent7-0-0-1-1",
      "text": "图书畅销榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r5.jpg",
      "category": "product",
      "hot": false
    }, {
      "link": "https://www.jiemian.com/lists/171.html",
      "text": "界面金榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r2.jpg",
      "category": "other",
      "hot": false
    }, {
      "link": "https://www.newrank.cn/public/info/list.html?period=day&type=data",
      "text": "自媒体排名",
      "image": "https://static.jiabe.com/qcool/category-rank/r4.jpg",
      "category": "other",
      "hot": true
    }, {
      "link": "http://top.chinaz.com/",
      "text": "网站排行榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r3.jpg",
      "category": "other",
      "hot": false
    }, {
      "link": "http://www.iimedia.cn/#xinsan",
      "text": "艾媒金榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r2.jpg",
      "category": "other",
      "hot": false
    }, {
      "link": "https://www.caasdata.com/index/rank/index.html",
      "text": "卡思榜单",
      "image": "https://static.jiabe.com/qcool/category-rank/r1.jpg",
      "category": "other",
      "hot": true
    }, {
      "link": "https://www.qimai.cn/rank",
      "text": "App排行榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b9.jpg",
      "category": "other",
      "hot": false
    }, {
      "link": "http://www.aldzs.com/toplist",
      "text": "小程序排行榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r7.jpg",
      "category": "other",
      "hot": false
    }, {
      "link": "http://index.baidu.com/v2/rank/index.html?#/industryrank",
      "text": "行业排行榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r2.jpg",
      "category": "other",
      "hot": false
    }, {
      "link": "http://www.xiachufang.com/explore/",
      "text": "美食菜谱榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b2.jpg",
      "category": "other",
      "hot": false
    }, {
      "link": "https://www.qidian.com/rank",
      "text": "热门小说榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b8.jpg",
      "category": "other",
      "hot": true
    }, {
      "link": "http://top.17173.com/",
      "text": "游戏排行榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b10.jpg",
      "category": "game",
      "hot": false
    }, {
      "link": "http://games.qq.com/nettop/index.htm",
      "text": "腾讯游戏榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b7.jpg",
      "category": "game",
      "hot": true
    }, {
      "link": "https://www.taptap.com/top/download",
      "text": "Tap游戏榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r3.jpg",
      "category": "game",
      "hot": false
    }, {
      "link": "http://www.4399.com/flash/ph.htm",
      "text": "小游戏排行榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r6.jpg",
      "category": "game",
      "hot": false
    }, {
      "link": "http://top.sina.com.cn/",
      "text": "新浪游戏榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b6.jpg",
      "category": "game",
      "hot": false
    }, {
      "link": "http://www.xiaohulu.com/anchor2/",
      "text": "主播排行榜",
      "image": "https://static.jiabe.com/qcool/category-rank/r4.jpg",
      "category": "game",
      "hot": false
    }, {
      "link": "http://games.sina.com.cn/zt_d/g/whjphb/",
      "text": "游戏自媒体榜",
      "image": "https://static.jiabe.com/qcool/category-rank/b4.jpg",
      "category": "game",
      "hot": false
    }
  ]
}