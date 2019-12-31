<template>
  <div class="pages_main_entry">
    <div class="_top">
      <!-- 顶部广告图 -->
      <img class="header_banner" :src="mainPic.img" alt="">
    </div>
    <div class="product_list">
      <div class="product_item"
        v-for="(item, index) in productList"
        :key="index"
        @click="goToProduct(item)">
        <div class="item_left">
          <img :src="item.img" alt="超级公开课">
        </div>
        <div class="item_right">
          <div class="_title">
            {{item.title}}
          </div>
          <div class="_desc">
            {{item.secondTitle}}
          </div>
        </div>
      </div>
    </div>
    <div class="star_teacher">
      <!--明星导师 -->
      <div class="big_title">
        明星导师
      </div>
      <div class="teacher_list" v-for="(item, even) in teacherList" :key="even" @click="goDetail(item.id)">
        <div class="left_avatar">
          <img :src="item.headImg" alt="">
        </div>
        <div class="right_content">
          <div class="class_title">
            {{item.title}}
          </div>
          <div class="teacher_name_and_title">
            <span class="_name">{{item.name}}</span>&nbsp;&nbsp;<span class="_title">{{item.introduce}}</span>
          </div>
          <div class="scan_times">
            <img src="/static/images/scan.png" alt="">&nbsp;&nbsp;<span class="_times">{{item.viewNum}}万人次</span>
          </div>
          <div class="tag_list">
            <span v-for="(tag, el) in item.tagList" :key="el" class="_tags">{{tag}}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 使用组件 -->
    <tab-bar :selectNavIndex="0"></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/tabBar'

export default {
  data () {
    return {
      mainPic: {
        img: ''
      },
      productList: [],
      teacherList: []
    }
  },

  components: {
    tabBar
  },

  methods: {
    goDetail(id){
      let url = '/pages/teacherDetail/main'
      // let url = '/pages/loginPage/main'
      wx.navigateTo({
        url: url + '?id=' + id
      })
    },
    goToProduct(info){
      console.log('====>>>', info)
      if (info.jumpType === 2) {
        wx.navigateTo({
          url: '/pages/courseDetail/main?id=' + info.jumpUrl
        })
      } else {
        wx.showToast({
          icon: "loading",
          title: "正建设中..."
        })
      }
    },
    shareBtn(id){
      console.log('id====>', id)
    },
    getMainInfo(){
      let paramData = {
        url: '/api/banner/getBannerList',
        data: {
          "type": "1",
          "classId": null
        }
      }
      this.request.post(paramData.url, paramData.data).then(res => {
        console.log('res===?>>>', res)
        this.mainPic = res.data[0].bannerList[0]
      })
      this.request.post('/api/teacher/getTeacherList').then(res => {
        this.teacherList = res.data && res.data.map(({tags, ...other}) => ({...other, tagList: tags.split(',')}))
      })
    },
    getCourseInfo(){
      let paramData = {
        url: '/api/banner/getBannerList',
        data: {
          "type": "2",
          "classId": null
        }
      }
      this.request.post(paramData.url, paramData.data).then(res => {
        this.productList = res.data[0] && res.data[0].bannerList
      })
      this.request.post('/api/teacher/getTeacherList', {}).then(res => {
        this.teacherList = res.data && res.data.map(({tags, ...other}) => ({...other, tagList: tags.split(',')}))
      })
    }
  },
  created () {
    // this.formatCourseList()
  },
  onLoad(){
    Object.assign(this.$data, this.$options.data())
    this.getMainInfo()
    this.getCourseInfo()
  },
  onShow(){
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
