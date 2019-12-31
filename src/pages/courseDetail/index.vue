<template>
  <div class="pages_course_detail">
    <shareModal :isShowModal="isShowModal" @modalStatus="modalStatus"></shareModal>
    <div class="course_container">
      <!-- 课程标题价格等 -->
      <div class="course_detail">
        <div class="ispraise_img">
          <img v-if="!courseInfo.isPraise" src="/static/images/fabulous.png" @click="praiseComment(courseInfo.id)" alt="">
          <img v-if="courseInfo.isPraise" src="/static/images/fabulous_active.png" alt="">
        </div>
        <div class="course_share" @touchstart.stop="shareBtn(courseInfo.id)">
          <img src="/static/images/share.png" alt="暂无图片">
        </div>
        <div class="course_poster">
          <img :src="courseInfo.imgsList&&courseInfo.imgsList[0]" alt="暂无图片">
        </div>
        <div class="describe_container">
          <div class="count_down" v-if="hasCountdown">
            <span v-if="countdown.day" class="count_day">{{countdown.day}}</span>{{countdown.day>0?':':''}}
            <span class="count_hour">{{countdown.hour}}</span>:
            <span class="count_minute">{{countdown.minute}}</span>:
            <span class="count_seconds">{{countdown.seconds}}</span>
          </div>
          <div class="course_price">
            <div class="_price_label">特惠价</div><div class="_price_now">￥{{courseInfo.price}}</div><div class="_price_old">￥{{courseInfo.marketPrice}}</div>
          </div>
          <p class="course_label">
            {{courseInfo.title}}
          </p>
          <div class="course_name_title">
            <span class="_name">{{courseInfo.author}}</span>&nbsp;&nbsp;<span class="_title">{{courseInfo.introduce}}</span>
          </div>
          <div class="course_desc">
            {{courseInfo.courseDescribe}}
          </div>
        </div>
      </div>
      <div class="lesson_describe">
        <!-- 详细介绍部分 -->
        <div class="content_tab">
          <div class="_tabs" :class="tab.active?'active':''" v-for="(tab, index) in tabs" :key="index" @click="changeTab(tab, index)">
            {{tab.label}}
          </div>
        </div>
        <div v-if="tab === 1" class="content_describe">
          <div v-html='courseInfo.guideContent'></div>
        </div>
        <div v-if="tab === 2" class="content_describe">
          <div v-html='courseInfo.courseContent'></div>
        </div>
        <div class="course_commet">
          <!-- 评论 -->
          <div class="_commet_title">
            <span class="commet_line">
              学员评论
            </span>
          </div>
          <div class="commet_list" v-for="(comment, index) in comments" :key="index">
            <div class="commet_head">
              <div class="_avatar">
                <img :src="comment.userImg" alt="">
              </div>
              <div class="_nickname">
                {{comment.userName}}
              </div>
              <div class="fabulous_img">
                <img v-if="!comment.isPraise" src="/static/images/fabulous.png" @click="fabulousComment(comment)" alt="">
                <img v-if="comment.isPraise" src="/static/images/fabulous_active.png" alt="">
              </div>
            </div>
            <div class="commet_desc">
              {{comment.comment}}
              <div class="commet_piclist"><img :src="comment.pic" alt=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_button">
      <div class="course_recommend">
        我要推荐
      </div>
      <div class="just_purchase" @click="justPurchase">
        立即购买
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from '../../utils/countdown.js'
import shareModal from '@/components/shareModal'
import {formatTime, getCurrentPageUrl} from '@/utils/index'
const shareUrl = '/pages/courseDetail/main'
export default {
  data () {
    return {
      countdown: {},
      isShowModal: false,
      hasCountdown: false,
      courseInfo: {},
      comments: [],
      tab: 1,
      tabs: [
        {label: '课程导览', tabId: 1, active: true},
        {label: '课程内容', tabId: 2, active: false}
      ]
    }
  },
  components: {
    shareModal
  },
  onShow(){
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo(){
      let id = this.$root.$mp.query.id
      let url = '/api/course/courseDetail?id='+id
      this.request.post(url).then(res => {
        let tempData = res.data
        tempData['imgsList'] = tempData.imgs.split(',')
        tempData.guideContent = tempData.guideContent ? tempData.guideContent.replace(/\<\ ?img/gi, '<img style="max-width:100%;height:auto" ') : ''
        tempData.courseContent = tempData.courseContent ? tempData.courseContent.replace(/\<\ ?img/gi, '<img style="max-width:100%;height:auto" ') : ''
        this.courseInfo = tempData
        console.log('tempData===>>>', this.courseInfo.guideContent)
        this.comments = tempData.commentList
        let limitedTimeEnd = res.data.limitedTimeEnd
        console.log('limitedTimeEnd==>>', limitedTimeEnd)
        if (limitedTimeEnd) {
          this.hasCountdown = true
          let formatLimitedTime = formatTime(limitedTimeEnd)
          Countdown.init(formatLimitedTime,'countdown', this)
        }
      })
    },
    modalStatus(val){
      this.isShowModal = val
    },
    shareBtn(){
      this.isShowModal = true
    },
    changeTab(tab){
      this.tabs.map(item => {
        item.active = item.tabId === tab.tabId ? true : false
        this.tab = tab.tabId
      })
    },
    praiseComment(id){
      this.request.post('/api/course/praiseComment?type=1&courseId='+id).then(res => {
        this.hasCountdown = false
        this.getDetailInfo()
      })
    },
    fabulousComment(state){
      this.request.post('/api/course/praiseComment?type=1&commentId='+state.id).then(res => {
        this.hasCountdown = false
        this.getDetailInfo()
      })
    },
    justPurchase(){
      let {author, introduce, courseDescribe, tags, price, imgs, id, title} = this.courseInfo
      let tempParams = {
        id,
        title,
        author,
        introduce,
        courseDescribe,
        tagList: tags.split(','),
        price,
        imgList: imgs.split(',')
      }
      let queryParams = JSON.stringify(tempParams)
      let url = '/pages/makeOrder/main'
      wx.navigateTo({
        url: url + '?queryParams=' + queryParams
      })
    },
    getCurrentPageUrl(){
      var pages = getCurrentPages()    //获取加载的页面
      var currentPage = pages[pages.length-1]    //获取当前页面的对象
      var url = currentPage.route    //当前页面url
      return url
    }
  },
  onShareAppMessage(ops) {
    let url = this.getCurrentPageUrl()
    console.log('url===??', url)
    this.isShowModal = false
    if (ops.from === "button") {
      // 来自页面内转发按钮
      console.log(ops.target);
    }
    return {
      title: "这个课程特别好",//这里是定义转发的标题
      path: url,//这里是定义转发的地址
      success: function(res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
        var shareTickets = res.shareTickets;
        // if (shareTickets.length == 0) {
        //   return false;
        // }
        // //可以获取群组信息
        // wx.getShareInfo({
        //   shareTicket: shareTickets[0],
        //   success: function (res) {
        //     console.log(res)
        //   }
        // })
      },
      fail: function(res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    };
  },
  created () {
  },
  onLoad(){
    Object.assign(this.$data, this.$options.data())
    this.hasCountdown = false
    // this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
  .pages_course_detail
    width 100%
    .footer_button
      display flex
      position fixed
      bottom 0
      left 0
      height 80rpx
      width 100%
      z-index 1000
      .course_recommend
        flex 1
        text-align center;
        line-height 80rpx;
        height:80rpx;
        background:rgba(255,255,255,1);
        border:1rpx solid rgba(241,241,241,1);
      .just_purchase
        flex 1
        height:80rpx;
        line-height 80rpx;
        text-align center;
        border:1rpx solid rgba(241,241,241,1);
        font-size:34rpx;
        font-weight:400;
        color:rgba(254,254,254,1);
        background:linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
    .course_container
      padding-bottom 80rpx
      .lesson_describe
        width 100%
        .course_commet
          margin 50rpx 0 20rpx 20rpx
          ._commet_title
            margin-bottom 42rpx
            .commet_line
              padding-bottom 10rpx
              border-bottom 6rpx solid #F9DBA7;
              font-size:28rpx;
              font-weight:400;
              color:rgba(51,51,51,1);
              line-height:40rpx;
          .commet_list
            padding 35rpx 0
            border-bottom 1px solid rgba(246,246,246,1);
            .commet_head
              display flex
              align-items center
              position relative
              ._nickname
                margin 0 10rpx
                font-size:24rpx;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height:36rpx;
              .fabulous_img
                position absolute
                right 52rpx
                top 10rpx
                img
                  width:27rpx;
                  height:28rpx;
                  vertical-align middle
              ._avatar
                img
                  border-radius 50%
                  width 60rpx
                  height 60rpx
            .commet_desc
              margin-right 53rpx
              font-size:26rpx;
              font-weight:400;
              color:rgba(51,51,51,1);
              line-height:34rpx;
              .commet_piclist
                display flex
                img 
                  width: 166rpx
                  height 166rpx
        .content_tab
          display flex
          justify-content space-between
          ._tabs
            flex 1
            height:80rpx;
            text-align center
            background:rgba(255,255,255,1);
            border:1rpx solid rgba(241,241,241,1);
            font-size:34rpx;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:80rpx;
            &.active
              color:rgba(255,255,255,1);
              background:linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
      .course_detail
        background:rgba(255,255,255,1);
        position relative
        .ispraise_img
          position absolute
          right 10%
          top 2.5%
          z-index 100
          img
            width: 35rpx;
            height: 36rpx;
            vertical-align middle
        .course_share
          position absolute
          right 3%
          top 3%
          z-index 100
          img
            width:35rpx;
            height:36rpx;
        .course_poster
          img
            width 100%
        .describe_container
          padding 27rpx 0 24rpx 30rpx
          position relative
          .count_down
            display flex
            justify-content center
            padding 0 20rpx
            height: 50px;
            opacity: 0.9;
            position absolute
            bottom 100rpx
            right 20rpx
            font-size: 30rpx;
            font-weight: 400;
            color: rgba(102,102,102,1);
            line-height: 50rpx;
            background: rgba(51,51,51,1);
            .count_day,
            .count_hour,
            .count_minute,
            .count_seconds
              margin 0 6rpx
              background:linear-gradient(0deg,rgba(172,129,72,1) 0%, rgba(249,219,167,1) 100%);
              -webkit-background-clip:text;
              -webkit-text-fill-color:transparent;
          .course_label
            font-size 30rpx
            font-weight 500
            color rgba(51,51,51,1)
            line-height 36rpx
          .course_name_title
            margin 4rpx 0 20rpx 0
            ._name
              font-size 24rpx
              font-weight 400
              color rgba(51,51,51,1)
              line-height 36rpx
            ._title
              font-size 24rpx
              font-weight 400
              color rgba(102,102,102,1)
              line-height 36rpx
          .course_desc
            font-size:26rpx;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:36rpx;
          .course_price
            display flex
            align-items center
            margin -8rpx 0 28rpx 0
            ._price_label
              background:linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
              border-radius 20rpx
              width 115px
              height 48px
              line-height 48px
              text-align center
              font-size 28rpx
              font-weight 400
              color rgba(255,255,255,1)
            ._price_now
              font-size:30px;
              font-weight:400;
              color:rgba(210,13,13,1);
              line-height:36px;
              margin 0 9rpx 0 12rpx
            ._price_old
              font-size:24px;
              font-weight:400;
              text-decoration:line-through;
              color:rgba(102,102,102,1);
              line-height:36px;
</style>
