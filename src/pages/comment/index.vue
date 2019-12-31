<template>
  <div class="pages_comment">
    <div class="card_lesson">
      <div class="lesson_pic">
        <img :src="courseInfo.icon" alt="">
      </div>
      <div class="right_content">
        <div class="class_title">
          {{courseInfo.courseTitle}}
        </div>
        <div class="teacher_name_and_title">
          <span class="_name">{{courseInfo.courseAuthor}}</span>&nbsp;&nbsp;<span class="_title">{{courseInfo.courseIntroduce}}</span>
        </div>
        <div class="tag_list">
          <span v-for="(tag, el) in courseInfo.tagList" :key="el" class="_tags">{{tag}}</span>
        </div>
      </div>
    </div>
    <div class="comment_container">
      <div class="_title">
        评价
      </div>
      <div class="comment_field">
        <div class="textarea_field">
          <textarea style="height: 100rpx" v-model="comment" placeholder="课程对你是否有帮助？" placeholder-style="font-size: 26rpx;font-weight: 400;color: #999999" />
        </div>
        <Upload width="164rpx" height="164rpx" :radius="radius" max="6" :uploadFlag="uploadFlag" @choosed="choosed" @delete="deleteImg" :srcs="[]"></Upload>
      </div>
    </div>
    <div class="commet_publish" @click="publishComment">
      发布
    </div>
  </div>
</template>
<script>
import Upload from '@/components/upload'
export default {
  components: {
    Upload
  },
  data () {
    return {
      uploadFlag: 'multiple',
      radius: 0,
      courseInfo: {},
      pic: '',
      orderId: '',
      comment: ''
    }
  },
  methods: {
    formatCourseList(){
      let queryParams = this.$root.$mp.query.queryParams
      let {id, tagList, courseTitle, imgsList, courseIntroduce, courseAuthor} = JSON.parse(queryParams)
      this.orderId = id
      this.courseInfo = JSON.parse(queryParams)
      this.courseInfo.icon = imgsList[0]
    },
    choosed(imgsInfo){
      console.log('imgsInfo===>>', imgsInfo)
      this.pic = imgsInfo.upLoadImgs && imgsInfo.upLoadImgs.join(',')
      // let {all, currentUpload} = imgsInfo
    },
    publishComment(){
      let {pic, orderId, comment} = this
      let params = {
        pic,
        orderId,
        comment
      }
      console.log('params====>>>', params)
      this.request.post('/api/order/comment', params).then(res => {
        wx.showToast({
          title: '评论成功',
          icon: 'none'
        })
        setTimeout(() => {
          wx.navigateBack()
        }, 200)
      })
    }
  },
  onShow(){
    this.formatCourseList()
    
  },
  created () {
  }
}
</script>

<style scoped lang="stylus">
.pages_comment 
  background: #ffffff;
  position: absolute;
  margin: 30rpx 2% 0rpx 2%
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch
  .commet_publish
    text-align:center;
    position: absolute;
    bottom: 36rpx;
    height:88rpx;
    width 95%;
    margin-right 2%;
    line-height 88rpx;
    background:linear-gradient(0deg,rgba(180,127,60,1),rgba(255,218,160,1));
    font-size:32rpx;
    font-weight:400;
    color:rgba(255,255,255,1);
  .comment_container
    margin-top: 60rpx;
    ._title
      margin-bottom: 20rpx;
      height:32rpx;
      font-size:32rpx;
      font-weight:500;
      color:rgba(51,51,51,1);
      line-height 32rpx;
    .comment_field
      margin-right:2%;
      width:95%;
      border:2rpx solid rgba(247,247,247,1);
      border-radius:10rpx;
      .textarea_field
        margin: 20rpx;
  .card_lesson
    display flex
    .lesson_pic
      img 
        width 144rpx
        height 190rpx
    .right_content
      padding-left: 3%;
      .class_title
        padding-top: 8rpx;
        height:31rpx;
        font-size:30rpx;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:36rpx;
      .teacher_name_and_title 
        padding-top: 12rpx;
        ._name
          font-size:24rpx;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height:36rpx;
        ._title
          font-size:24rpx;
          font-weight:400;
          color:rgba(102,102,102,1);
          line-height:36rpx;
      .tag_list
        margin-top: 22rpx
        ._tags
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
</style>
