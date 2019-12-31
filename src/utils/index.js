function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

/*获取当前页url*/
function getCurrentPageUrl(){
  var pages = getCurrentPages()    //获取加载的页面
  var currentPage = pages[pages.length-1]    //获取当前页面的对象
  var url = currentPage.route    //当前页面url
  return url
}

/*获取当前页带参数的url*/
function getCurrentPageUrlWithArgs(){
  var pages = getCurrentPages()    //获取加载的页面
  var currentPage = pages[pages.length-1]    //获取当前页面的对象
  var url = currentPage.route    //当前页面url
  var options = currentPage.options    //如果要获取url中所带的参数可以查看options
  
  //拼接url的参数
  var urlWithArgs = url + '?'
  for(var key in options){
      var value = options[key]
      urlWithArgs += key + '=' + value + '&'
  }
  urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length-1)
  
  return urlWithArgs
}
function payMoneyCommon(jsonobject, payType){
  let {timeStamp, nonceStr, paySign, signType} = jsonobject
  wx.requestPayment({
    timeStamp,
    nonceStr,
    package: jsonobject.package,
    signType,
    paySign,
    success (res) {
      if (res.errMsg === 'requestPayment:ok') {
        // wx.showToast({
        //   title: '支付成功',
        //   icon: 'none'
        // })
        wx.navigateTo({
          url: '/pages/paySuccess/main?payType=' + payType
        })
      }
    },
    fail (res) {
      if (res.errMsg === 'requestPayment:fail cancel') {
        wx.showToast({
          title: '用户取消支付',
          icon: 'none'
        })
      }
    }
  })
}
export default {
  formatNumber,
  formatTime,
  getCurrentPageUrl,
  getCurrentPageUrlWithArgs,
  payMoneyCommon
}
