<template>
  <div class="pages_share_modal">
    <div class="share_modal" v-if="isShowModal">
      <div class="masker"></div>
      <div class="modal_container">
        <div class="share_content">
          <div @click.stop="shareView">
            <button open-type="share" class="option_btn share_item">
              <div class="share_icon">
                <img src="/static/images/share_wechat.png" alt="">
              </div>
              <div class="share_title">
                发送好友
              </div>
            </button>
          </div>
          <div class="share_item" >
            <div class="share_icon" @touchstart.stop="sharePoster">
              <img src="/static/images/share_poster.png" alt="">
            </div>
            <div class="share_title">
              生成海报
            </div>
          </div>
        </div>
        <div class="share_cancel" @touchstart.stop="shareCancel">
          取消
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isShowModal', 'modalStatus'],
  data () {
    return {
    }
  },
  methods: {
    sharePoster(e){
      console.log('e==>>', e)
    },
    shareCancel(){
      this.$emit('modalStatus', false)
    },
    shareView(e){
      console.log('e11==>>', e)
    }
  },
  created () {
  },
  onLoad(){
  }
}
</script>
<style lang="stylus" scoped>
  .pages_share_modal
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
            position relative !important
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
