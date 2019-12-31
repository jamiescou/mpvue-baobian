<template>
  <div class="pages_pay_success">
    <div class="black_icon">
      <div class="pay_icon">
        <img src="/static/images/paygood.png" alt="">
      </div>
      <div class="pay_success">
        支付成功
      </div>
    </div>
    <div class="order_detail">
      <div class="order_money">
        ￥ 1998.00
      </div>
      <div class="detail_label label_common">
        订单编号：836372039473
      </div>
      <div class="order_time label_common">
        下单时间：2019-12-21  20:32:12
      </div>
      <div class="order_type label_common">
        支付方式：微信支付
      </div>
    </div>
    <div class="pay_type_menu" @click="continueNextStep">
      {{payType === "continue" ? '继续支付' : '完善资料'}}
    </div>
    <div class="menu_tips">
      {{payType === "continue" ? '点击按钮，继续支付完成交易' : '点击按钮，填写资料完成交易'}}
    </div>
  </div>
</template>
<script>
export default {
  props: ['payType'],
  data () {
    return {
      payType: 'continue'
      }
    },
  methods: {
    continueNextStep(){
      console.log('payType=== in paysuccess', this.payType)
      if(this.payType === 'continue') {

      } else {
        wx.navigateTo({
          url: '/pages/myInfo/main'
        })
      }
    }
  },
  onLoad(){
    Object.assign(this.$data, this.$options.data())
  }
}
</script>
<style lang="stylus" scoped>
.pages_pay_success
  width: 100%;
  .black_icon
    height:443rpx;
    background:rgba(37,36,39,1);
    text-align center
    .pay_icon
      margin-bottom 30rpx
      img
        margin-top 150rpx
        width:98rpx;
        height:98rpx;
    .pay_success
      font-size:34rpx;
      font-weight:400;
      color:rgba(254,254,254,1);
  .order_detail
    margin 0 10%;
    margin-top: -44rpx;
    text-align center
    width:80%;
    height:430rpx;
    background:rgba(255,255,255,1);
    box-shadow:0px 1rpx 11rpx 0px rgba(0, 0, 0, 0.05);
    .order_money
      padding 58rpx 0 34rpx 0;
      font-size:62rpx;
      margin 0 20rpx;
      border-bottom 2px solid rgba(241,241,241,1);
      font-weight:bold;
      color:rgba(0,0,0,1);
      line-height:32rpx;
    .detail_label
      padding-top 54rpx;
      font-size:24rpx;
      font-weight:400;
      color:rgba(102,102,102,1);
    .order_time,.order_type
      padding-top 46rpx;
      font-size:24rpx;
      font-weight:400;
      color:rgba(102,102,102,1);
  .pay_type_menu
    line-height 76rpx;
    text-align center;
    margin 0 auto;
    margin-top 42rpx;
    font-size:30rpx;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    width:50%;
    height:76rpx;
    background:linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
    border-radius:12rpx;
  .menu_tips
    text-align center;
    margin 0 auto;
    height:24rpx;
    margin-top 36rpx;
    font-size:24rpx;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);

</style>



