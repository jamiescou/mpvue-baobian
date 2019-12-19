<template>
  <div class="pages_main_entry">
    <div class="_top">
      <!-- 顶部广告图 -->
      <img class="header_banner" src="/static/images/banner.jpg" alt="">
    </div>
    <div class="product_list">
      <div class="product_item"
        v-for="item in productList"
        :key="item.id">
        <div class="item_left">
          <img :src="item.icon" alt="超级公开课">
        </div>
        <div class="item_right">
          <div class="_title">
            {{item.name}}
          </div>
          <div class="_desc">
            {{item.desc}}
          </div>
        </div>
      </div>
    </div>
    <div class="star_teacher">
      <!--明星导师 -->
      <div class="big_title">
        明星导师
      </div>
      <div class="teacher_list" v-for="(item, index) in teacherList" :key="index+id" @click="goDetail">
        <div class="left_avatar">
          <img :src="item.icon" alt="">
        </div>
        <div class="right_content">
          <div class="class_title">
            {{item.label}}
          </div>
          <div class="teacher_name_and_title">
            <span class="_name">{{item.name}}</span>&nbsp;&nbsp;<span class="_title">{{item.title}}</span>
          </div>
          <div class="scan_times">
            <img src="/static/images/scan.png" alt="">&nbsp;&nbsp;<span class="_times">{{item.scantimes}}万人次</span>
          </div>
          <div class="tag_list">
            <span v-for="(tag, el) in item.tagList" :key="tag+el" class="_tags">{{tag}}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 使用组件 -->
    <tab-bar :selectNavIndex="0"></tab-bar>
  </div>
</template>

<script>
// import card from '@/components/card'
import tabBar from '@/components/tabBar'

export default {
  data () {
    return {
      productList: [
        {
          icon: '/static/images/superstar.png',
          name: '超级公开课',
          id: 1,
          desc: '个人品牌•重构商业竞争力'
        },
        {
          icon: '/static/images/superstar.png',
          name: '超级公开课',
          id: 2,
          desc: '个人品牌•重构商业竞争力'
        },
        {
          icon: '/static/images/superstar.png',
          name: '超级公开课',
          id: 3,
          desc: '个人品牌•重构商业竞争力'
        },
        {
          icon: '/static/images/superstar.png',
          name: '超级公开课',
          id: 4,
          desc: '个人品牌•重构商业竞争力'
        },
        {
          icon: '/static/images/superstar.png',
          name: '超级公开课',
          id: 5,
          desc: '个人品牌•重构商业竞争力'
        },
        {
          icon: '/static/images/superstar.png',
          name: '超级公开课',
          id: 5,
          desc: '个人品牌•重构商业竞争力'
        }
      ],
      teacherList: [
        {
          icon: '/static/images/teacher.png',
          name: '张大豆',
          label: '个人品牌，重构商业竞争力超级...',
          title: '豹变学院院长、豹变IP创始人',
          id: 1,
          scantimes: 1000,
          tag: 'IP思维,asasa,assa'
        },
        {
          icon: '/static/images/teacher.png',
          name: '张大豆',
          label: '个人品牌，重构商业竞争力超级...',
          title: '豹变学院院长、豹变IP创始人',
          id: 1,
          scantimes: 1000,
          tag: 'IP思维,asasa,assa'
        },
        {
          icon: '/static/images/teacher.png',
          name: '张大豆',
          label: '个人品牌，重构商业竞争力超级...',
          title: '豹变学院院长、豹变IP创始人',
          id: 1,
          scantimes: 1000,
          tag: 'IP思维,asasa,assa'
        }
        
      ]
    }
  },

  components: {
    tabBar
  },

  methods: {
    goDetail(){
      let url = '/pages/teacherDetail/main'
      wx.navigateTo({
        url
      })
    },
    formatCourseList(){
      let tempDataList = this.teacherList
      this.teacherList = tempDataList.map(({tag, ...other}) => ({...other, tagList: tag.split(',')}))
    },
    shareBtn(id){
      console.log('id====>', id)
    }
  },
  created () {
    this.formatCourseList()
  }
}
</script>

<style scoped>
.pages_main_entry{
  background: #F1F1F1;
  padding-bottom: 122rpx;
  /* width: 750rpx; */
  width: 100%;
}
.pages_main_entry ._top{
  display: flex;
  justify-content: center;
}
.pages_main_entry .header_banner{
  /* width: 750rpx; */
  width: 100%;
  height: 300rpx;
}
.product_list{
  width: 90%;
  background:rgba(255,255,255,1);
  display: flex;
  margin: 30rpx auto;
  padding: 30rpx 0 30rpx 4%;
  flex-flow:row;
  align-items: stretch;
  flex-wrap: wrap;
}
.product_item:nth-child(1){
  border-top: none !important;
}
.product_item:nth-last-child(1){
  border-bottom: none !important;
}
.product_item:nth-child(odd){
  border-top: 2px solid rgba(241,241,241,1);
  border-right: 2px solid rgba(241,241,241,1);
}
.product_item:nth-child(even){
  margin-bottom: -2rpx !important;
  border-bottom: 2px solid rgba(241,241,241,1);
}

.product_list .product_item{
  padding: 25rpx 0 25rpx 25rpx;
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.product_list .item_left img{
  width: 96rpx;
  height: 96rpx;
}
.product_list .item_right {
  margin: 0 auto;
  line-height: 80rpx;
}
.product_list .item_right ._title{
  margin-bottom: 10rpx;
  text-align: center;
  height:23rpx;
  font-size:24rpx;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:36rpx;
}
.product_list .item_right ._desc{
  text-align: center;
  height:16rpx;
  font-size:16rpx;
  font-weight:500;
  color:rgba(102,102,102,1);
  line-height:36rpx;
  margin-bottom: 20rpx;
}
.star_teacher{
  width: 98%;
  padding: 30rpx 0 0 2%;
  background:rgba(255,255,255,1);
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
  padding: 30rpx 0;
  border-bottom:2px solid rgba(241,241,241,1);
}
.star_teacher .left_avatar img{
  width:144rpx;
  height:190rpx;
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
.star_teacher .scan_times{

}
.right_content{
  padding-left: 20rpx;
  padding-top: 4rpx;
}
.star_teacher .scan_times img{
  width:27rpx;
  height:19rpx;
}
.star_teacher .scan_times ._times{
  font-size:20rpx;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:36rpx;
}
.star_teacher .tag_list{

}
.star_teacher .tag_list ._tags{
  margin-right: 26rpx;
  padding: 4px 10px;
  text-align: center;
  display: inline-block;
  width:82rpx;
  height:40rpx;
  background:rgba(237,208,121,1);
  opacity:0.2;
  border-radius:6rpx;
  font-size:22rpx;
  font-weight:500;
  color:#000;
  line-height:40rpx;
}

</style>
