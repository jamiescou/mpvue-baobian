<template>
  <div class="pages_bind_phone">
    <div class="bind_line">
      <div class="bind_label">
        手机号码
      </div>
      <input class="phone_number"
        type="number" maxlength="11"
        placeholder="请输入手机号"
        placeholder-style="font-size:30rpx;color:rgba(202,202,202,1);"
        v-model="phoneNum">
      <span class="code_click" @tap="isClick && gainCode()">{{time}}</span>
    </div>
    <div class="bind_line">
      <div class="bind_label">
        验证码
      </div>
      <input class="phone_number"
        type="number" maxlength="6"
        placeholder="输入6位验证码"
        placeholder-style="font-size:30rpx;color:rgba(202,202,202,1);"
        v-model="verifyCode">
    </div>
    <div class="finish_bind" :class="active ? 'active' : ''" @click="bindSMS">
      完成
    </div>
  </div>
</template>
<script>
const {setStorage}  = require('../../utils/auth')
export default {
  data () {
    return {
      phoneNum: '',
      verifyCode: '',
      isClick:  true, // 是否控制获取验证码的点击事件
      time: '获取验证码',
      interval: null,
      active: false
    }
  },
  methods: {
    // 获取验证码
    gainCode: function () {
      if(!this.isClick){
        return;
      }
      let mobile = this.phoneNum;
      // if(flag){
      let params = {
        phone: mobile,
        type: 1
      }
      this.request.post('/api/user/sendsms', params).then(res => {
        if (res.code === '0') {
          this.isClick = false;
          let times = 60; // 用于倒计时
          this.time = times+'s';
          this.interval = setInterval(() =>{
            times--;
            this.time = times+'s';
            if(times < 0){
              this.time = '重新获取';
              this.isClick = true;
              clearInterval(this.interval);
            }
          },1000)
        }
      }).catch(err => {
        console.log(err);
      })
    },
    bindSMS(){
      let {phoneNum, verifyCode} = this
      if (!phoneNum || !verifyCode) {
        wx.showToast({
          icon: "none",
          title: "请输入手机号或验证码"
        })
        return false
      }
      this.active = true
      let params = {
        phone: phoneNum,
        verifyCode: verifyCode
      }
      this.request.post('/api/user/updateUserPhone', params).then(res => {
        if(res.code === '0') {
          wx.showToast({
            icon: "none",
            title: "绑定成功"
          })

          setTimeout( () => {
            wx.navigateBack()
          }, 1000)
        }
      })
    }
  },
  onLoad(){
    Object.assign(this.$data, this.$options.data())
  },
  onShow(){
    this.isClick = true;
    let interval = this.interval;    // 保存定时器的id
    clearInterval(interval);
    this.time = '获取验证码';
  }
}
</script>
<style lang="stylus" scoped>
  .pages_bind_phone
    position absolute
    width 100%
    height 100%
    .finish_bind
      width 50%;
      margin 70rpx auto;
      line-height 74rpx;
      text-align center;
      font-size:32rpx;
      font-weight:400;
      color:rgba(255,255,255,1);
      height:74rpx;
      background:rgba(175,219,168,1);
      border-radius:10rpx;
      &.active
        background #FF8ACB7E !important
    .bind_line
      height 108rpx;
      border-bottom:1rpx solid rgba(241,241,241,1);
      display flex
      margin: 0 2%;
      align-items center
      .bind_label
        padding-left 20rpx;
        width 28%;
        font-size:32rpx;
        font-weight:bold;
        color:rgba(51,51,51,1);
      .phone_number
        text-align center;
        width 44%;
        font-size:30rpx;
        font-weight:400;
      .code_click
        text-align center;
        width 25%;
        padding 10rpx 15rpx;
        font-size:28rpx;
        font-weight:400;
        color:rgba(138,203,126,1);
        border:1rpx solid rgba(138,202,126,1);
        border-radius:10rpx;
</style>
