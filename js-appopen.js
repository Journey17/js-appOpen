function testApp(url) {
  var hasApp = true
  var t1 = Date.now()
  var ifr = document.createElement('iframe')
  ifr.setAttribute('src', url)
  ifr.setAttribute('style', 'display:none')
  document.body.appendChild(ifr)

  setTimeout(function () {
    var t2 = Date.now()
    if (!t1 || t2 - t1 < 1500) {
      // 设置定时器触发时间为1500ms
      hasApp = false
    }

    if (!hasApp) {
      var r = confirm('您没有安装微信，请先安装微信!')
      if (r) {
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
        var android = /Android/.test(navigator.userAgent)
        var storeUrl = 'http://weixin.qq.com/'

        if (iOS) {
          storeUrl = 'https://apps.apple.com/cn/app/wechat/id414478124' // iOS应用商店链接
        } else if (android) {
          storeUrl = 'market://details?id=com.tencent.mm' // Android应用商店链接
        }

        if (storeUrl !== '') {
          window.open(storeUrl, '_blank')
        }
      }
    } else {
      // 安装了微信
      // window.location.href = "weixin://"; // 启用这里代码后会导致两次打开确认
    }

    document.body.removeChild(ifr)
  }, 1500)
}
