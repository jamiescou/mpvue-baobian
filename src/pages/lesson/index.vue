<template>
  <div class="pages_lesson_entry">
    <div class="search_body">
      <div class="search_lesson">
        <img src="/static/images/search.png" alt="">&nbsp;&nbsp;
        <input type="text" placeholder="请输入关键字搜索" placeholder-style="color:rgba(153,153,153,1);font-size:24rpx;text-align: center"/>
      </div>
    </div>
    <div class="course_container">
      <!-- 课程列表 -->
      <div class="course_list" v-for="item in courseList" :key="item.id" @click="goToDetail(item.id)">
        <div class="course_share" @touchstart.stop="shareBtn(item.id)">
          <img src="/static/images/share.png" alt="暂无图片">
        </div>
        <div class="course_poster">
          <img :src="item.img" alt="暂无图片">
        </div>
        <div class="describe_container">
          <p class="course_label">
          {{item.label}}
          </p>
          <div class="course_name_title">
            <span class="_name">{{item.name}}</span>&nbsp;&nbsp;<span class="_title">{{item.title}}</span>
          </div>
          <div class="scan_times">
            <img src="/static/images/scan.png" alt="">&nbsp;&nbsp;<span class="_times">{{item.scantimes}}万人次</span>
          </div>
          <div class="tag_list">
            <span v-for="(tag, el) in item.tagList" :key="tag+el" class="_tags">{{tag}}</span>
          </div>
          <div class="course_price">
            ￥{{item.price}}
          </div>
        </div>
      </div>
    </div>
    <!-- 使用组件 -->
    <tab-bar :selectNavIndex="1"></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/tabBar'

export default {
  data () {
    return {
      courseList: [
        {
          label: '个人品牌，重构商业竞争力超级...',
          name: '张大豆',
          img: '/static/images/course.png',
          id: 1,
          title: '豹变学院院长、豹变IP创始人',
          scantimes: 100,
          tags: '标签系统,存在感,人格化IP',
          price: 1999
        },
        {
          label: '个人品牌，重构商业竞争力超级...',
          name: '张大豆',
          id: 2,
          img: '/static/images/course.png',
          title: '豹变学院院长、豹变IP创始人',
          scantimes: 100,
          tags: '标签系统,存在感,人格化IP',
          price: 1999
        },
        {
          label: '个人品牌，重构商业竞争力超级...',
          name: '张大豆',
          img: '/static/images/course.png',
          id: 3,
          title: '豹变学院院长、豹变IP创始人',
          tags: '标签系统,存在感,人格化IP',
          scantimes: 100,
          price: 1999,
        }
      ]
    }
  },
  components: {
    tabBar
  },
  methods: {
    formatCourseList(){
      let tempDataList = this.courseList
      this.courseList = tempDataList.map(({tags, price, ...other}) => ({...other, tagList: tags.split(','), price: price.toFixed(2)}))
    },
    shareBtn(id){
      console.log('id====>', id)
    },
    goToDetail(id){
      let url = '/pages/courseDetail/main'
      wx.navigateTo({
        url
      })
    }
  },
  created () {
    this.formatCourseList()
  }
}
</script>
<style lang="stylus" scoped>
  .pages_lesson_entry
    width 100%
    height 100%
    padding-bottom 160rpx
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
</style>
