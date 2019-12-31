<template>
  <div class="pages_lesson_entry">
    <shareModal :isShowModal="isShowModal" @modalStatus="modalStatus"></shareModal>
    <div class="search_body">
      <div class="search_lesson">
        <img src="/static/images/search.png" alt="">&nbsp;&nbsp;
        <input type="text" v-model="content" @blur="searchCourse" placeholder="请输入关键字搜索" placeholder-style="color:rgba(153,153,153,1);font-size:24rpx;text-align: center"/>
      </div>
    </div>
    <div v-if="courseList.length > 0"  class="course_container">
      <!-- 课程列表 -->
      <div class="course_list" v-for="(item, index) in courseList" :key="index" @click="goToDetail(item.id)">
        <div class="course_share" @touchstart.stop="shareBtn(item.id)">
          <img src="/static/images/share.png" alt="暂无图片">
        </div>
        <div class="course_poster">
          <img :src="item.imgsList&&item.imgsList[0]" alt="暂无图片">
        </div>
        <div class="describe_container">
          <p class="course_label">
          {{item.title}}
          </p>
          <div class="course_name_title">
            <span class="_name">{{item.author}}</span>&nbsp;&nbsp;<span class="_title">{{item.introduce}}</span>
          </div>
          <div class="scan_times">
            <img src="/static/images/scan.png" alt="">&nbsp;&nbsp;<span class="_times">{{item.viewNum}}万人次</span>
          </div>
          <div class="tag_list">
            <span v-for="(tag, el) in item.tagList" :key="el" class="_tags">{{tag}}</span>
          </div>
          <div class="course_price">
            ￥{{item.price}}
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no_lesson">
      <div class="no_data_pic">
        <img src="/static/images/no_data.png" alt="">
      </div>
      <div class="_text">
        暂无课程记录
      </div>
    </div>
    <!-- 使用组件 -->
    <tab-bar :selectNavIndex="1"></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/tabBar'
import shareModal from '@/components/shareModal'
export default {
  data () {
    return {
      isShowModal: false,
      content: '',
      courseList: []
    }
  },
  components: {
    tabBar, shareModal
  },
  // // 上拉加载
  // onReachBottom: function () {
  // //执行上拉执行的功能
  //   this._getRegisterInfo();
  // },
  // // 停止下拉刷新
  // async onPullDownRefresh() {
  //   // to doing..
  //   // 停止下拉刷新
  //   wx.stopPullDownRefresh();
  // },
  methods: {
    getCourseList(keyWord){
      let params = {
        url: '/api/course/courseList'
      }
      this.request.post(params.url+'?content='+keyWord).then(res => {
        this.courseList = res.data && res.data.map(({tags, price,imgs, ...other}) => ({...other, tagList: tags.split(','),imgsList: imgs.split(','), price: price.toFixed(2)}))
      })
    },
    searchCourse() {
      console.log('===>>>', this.content)
      this.getCourseList(this.content)
    },
    modalStatus(val){
      this.isShowModal = val
    },
    shareBtn(id){
      this.isShowModal = true
      console.log('id====>', id)
    },
    goToDetail(id){
      let url = '/pages/courseDetail/main'
      wx.navigateTo({
        url: url + "?id=" + id
      })
    }
  },
  onShow(){
    this.getCourseList('')
  },
  onLoad(){
    Object.assign(this.$data, this.$options.data())
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
  created () {
  }
}
</script>
<style lang="stylus" scoped>
  .pages_lesson_entry
    width 100%
    height 1000rpx
    padding-bottom 200rpx
    background rgba(241,241,241,1)
    .search_body
      margin 0 2%
      border-radius 10rpx
      width 96%
      height 98rpx
      display flex
      align-items center
      justify-content center
      .search_lesson
        height 58rpx
        width 100%
        border-radius 20px
        line-height 98rpx
        display flex
        align-items center
        justify-content center
        background #FFFFFF
        img
          text-align center
          width 28px
          height 28px
    .course_container
      margin-bottom 200rpx;
      .course_list
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
        .describe_container
          padding 27rpx 0 24rpx 30rpx
          position relative
          .course_label
            font-size 30rpx
            font-weight 500
            color rgba(51,51,51,1)
            line-height 36rpx
          .course_name_title
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
          .scan_times
            img
              width 27rpx;
              height 19rpx;
            ._times
              font-size 20rpx;
              font-weight 400;
              color rgba(102,102,102,1);
              line-height 36rpx;
          .tag_list
            ._tags
              margin-right 26rpx
              padding 4px 10px
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
          .course_price
            background linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
            border-radius 20rpx
            width 148px
            height 48px
            position absolute
            line-height 48px
            text-align center
            right 20rpx
            bottom 27rpx
            font-size 28rpx
            font-weight 400
            color rgba(255,255,255,1)
.no_lesson{
  text-align: center;
  margin: 50% auto;
}
.no_lesson .no_data_pic img{
  width: 94rpx;
  height: 100rpx;
}
.no_lesson ._text{
  margin-top: 50rpx;
  font-size:32rpx;
  font-weight:400;
  color:rgba(102,102,102,1);
}
</style>
