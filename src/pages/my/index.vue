<template>
  <div class="pages_myspace_entry" :style="isKeFu?'position: fixed':''">
    <div class="kefu_modal" v-if="isKeFu">
      <div class="mask"></div>
      <div class="modal_content">
        <div class="modal_name">
          豹变明星BOSS经纪人
        </div>
        <div class="kefu_phone">
          18515918899
        </div>
        <div class="phone_btn">
          <img src="/static/images/cellphone.png" alt="">
          <span class="call_text">拨打电话</span>
        </div>
        <div class="wechat_icon">
          <img src="/static/images/wechatkefu.png" alt="">
        </div>
        <div class="wechat_name">
          豹妹儿微信
        </div>
      </div>
      <div class="modal_cancel" @click="isKeFu=false">
        <img src="/static/images/close.png" alt="">
      </div>
    </div>
    <div class="myspace_container">
      <div class="myspace_bg">
        <div class="mask"></div>
        <img src="/static/images/banner.jpg" alt="">
        <!-- <div class="footer_border"></div> -->
        <!-- <div class="footer_border"></div> -->
        <div v-if="isLogin" class="user_info">
          <div class="user_avatar">
            <img :src="userInfo.headImg" alt="">
          </div>
          <div class="nickname_">
            {{userInfo.name}}
          </div>
          <div class="user_desc">
            豹变学员
          </div>
        </div>
        <div class="user_info" v-if="!isLogin">
          <div class="default_avatar">
            <img src="/static/images/baobian_icon.png" alt="">
          </div>
          <button class="user_login" open-type="getUserInfo" lang="zh_CN"  @getuserinfo="onGotUserInfo">登录/注册</button>
        </div>
      </div>
      <div class="user_container">
        <div class="common_info">
          <div class="info_item" v-for="item in myInfoList" :key="item.text" @click="handleInfoDetail(item.url)">
            <div class="info_icon">
              <img :src="item.icon" alt="">
            </div>
            <div class="info_text">
              {{item.text}}
            </div>
            <div class="info_nextBtn">
              <img src="/static/images/next.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="my_tools">
        <div class="label_title">
          我的工具
        </div>
        <div class="info_item" v-for="item in myTools" :key="item.text">
          <div class="info_icon">
            <img :src="item.icon" alt="">
          </div>
          <div class="info_text">
            {{item.text}}
          </div>
          <div class="info_nextBtn">
            <img src="/static/images/next.png" alt="">
          </div>
        </div>
      </div>
      <div class="kefu_fixed" @click="keFuTell()">
        <img src="/static/images/kefu.png" alt="">
      </div>
    </div>
    <!-- 使用组件 -->
    <tab-bar :selectNavIndex="2"></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/tabBar'
const {getStorage, getSetting, login, checkUserAuth}  = require('../../utils/auth')
export default {
  data () {
    return {
      isKeFu: false,
      isLogin: false,
      userInfo: {},
      myInfoList: [
        {
          icon: '/static/images/myinfo.png',
          text: '我的信息',
          url: '/pages/myInfo/main'
        },
        {
          icon: '/static/images/mylesson.png',
          text: '我的课程',
          url: '/pages/myLesson/main'
        },
        {
          icon: '/static/images/yu_e.png',
          text: '我的余额',
          url: '/pages/myBalance/main'
        },
        {
          icon: '/static/images/duihuanka.png',
          text: '我的兑换卡',
          url: '/pages/myCoupon/main'
        }
      ],
      myTools: [
        {
          icon: '/static/images/huodong.png',
          text: '活动',
          url: ''
        },
        {
          icon: '/static/images/toupiao.png',
          text: '投票',
          url: ''
        },
        {
          icon: '/static/images/yaoqing.png',
          text: '邀请好友',
          url: ''
        },
        {
          icon: '/static/images/mishu.png',
          text: '我的秘书',
          url: ''
        }
      ]
    }
  },

  components: {
    tabBar
  },

  methods: {
    onGotUserInfo (e) {
      console.log('e==>', e)
    if (e.mp.detail.errMsg === 'getUserInfo:ok') {
          login().then(res => {
            console.log('res===>>', res)
          })
      } else {
      }
    },
    keFuTell(){
      this.isKeFu = true
    },
    handleInfoDetail(url){
      wx.navigateTo({
        url
      })
    }
  },
  async onShow(){
    try {
      let userInfo = await getStorage('userInfo') || ''
      this.isLogin = true
      this.userInfo = userInfo.data
    } catch (error) {
      checkUserAuth()
    }
  },
  onLoad(){
    Object.assign(this.$data, this.$options.data())
  }
}
</script>

