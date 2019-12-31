<template>
  <div class="pages_my_info">
    <div class="myspace_container">
      <div class="myspace_bg">
        <img src="/static/images/banner.jpg" alt="">
        <div class="user_info">
          <div class="user_avatar">
            <Upload width="144rpx" height="144rpx" :radius="radius" max="1" :uploadFlag="uploadFlag" @choosed="choosed" @delete="deleteImg" :srcs.sync="headImg"></Upload>
          </div>
          <div class="nickname_">
            {{userInfo.name}}
          </div>
          <div class="user_desc">
            豹变学员
          </div>
        </div>
      </div>
      <div>
        <editTable :info="userInfo" :isEdit='isEdit'></editTable>
      </div>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/upload'
import editTable from '@/components/editTable'
export default {
  components: {
    editTable, Upload
  },
  data () {
    return {
      radius: '50%',
      uploadFlag: false,
      isEdit: false,
      headImg: [],
      userInfo: {
        name: 'sss',
        headImg: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJNMpx8cDsjNS2rED8Mx1eBmOn1PA4KjBtapMiafCwwWsKcDpria1kzwbVibk2tKOIOqQs1UvTlqmhhQ/132'
        }
      }
    },
  methods: {
  
  },
  onLoad(){
    Object.assign(this.$data, this.$options.data())
    this.request.post('/api/user/userInfo').then(res => {
      console.log('onLoad==>>', res.data.headImg)
      this.userInfo = res.data
      this.headImg = [res.data.headImg]
    })
  }
}
</script>
<style lang="stylus" scoped>
.myspace_container
    .myspace_bg
      position relative
      height 319rpx
      .footer_border
        width 250%;
        overflow hidden
        border-bottom 319rpx solid rgba(247,247,247,1);
        border-radius 0 0 25% 25%
        position absolute
        bottom 0
      .mask
        width: 100%;
      img 
        width 100%
        height 319rpx
      .user_info
        position absolute
        top: 51rpx
        left: calc(50% - 70rpx)
        border-radius:50%;
        .user_login
          line-height 40rpx;
          padding 10rpx 16rpx
          height:56rpx;
          background:rgba(241,241,241,1);
          border-radius:12rpx;
        .user_avatar
          img 
            width:140px;
            height:140px;
            border-radius:50%;
        .nickname_
          text-align center
          font-size:36rpx;
          font-weight:400;
          color:rgba(255,255,255,1);
        .user_desc
          text-align center
          font-size:26rpx;
          font-weight:400;
          color:rgba(255,255,255,1);
</style>
