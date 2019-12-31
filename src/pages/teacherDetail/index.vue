<template>
  <div class="pages_teacher_detail">
    <shareModal :isShowModal="isShowModal" @modalStatus="modalStatus"></shareModal>
    <div class="course_container">
      <!-- 课程标题价格等 -->
      <div class="course_detail">
        <div class="course_share" @click="shareBtn">
          <img src="/static/images/share.png" alt="暂无图片">
        </div>
        <div v-if="courseInfo.urlType===1" class="course_poster">
          <img :src="courseInfo.url" alt="暂无图片">
        </div>
        <div v-if="courseInfo.urlType===2" class="course_poster">
          <!-- <video :src="courseInfo.url"></video> -->
          <video
            style="width: 100%"
            id="myVideo"
            @click="playCourse"
            show-play-btn
            :src="courseInfo.url"
            controls
          ></video>
        </div>
        <div v-if="courseInfo.urlType===2 && !playFlag" class="course_play" @click="playCourse">
          <img src="/static/images/play.png" alt="暂无图片">
        </div>
      </div>
      <div class="lesson_describe" v-html="courseInfo.content">
        <!-- 详细介绍部分 -->
      </div>
    </div>
    <div class="footer_button">
      你的IP 我来成就
    </div>
  </div>
</template>

<script>
import Countdown from '../../utils/countdown.js'
import shareModal from '@/components/shareModal'
export default {
  components: {
    shareModal
  },
  data () {
    return {
      isShowModal: false,
      countdown: {},
      videoContext: null,
      playFlag: false,
      courseInfo: {},
      comments: [],
      tab: 1,
      tabs: [
        {label: '课程导览', tabId: 1, active: true},
        {label: '课程内容', tabId: 2, active: false}
      ]
    }
  },
  onReady: function (res) {
    // this.videoContext = wx.createVideoContext('myVideo')
  },
  onLoad(){
    Object.assign(this.$data, this.$options.data())
  },
  mounted() {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  methods: {
    getDetailInfo(){
      let id = this.$root.$mp.query.id
      let url = '/api/teacher/getTeacherDetail?id='+id
      this.request.post(url).then(res => {
        this.courseInfo = res.data
      })
    },
    changeTab(tab){
      this.tabs.map(item => {
        item.active = item.tabId === tab.tabId ? true : false
        this.tab = tab.tabId
      })
    },
    fabulousComment(state){
      state.isFabulous = !state.isFabulous
    },
    shareBtn(){
      this.isShowModal = true
    },
    playCourse(res){
      this.playFlag = !this.playFlag
      if (!this.playFlag) {
        this.videoContext.pause()
      } else {
        this.videoContext.play()
      }
    },
    pauseCourse(){
      this.videoContext.pause()
    },
    shareFriends(){

    },
    sharePoster(){

    },
    modalStatus(val){
      this.isShowModal = val
    }
    
  },
  created () {
  },
  onShareAppMessage(ops) {
    let url = getCurrentPageUrl()
    console.log('url===??', url)
    this.isShowModal = false
    if (ops.from === "button") {
      // 来自页面内转发按钮
      console.log(ops.target);
    }
    return {
      title: "转发的demo",//这里是定义转发的标题
      path: `../productDetail/main`,//这里是定义转发的地址
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
  onShow(){
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
  .pages_teacher_detail
    width 100%
    position relative
    .share_modal
      position relative
      .masker
        width 100%
        height 100%
        position fixed
        background:rgba(0,0,0,1);
        opacity:0.5;
        z-index: 1001
      .modal_container
        bottom 0
        position fixed
        width 100%
        height 350rpx
        background #ffffff
        z-index 10000
        .share_content
          display flex
          align-items center
          padding 45rpx 0
          border-bottom 2px solid rgba(241,241,241,1);
          justify-content space-evenly
          button
            display inline
            position static !important
            margin 0 !important
            padding 0 !important
            line-height  0 !important
            background-color: #fff!important
          .option_btn
            .share_title
              margin-top 10px
          .share_item
            .share_icon
              img
                width 110px
                height 110px
            .share_title
              font-size:28rpx;
              font-weight:400;
              color:rgba(51,51,51,1);
              line-height:36rpx;
        .share_cancel
          text-align center;
          font-size:28rpx;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height: 80px;
          height: 52rpx;
    .footer_button
      position fixed
      bottom 0
      left 0
      width 100%
      z-index 1000
      height:80rpx;
      font-size:32rpx;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height 80rpx;
      text-align center;
      background:linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
    .course_container
      padding-bottom 80rpx
      .lesson_describe
        width 100%
        margin 0 20rpx
      .course_detail
        background:rgba(255,255,255,1);
        position relative
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
        .course_play
          position absolute
          left 3%
          bottom 3%
          z-index 100
          img 
            width 131px
            height 38px
        .describe_container
          padding 27rpx 0 24rpx 30rpx
          position relative
          
</style>
