<template>
  <div class="pages_pay_order">
    <div class="pay_money_input">
      <span class="label_money">支付金额</span>
      <input
        type="number" v-model="payMoney"
        placeholder="输入金额"
        placeholder-style="font-size: 30rpx;font-weight: 400;color: #CACACA">
    </div>
    <div class="total_money">课程总额度：{{courseInfo.totalMoney}}</div>
    <div class="pay_submit" @click="orderSubmit">确认支付</div>
  </div>
</template>
<script>
// const {payMoneyCommon}  = require('@/utils/index')
import utils from '@/utils/index'
export default {
  data () {
    return {
      payMoney: null,
      courseInfo: {},
      orderId: '',
      whereFrom: 'makeOrder'
    }
  },
  methods: {
    orderSubmit(){
      if (this.whereFrom === 'makeOrder') {
        let {courseId, totalMoney, num, shareUserId} = this.courseInfo
        let postParams = {
          courseId,
          totalMoney,
          payMoney: this.payMoney,
          num,
          shareUserId
        }
        this.request.post('/api/order/commitOrder', postParams).then(resp => {
          let jsonobject = resp.data
          utils.payMoneyCommon(jsonobject, 'continue')
        }).catch(err => {
          console.log(err)
        })
      }
      if (this.whereFrom === 'myOrder') {
        let {orderId, payMoney} = this
        let postParams = {
          orderId,
          payMoney
        }
        this.request.post('/api/order/continuePay', postParams).then(resp => {
          let jsonobject = resp.data
          utils.payMoneyCommon(jsonobject, 'continue')
        }).catch(err => {
          console.log(err)
        })
      }
    }
  },
  onLoad(){
    Object.assign(this.$data, this.$options.data())
  },
  onShow(){
    let parmas = this.$root.$mp.query
    if (parmas.queryParams) {
      this.whereFrom = 'makeOrder'
      this.courseInfo = JSON.parse(parmas.queryParams)
    }
    if (parmas.orderId) {
      this.whereFrom = 'myOrder'
      this.orderId = parmas.orderId
    }
  }
}
</script>

<style lang="stylus" scoped>
.pages_pay_order
  width 100%;
  height 100%;
  .pay_money_input
    display flex
    height 113rpx
    align-items center
    margin 0 30rpx
    border-bottom 1rpx solid rgba(241,241,241,1);
    .label_money
      font-size:32rpx;
      font-weight:bold;
      color:rgba(51,51,51,1);
      margin-right 64rpx
  .pay_submit
    text-align center;
    margin: 0 auto;
    width: calc(100% - 60rpx);
    height:74rpx;
    line-height 74rpx;
    background: linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
    border-radius:10rpx;
    font-size:32rpx;
    font-weight:400;
    color:rgba(255,255,255,1);
  .total_money
    margin 28rpx 0 50rpx 30rpx;
    height:25rpx;
    font-size:26rpx;
    font-weight:400;
    color:rgba(153,153,153,1);
</style>
