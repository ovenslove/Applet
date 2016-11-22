var app = getApp()
Page({
  data: {
    title:"",
    content:""
  },
  onLoad: function (options) {

      var that=this;
      //找后台要小程序允许的域名
      wx.request({
            url: 'https://api.jqstudy.cn/blogs/'+options.blogid,
            method: 'GET',
            header: {
                'content-type': 'application/json'
            },
            success:function(res) {
              that.setData({
                  title: res.data.title,
                  content:res.data.content
                });

            }

        })
  },
  onReady:function () {
    console.log();
    wx.setNavigationBarTitle({
      title:this.data.title
    })
  }
})
