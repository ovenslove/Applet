//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://mmbiz.qpic.cn/mmbiz_jpg/rFWVXwibLGty43VKrC7pO24gicT0xyLR0EvtTHLgbveCakHveEr1RpMI0em1ywiaXibvVYob98pUkn9MCtmbyxJ8Sg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1',
      'http://a1.qpic.cn/psb?/V14WDwZe14UYU3/UQUs.16VtVW2ZBoqvygIYx6WmgAFv32*ZLs3ddBetsc!/b/dPYAAAAAAAAA&bo=VAY4BHAXoA8FAIU!&rf=viewer_4',
      'http://ac-mhke0kuv.clouddn.com/9c91c094a8e20b9136c6.jpg?imageView/2/w/800/h/600/q/80/format/jpeg'
    ],
    blogList:[
        {
          preImg:'http://ac-mhke0kuv.clouddn.com/9c91c094a8e20b9136c6.jpg?imageView/2/w/800/h/600/q/80/format/jpeg',
          title:'小程序之个人博客',
          content:'本项目是使用小程序开发模式，以一个博客APP为开发案例，尽可能涵盖小程序所有的组件和API，组装成一个完整的小程序案例'
        },
        {
          preImg:'http://ac-mhke0kuv.clouddn.com/9c91c094a8e20b9136c6.jpg?imageView/2/w/800/h/600/q/80/format/jpeg',
          title:'小程序之个人博客',
          content:'本项目是使用小程序开发模式，以一个博客APP为开发案例，尽可能涵盖小程序所有的组件和API，组装成一个完整的小程序案例'
        },
        {
          preImg:'http://ac-mhke0kuv.clouddn.com/9c91c094a8e20b9136c6.jpg?imageView/2/w/800/h/600/q/80/format/jpeg',
          title:'小程序之个人博客',
          content:'本项目是使用小程序开发模式，以一个博客APP为开发案例，尽可能涵盖小程序所有的组件和API，组装成一个完整的小程序案例'
        },
        {
          preImg:'http://ac-mhke0kuv.clouddn.com/9c91c094a8e20b9136c6.jpg?imageView/2/w/800/h/600/q/80/format/jpeg',
          title:'小程序之个人博客',
          content:'本项目是使用小程序开发模式，以一个博客APP为开发案例，尽可能涵盖小程序所有的组件和API，组装成一个完整的小程序案例'
        },{
          preImg:'http://ac-mhke0kuv.clouddn.com/9c91c094a8e20b9136c6.jpg?imageView/2/w/800/h/600/q/80/format/jpeg',
          title:'小程序之个人博客',
          content:'本项目是使用小程序开发模式，以一个博客APP为开发案例，尽可能涵盖小程序所有的组件和API，组装成一个完整的小程序案例'
        },{
          preImg:'http://ac-mhke0kuv.clouddn.com/9c91c094a8e20b9136c6.jpg?imageView/2/w/800/h/600/q/80/format/jpeg',
          title:'小程序之个人博客',
          content:'本项目是使用小程序开发模式，以一个博客APP为开发案例，尽可能涵盖小程序所有的组件和API，组装成一个完整的小程序案例'
        },{
          preImg:'http://ac-mhke0kuv.clouddn.com/9c91c094a8e20b9136c6.jpg?imageView/2/w/800/h/600/q/80/format/jpeg',
          title:'小程序之个人博客',
          content:'本项目是使用小程序开发模式，以一个博客APP为开发案例，尽可能涵盖小程序所有的组件和API，组装成一个完整的小程序案例'
        },{
          preImg:'http://ac-mhke0kuv.clouddn.com/9c91c094a8e20b9136c6.jpg?imageView/2/w/800/h/600/q/80/format/jpeg',
          title:'小程序之个人博客',
          content:'本项目是使用小程序开发模式，以一个博客APP为开发案例，尽可能涵盖小程序所有的组件和API，组装成一个完整的小程序案例'
        },{
          preImg:'http://ac-mhke0kuv.clouddn.com/9c91c094a8e20b9136c6.jpg?imageView/2/w/800/h/600/q/80/format/jpeg',
          title:'小程序之个人博客',
          content:'本项目是使用小程序开发模式，以一个博客APP为开发案例，尽可能涵盖小程序所有的组件和API，组装成一个完整的小程序案例'
        },{
          preImg:'http://ac-mhke0kuv.clouddn.com/9c91c094a8e20b9136c6.jpg?imageView/2/w/800/h/600/q/80/format/jpeg',
          title:'小程序之个人博客',
          content:'本项目是使用小程序开发模式，以一个博客APP为开发案例，尽可能涵盖小程序所有的组件和API，组装成一个完整的小程序案例'
        }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