<style lang="stylus" scoped>
.pages_myspace_entry
  width 100%
  padding-bottom 122rpx
  .kefu_modal
    .mask
      width 100%
      height 100%
      position absolute
      background:rgba(0,0,0,1);
      opacity:0.5;
      z-index: 1002
    .modal_cancel
      position: absolute;
      top: calc(22% + 580rpx);
      left: calc(50% - 37.5rpx);
      color: #fff;
      z-index: 10000;
      img
        width:75rpx;
        height:75rpx;
    .modal_content
      margin 0 auto 
      text-align center
      width: 480rpx;
      height: 580rpx;
      background: #fff;
      border-radius: 40rpx;
      z-index: 10000;
      position: fixed;
      top: 20%;
      left: calc(50% - 240rpx);
      .modal_name
        margin-top 79rpx;
        font-size:30rpx;
        font-weight:bold;
        color:rgba(51,51,51,1);
      .kefu_phone
        font-size:28rpx;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin 28rpx 0 40rpx 0
      .phone_btn
        background: linear-gradient(0deg, #ac8148, #f9dba7);
        border-radius: 20rpx;
        height: 40rpx;
        width 204rpx;
        padding 4rpx 20rpx
        line-height: 40rpx;
        text-align: center;
        font-size: 28rpx;
        font-weight: 400;
        color: #fff;
        margin-left: calc(50% - 122rpx)
        img 
          width:27rpx;
          height:27rpx;
      .wechat_icon
        margin 28rpx 0 0 0
        img 
          width:184rpx;
          height:184rpx;
      .wechat_name
        font-size:28rpx;
        font-weight:400;
        color:rgba(51,51,51,1);
  .myspace_container
    .kefu_fixed
      position fixed
      bottom 15%
      right 5%
      img 
        width 120px
        height 120px
    .my_tools
      .label_title
        padding-left: 20rpx
        height 88rpx
        line-height 88rpx
        border-bottom 2px solid rgba(247,247,247,1);
        font-size:30rpx;
        font-weight:500;
        color:rgba(51,51,51,1);
      .info_item
        display flex
        height 88rpx
        justify-content space-around
        align-items center
        padding 0 40rpx 0 20rpx
        border-bottom 2px solid rgba(247,247,247,1);
        .info_text
          margin-left 20rpx;
          font-size:26rpx;
          font-weight:400;
          width 30%
          color:rgba(102,102,102,1);
        .info_nextBtn
          img 
            width:26px;
            height:44px;
          margin-left 60%
          color rgba(153,153,153,1)
        .info_icon
          img 
            width 48px
            height 48px
    .user_container
      border-bottom 20rpx solid rgba(247,247,247,1);
      .common_info
        .info_item
          display flex
          height 88rpx
          justify-content space-around
          align-items center
          padding 0 40rpx 0 20rpx
          border-bottom 2px solid rgba(247,247,247,1);
          .info_text
            margin-left 20rpx;
            font-size:26rpx;
            font-weight:400;
            width 30%
            color:rgba(102,102,102,1);
          .info_nextBtn
            img 
              width:26px;
              height:44px;
            margin-left 60%
            color rgba(153,153,153,1)
          .info_icon
            img 
              width 48px
              height 48px
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
        .default_avatar
          text-align center;
          margin 0 auto;
          img
            border-radius:50%;
            width:140px;
            height:140px;
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
