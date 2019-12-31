<template>
  <div class="pages_login_main">
    <div class="login_avatar">
      <img src="/static/images/baobian_icon.png" alt="">
    </div>
    <!-- <div class="login_reg_btn">
      登陆/注册
    </div> -->
    <button class="login_reg_btn" open-type="getUserInfo" lang="zh_CN"  @getuserinfo="onGotUserInfo">登录/注册</button>
    <div class="wechat_reg_btn">
      微信手机号快捷登录
    </div>
    <div class="tips_msg">
      <div class="_tips">若您的微信手机号未注册，将为您直接注册，注册即视为同意</div> 
      <div class="asignment_tip">
        豹变学院用户协议（含隐私政策）
      </div>
    </div>
  </div>
</template>
<script>
const {getStorage, getSetting, login, checkUserAuth}  = require('../../utils/auth')
export default {
  data () {
    return {
        }
    },
  methods: {
    onGotUserInfo (e) {
      console.log('e==>', e)
    if (e.mp.detail.errMsg === 'getUserInfo:ok') {
          login()
      } else {
      }
    },
  }
}
</script>
<style lang="stylus" scoped>
  button::after{
    border:none
  }
  .pages_login_main
    position absolute
    width 100%
    height 100%
    .tips_msg
        position absolute
        width 100%;
        bottom 80rpx;
        left 3%;
      ._tips
        font-size:26rpx;
        font-weight:400;
        color:rgba(51,51,51,1);
      .asignment_tip
        font-size:26rpx;
        font-weight:400;
        color: #FFB28950
    .wechat_reg_btn
      width 90%;
      font-size:32rpx;
      font-weight:400;
      margin 0 auto;
      margin-top 40rpx;
      text-align center;
      line-height 98rpx;
      height:98rpx;
      background:linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
      border-radius:49rpx;
      color:rgba(255,255,255,1);
    .login_reg_btn
      width 90%;
      font-size:32rpx;
      font-weight:400;
      color:rgba(51,51,51,1);
      margin 0 auto;
      text-align center;
      line-height 98rpx;
      height:98rpx;
      background:rgba(241,241,241,1);
      border-radius:49rpx;
    .login_avatar
      margin 0 auto
      margin-top 100rpx
      margin-bottom 70rpx
      text-align center
      img 
        width:308rpx;
        height:267rpx;
      
</style>
