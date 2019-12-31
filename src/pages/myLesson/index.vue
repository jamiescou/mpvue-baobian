<template>
  <div class="pages_my_lesson">
    <div class="order_tab">
      <div class="tab_item " :class="tab.isActive?'activeTab':''" v-for="tab in tabs" :key="tab.name" @click="changeTab(tab)">
        {{tab.name}}
      </div>
    </div>
    <div style="margin-top: 109rpx;margin-bottom: 88rpx" v-if="myOrderList.length>0">
      <cardTable v-for="item in myOrderList" :courseInfo="item" :key="item.id"></cardTable>
    </div>
    <div v-else class="no_lesson">
      <div class="no_data_pic">
        <img src="/static/images/no_data.png" alt="">
      </div>
      <div class="_text">
        暂无课程记录
      </div>
    </div>
    <div v-if="curTab === 0 && myOrderList.length>0" class="slogan_fixed">
      你的IP 我来成就
    </div>
  </div>
</template>
<script>
import cardTable from '@/components/cardTable'
// import tabBar from '@/components/tabBar'

export default {
  components: {
    cardTable
  },
  data () {
    return {
      curTab: 0,
      tabs: [
        {
          name: '全部',
          type: 0,
          isActive: true
        },
        {
          name: '待付款',
          type: 1,
          isActive: false
        },
        {
          name: '已完成',
          type: 2,
          isActive: false
        }
      ],
      myOrderList: []
    }
  },
  methods: {
    getMyOrderList(type){
      let url = '/api/order/myOrderList?type='+type
      this.request.post(url).then(res => {
        this.myOrderList = res.data && res.data.map(({courseTags, courseImgs, ...other}) => ({...other, tagList: courseTags.split(','),imgsList: courseImgs.split(',')}))
      })
    },
    changeTab(tab){
      this.tabs.map(item => {
        item.isActive = item.type === tab.type ? true : false
        this.curTab = tab.type
        this.myOrderList = []
        this.getMyOrderList(tab.type)
      })
    },
  },
  onShow(){
    this.getMyOrderList(0)
  },
  created () {
  }
}
</script>

<style scoped>
.pages_my_lesson{
  background: #F1F1F1;
  height: 100%;
  width: 100%;
  position: absolute;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.pages_my_lesson .order_tab{
  z-index: 1000;
  background: #F1F1F1;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 109rpx;
  overflow: scroll
}
.order_tab .tab_item{
  font-size:30rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
  padding-bottom: 25rpx;
  border-bottom:4rpx solid #f1f1f1
}
.order_tab .activeTab{
  font-size:30rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
  background:linear-gradient(0deg,rgba(172,129,72,1) 0%, rgba(249,219,167,1) 100%);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  border-bottom:4rpx solid rgba(172,129,72,1);
}
.slogan_fixed{
  position: fixed;
  bottom: 0;
  width: 100%;
  line-height: 88rpx;
  text-align: center;
  height:88rpx;
  background:linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
  font-size:32rpx;
  font-weight:400;
  color:rgba(255,255,255,1);
}
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
