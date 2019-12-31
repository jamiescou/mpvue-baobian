<template>
  <div class="pages_make_order">
    <div class="star_teacher">
      <div class="star_lesson">
        <div>
          <img src="/static/images/baobian_icon.png" alt="">
        </div>
        <div class="_collage">豹变学院</div>
      </div>
      <div class="teacher_list">
        <div class="left_avatar">
          <img :src="courseInfo.imgList[0]" alt="">
        </div>
        <div class="right_content">
          <div class="class_title">
            {{courseInfo.title}}
          </div>
          <div class="teacher_name_and_title">
            <span class="_name">{{courseInfo.author}}</span>&nbsp;&nbsp;<span class="_title">{{courseInfo.introduce}}</span>
          </div>
          <div class="tag_list">
            <span v-for="(tag, el) in courseInfo.tagList" :key="tag+el" class="_tags">{{tag}}</span>
          </div>
          <div class="price_number">
            <div class="_price">￥{{courseInfo.price}}</div>
            <div class="goods_number">
              <span @click="changeGoods(-1)">-</span><input type="number" v-model="goodsNumber"><span @click="changeGoods(1)">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dicount_make_order">
      <div class="_discount">
        合计：<span>￥{{discountPrice}}</span>
      </div>
      <div class="order_submit" @click="orderSubmit">
        提交订单
      </div>
    </div>
  </div>
</template>
<script>
const {getStorage, getSetting, login}  = require('../../utils/auth')
import utils from '@/utils/index'

export default {
  data () {
    return {
      goodsNumber: 1,
      courseInfo: {},
      discountPrice: 0,
    }
  },
  watch: {
    goodsNumber(value) {
      console.log('value', value)
      if (value <= 0) {
        this.goodsNumber = 0
      }
      this.goodsNumber = value
      this.discountPrice = this.courseInfo.price * this.goodsNumber
    }
  },
  onLoad(){
    Object.assign(this.$data, this.$options.data())
  },
  methods: {
    onGotUserInfo (e) {
      console.log('e==>', e)
    if (e.mp.detail.errMsg === 'getUserInfo:ok') {
          login()
      } else {
      }
    },
    checkUserAuth: async function () {
      console.log('检查是否有授权')
      // let this_ = this
      // 判断是否获取授权
      let getSettingInfo = await getSetting()
      // 有授权就登录
      if (getSettingInfo.authSetting['scope.userInfo']) {
        console.log('有授权，去登录')
        // this_.isAuth = false
        login()
      } else {
        console.log('没有授权，去授权')
        // this_.isAuth = true
      }
    },
    goDetail(){
      let url = '/pages/teacherDetail/main'
      wx.navigateTo({
        url
      })
    },
    shareBtn(id){
      console.log('id====>', id)
    },
    changeGoods(val){
      if (this.goodsNumber === 0 && val < 0) {
        return false
      }
      this.goodsNumber += val
      this.discountPrice = this.courseInfo.price * this.goodsNumber
      console.log('discountPrice===>>', this.discountPrice)
    },
    orderSubmit(){
      if (this.discountPrice > 2000) {
        let tempParams = {
          "courseId": this.courseInfo.id,
          "totalMoney": this.discountPrice,
          "num": this.goodsNumber,
          "shareUserId": null
        }
        console.log('tempParams==>>', tempParams)
        let url = '/pages/payPage/main'
        let queryParams = JSON.stringify(tempParams)
        wx.navigateTo({
          url: url + "?queryParams=" + queryParams
        })
        return false
      }
      let postParams = {
        "courseId": this.courseInfo.id,
        "totalMoney": this.discountPrice,
        payMoney: this.discountPrice,
        "num": this.goodsNumber,
        "shareUserId": null
      }
      this.request.post('/api/order/commitOrder', postParams).then(resp => {
        let jsonobject = resp.data
        utils.payMoneyCommon(jsonobject, 'common')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  onLoad(){
    this.checkUserAuth()
    let queryParams = this.$root.$mp.query.queryParams
    this.courseInfo = JSON.parse(queryParams)
    this.discountPrice = this.courseInfo.price * this.goodsNumber
  },
  onShow () {
    this.request.post('/api/user/userInfo').then(res => {
      if (res.data && !res.data.phone) {
        wx.navigateTo({
          url: '/pages/bindPhone/main'
        })
        return false
      }
    })
  }
}
</script>

<style scoped>
.pages_make_order{
  background: #F1F1F1;
  position: absolute;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch
}
.dicount_make_order{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  height:120rpx;
  justify-content: flex-end;
  background:rgba(255,255,255,1);
}
.dicount_make_order ._discount{
  font-size:30rpx;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height: 120rpx;
}
.dicount_make_order ._discount span{
  line-height: 120rpx;
  font-size:30rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
  background:linear-gradient(0deg,rgba(172,129,72,1) 0%, rgba(249,219,167,1) 100%);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
.dicount_make_order .order_submit{
  margin: 27rpx 22rpx 0 24rpx;
  line-height: 66rpx;
  padding: 4rpx 10rpx;
  height:66rpx;
  background:rgba(211,51,41,1);
  border-radius:16rpx;
  font-size:34rpx;
  font-weight:400;
  color:rgba(255,255,255,1);
}

.star_teacher{
  padding-left: 3%;
  height: 402rpx;
  background: rgba(255,255,255,1);
  border-top: 2px solid #F1F1F1;
  border-bottom: 2px solid #F1F1F1;
}
.star_teacher .star_lesson{
  display: flex;
  margin-top: 21rpx 
}
.star_teacher .star_lesson img{
  width:56rpx;
  height:56rpx;
}
.star_teacher .star_lesson ._collage{
  font-size:34rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
}

.star_teacher .big_title{
  height:55rpx;
  font-size:40rpx;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:36rpx;
}
.star_teacher .teacher_list{
  display: flex;
  margin-top: 20rpx;
}
.teacher_list .right_content{
  padding: 0 3%;
  width: 100%;
}
.star_teacher .left_avatar img{
  width:168rpx;
  height:250rpx;
  border-radius:20rpx;
}
.star_teacher .right_content .class_title{
  padding-top: 8rpx;
  height:31rpx;
  font-size:30rpx;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:36rpx;
}
.star_teacher .teacher_name_and_title{
  padding-top: 12rpx;
}
.star_teacher .teacher_name_and_title ._name{
  font-size:24rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:36rpx;
}
.star_teacher .teacher_name_and_title ._title{
  font-size:24rpx;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:36rpx;
}

.star_teacher .tag_list{
  margin-top: 22rpx
}
.star_teacher .tag_list ._tags{
  margin-right: 26rpx;
  padding: 4px 10px;
  text-align: center;
  display: inline-block;
  /* width:82rpx; */
  height:40rpx;
  background:rgba(237,208,121,1);
  opacity:0.2;
  border-radius:6rpx;
  font-size:22rpx;
  font-weight:500;
  color:#000;
  line-height:40rpx;
}
.price_number{
  display: flex;
  justify-content: space-between;
  margin-top: 18rpx;
  align-items: flex-end;
}
.price_number ._price{
  font-size:26rpx;
  font-weight:400;
  color:rgba(210,74,69,1);
}
.price_number .goods_number {
  display: flex;
  margin-left: 42%;
}
.price_number .goods_number input{
  text-align: center;
  width: 54rpx;
  height: 54rpx;
  margin: 0 4rpx;
  background: #F1F1F1
}

.price_number .goods_number span{
  padding: 0 22rpx 10rpx 18rpx;
  background: rgba(242,242,242,1);
  border-radius: 0 4rpx 4rpx 0;
}

</style>
