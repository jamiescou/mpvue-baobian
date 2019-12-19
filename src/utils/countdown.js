class Countdown {
  static init(endTime,countdownId,that) {
    let end = new Date(endTime).getTime()
      that[countdownId] = {
        countdown: parseInt((end - new Date().getTime())/1000),
        day: parseInt((end - new Date().getTime())/1000/60/60/24),
        hour: parseInt((end - new Date().getTime())/1000/60/60%24) >= 10 ? parseInt((end - new Date().getTime())/1000/60/60%24) : '0' + parseInt((end - new Date().getTime())/1000/60/60%24),
        minute: parseInt((end - new Date().getTime())/1000/60%60) >= 10 ? parseInt((end - new Date().getTime())/1000/60%60) : '0' + parseInt((end - new Date().getTime())/1000/60%60),
        seconds: parseInt((end - new Date().getTime())/1000)%60 >= 10 ? parseInt((end - new Date().getTime())/1000)%60 : '0' + parseInt((end - new Date().getTime())/1000)%60
      }

    let interval = setInterval(() => {
      that[countdownId] = {
          countdown: parseInt((end - new Date().getTime())/1000),
          day: parseInt((end - new Date().getTime())/1000/60/60/24),
          hour: parseInt((end - new Date().getTime())/1000/60/60%24) >= 10 ? parseInt((end - new Date().getTime())/1000/60/60%24) : '0' + parseInt((end - new Date().getTime())/1000/60/60%24),
          minute: parseInt((end - new Date().getTime())/1000/60%60) >= 10 ? parseInt((end - new Date().getTime())/1000/60%60) : '0' + parseInt((end - new Date().getTime())/1000/60%60),
          seconds: parseInt((end - new Date().getTime())/1000)%60 >= 10 ? parseInt((end - new Date().getTime())/1000)%60 : '0' + parseInt((end - new Date().getTime())/1000)%60
        }

      if (that[countdownId].countdown <= 0) {
        clearInterval(interval)
        that[countdownId].seconds = '00'
      }
    }, 1000)
  }
}
export default Countdown