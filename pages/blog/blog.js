var app = getApp()
Page({
  data: {

  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:options.title
    });
    this.setData({
        title: options.title
      });
      var that=this;
      //找后台要小程序允许的域名
      wx.request({
            url: 'https://api.jqstudy.cn/blog.json',
            method: 'GET',
            success:function(res) {
              that.setData({
                  title: res.data.title,
                  content:res.data.content
                });
              console.log(res.data);
            }

        })
  }
})
