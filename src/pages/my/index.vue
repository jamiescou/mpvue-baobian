<template>
  <div class="pages_main_entry">
    <div>我的</div>

    <!-- 使用组件 -->
    <tab-bar :selectNavIndex="2"></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/tabBar'

export default {
  data () {
    return {
    }
  },

  components: {
    tabBar
  },

  methods: {
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.pages_main_entry{
  background: #F1F1F1;
}
.pages_main_entry ._top{
  display: flex;
  justify-content: center;
}
.pages_main_entry .header_banner{
  width: 750rpx;
  height: 300rpx;
}
.product_list{
  width: 674rpx;
  background:rgba(255,255,255,1);
  display: flex;
  margin: 30rpx auto;
  padding: 30rpx 0 30rpx 30rpx;
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
.product_list .item_left{
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
</style>
