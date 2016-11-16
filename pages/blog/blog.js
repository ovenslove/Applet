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
      // 找后台要小程序允许的域名
      // wx.request({
      //       url: '',
      //       method: 'GET',
      //       success:function(res) {
      //           that.setData({
      //               result: res.data.results
      //           })
      //       }
      //
      //   })
  }
})
