<template>
  <div class="pages_card_table">
    <div class="star_teacher">
      <div class="star_lesson">
        <div>
          <img src="/static/images/baobian_icon.png" alt="">
        </div>
        <div class="_collage">豹变学院</div>
        <div class="order_status">
          {{statusMap[courseInfo.status]}}
        </div>
      </div>
      <div class="teacher_list">
        <div class="left_avatar">
          <img :src="courseInfo.imgsList[0]" alt="">
        </div>
        <div class="right_content">
          <div class="class_title">
            {{courseInfo.courseTitle}}
          </div>
          <div class="teacher_name_and_title">
            <span class="_name">{{courseInfo.courseAuthor}}</span>&nbsp;&nbsp;<span class="_title">{{courseInfo.courseIntroduce}}</span>
          </div>
          <div class="tag_list">
            <span v-for="(tag, el) in courseInfo.tagList" :key="tag+el" class="_tags">{{tag}}</span>
          </div>
        </div>
        <div class="last_right">
          <div class="_price">
            ￥{{courseInfo.coursePrice}}
          </div>
          <div class="_number">
            x {{courseInfo.num}}
          </div>
        </div>
      </div>
      <div class="card_bottom" v-if="courseInfo.status == 3 && !courseInfo.isComment">
        <div class="_comment" @click="makeComment(courseInfo)">评价</div>
        <div class="finish_discount">合计: ￥{{courseInfo.money}}</div>
      </div>
      <div class="card_bottom" v-else>
        <div class="finish_discount">合计: ￥{{courseInfo.money}}</div>
        <div class="has_pay_money">
          已付{{courseInfo.haspayMoney}}
        </div>
        <div class="wait_pay" @click="surplusMoney(courseInfo)">
          待支付{{courseInfo.surplusMoney}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import utils from '@/utils/index'
export default {
  props: ['courseInfo'],
  data () {
    return {
      statusMap: {
        1: '待付款',
        2: '部分付款',
        3: '交易成功'
      }
    }
  },
  methods: {
    makeComment(info){
      let {id, tagList, courseTitle, imgsList, courseIntroduce, courseAuthor} = info
      let queryParams = JSON.stringify({
        id,
        courseAuthor,
        tagList,
        courseTitle,
        imgsList,
        courseIntroduce
      })
      const url = '/pages/comment/main'
      wx.navigateTo({
        url: url + '?queryParams=' + queryParams
      })
    },
    surplusMoney(info) {
      let {id, surplusMoney} = info
      if (surplusMoney > 2000) {
        let url = '/pages/payPage/main'
        wx.navigateTo({
          url: url + "?orderId=" + id
        })
        return false
      }
      let postParams = {
        orderId: id,
        payMoney: surplusMoney
      }
      this.request.post('/api/order/continuePay', postParams).then(resp => {
        let jsonobject = resp.data
        utils.payMoneyCommon(jsonobject)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  onLoad(){
  },
  created () {
  }
}
</script>
<style scoped>
.pages_card_table{
  background: #F1F1F1;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  border-bottom: 20rpx solid #F1F1F1
}
.star_teacher{
  padding:0 5%;
  height: 466rpx;
  background: rgba(255,255,255,1);
}
.star_teacher .star_lesson{
  display: flex;
  align-items: center;
  height: 94rpx;
}
.star_teacher .star_lesson img{
  width:56rpx;
  height:56rpx;
  vertical-align: middle;
}
.star_teacher .star_lesson ._collage{
  font-size:34rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.star_teacher .star_lesson  .order_status{
  text-align: right;
  width: 15%;
  margin-left: 56%;
  font-size:22rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
  background:linear-gradient(0deg,rgba(172,129,72,1) 0%, rgba(249,219,167,1) 100%);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
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
  padding: 20rpx 0 14rpx 0;
  border-top:2px solid rgba(241,241,241,1);
  border-bottom:2px solid rgba(241,241,241,1);
}
.teacher_list .right_content{
  padding-left: 3%;
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
  margin-right: 16rpx;
  padding: 4px 10px;
  text-align: center;
  display: inline-block;
  height:40rpx;
  background:rgba(237,208,121,1);
  opacity:0.2;
  border-radius:6rpx;
  font-size:22rpx;
  font-weight:500;
  color:#000;
  line-height:40rpx;
}
.star_teacher .last_right ._price{
  margin: 6rpx 0 20rpx 20rpx;
  text-align: right;
  font-size:26rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.star_teacher .last_right ._number{
  text-align: right;
  font-size:26rpx;
  font-weight:400;
  color:rgba(153,153,153,1);
}
.star_teacher .card_bottom {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  line-height: 70rpx;
}
.star_teacher .card_bottom ._comment{
  margin-right: 30rpx;
  width: 108rpx;
  height: 44rpx;
  line-height: 44rpx;
  text-align: center;
  background:linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
  border-radius:12px;
  background: linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
  font-size:30rpx;
  font-weight:400;
  color:rgba(255,255,255,1);
}
.star_teacher .card_bottom .finish_discount{
  font-size:26rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.star_teacher .card_bottom .has_pay_money{
  padding: 0 10rpx;
  line-height: 44rpx;
  height:44rpx;
  border:1rpx solid rgba(153,153,153,1);
  border-radius:12rpx;
  margin: 0 34rpx 0 38rpx;
  font-size:24rpx;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.star_teacher .card_bottom  .wait_pay{
  line-height: 44rpx;
  padding: 0 10rpx;
  height:44rpx;
  background:linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
  border-radius:12rpx;
  font-size:24rpx;
  font-weight:400;
  color:rgba(255,254,254,1);
}
</style>
