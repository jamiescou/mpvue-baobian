<template>
  <div class="pages_teacher_detail">
    <div class="course_container">
      <!-- 课程标题价格等 -->
      <div class="course_detail">
        <div class="course_share" @click="shareBtn(courseInfo.id)">
          <img src="/static/images/share.png" alt="暂无图片">
        </div>
        <div class="course_poster">
          <img :src="courseInfo.img" alt="暂无图片">
        </div>
      </div>
      <div class="lesson_describe">
        <!-- 详细介绍部分 -->
        <div class="content_tab">
          <div class="_tabs" :class="tab.active?'active':''" v-for="(tab, index) in tabs" :key="tab.tabId" @click="changeTab(tab, index)">
            {{tab.label}}
          </div>
        </div>
        <div v-if="tab === 1" class="content_describe">
          <div v-html='courseInfo.htmlForContent'></div>
        </div>
        <div v-if="tab === 2" class="content_describe">
          <div v-html='courseInfo.htmlForLesson'></div>
        </div>
        <div class="course_commet">
          <!-- 评论 -->
          <div class="_commet_title">
            <span class="commet_line">
              学员评论
            </span>
          </div>
          <div class="commet_list" v-for="comment in comments" :key="comment.id">
            <div class="commet_head">
              <div class="_avatar">
                <img :src="comment.img" alt="">
              </div>
              <div class="_nickname">
                {{comment.nickname}}
              </div>
              <div class="fabulous_img">
                <img v-if="!comment.isFabulous" src="/static/images/fabulous.png" @click="fabulousComment(comment)" alt="">
                <img v-if="comment.isFabulous" src="/static/images/fabulous_active.png" @click="fabulousComment(comment)" alt="">
              </div>
            </div>
            <div class="commet_desc">
              {{comment.comment}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_button">
      <div class="course_recommend">
        我要推荐
      </div>
      <div class="just_purchase">
        立即购买
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from '../../utils/countdown.js'
export default {
  data () {
    return {
      countdown: {},
      courseInfo: {
        label: '个人品牌，重构商业竞争力超级...',
        name: '张大豆',
        img: '/static/images/course.png',
        id: 1,
        title: '豹变学院院长、豹变IP创始人',
        price: 1999,
        oldprice: 2999,
        desc: '个人品牌重构商业竞争力，这是个不错的课程............................',
        htmlForContent: `<div>
                    <div>创始人品牌命门之认知重生</div>
                    <div>创始人品牌命门之认知重生</div>
                    <div><img height='200' src='http://storage.zone.photo.sina.com.cn/zone/1000_0/20191217/d86c2df6fbf2b8d07c33fe508595050d_3024_3024.jpg?&ssig=60doVKd%2F%2FV&KID=sina,slidenews&Expires=1576556973'/></div>
                  </div>`,
        htmlForLesson: `<div>
                    <div>这里是课程内容</div>
                    <div>这里是课程内容</div>
                    <div><img height='200' src='http://storage.zone.photo.sina.com.cn/zone/1000_0/20191217/d86c2df6fbf2b8d07c33fe508595050d_3024_3024.jpg?&ssig=60doVKd%2F%2FV&KID=sina,slidenews&Expires=1576556973'/></div>
                  </div>`
      },
      comments: [
        {
          img: '/static/images/avatar.png',
          id: 1,
          nickname: '艾克斯',
          comment: '创始人品牌命门之认知重生创始人品牌命门之认知重生创始人品牌命门之认知重生创始人品牌命门之认知重生创始人品牌命门之认知重生创始人品牌命门之认知重生',
          isFabulous: true
        },
        {
          img: '/static/images/avatar.png',
          id: 2,
          nickname: '埃克斯',
          comment: '这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容',
          isFabulous: true
        }
      ],

      tab: 1,
      tabs: [
        {label: '课程导览', tabId: 1, active: true},
        {label: '课程内容', tabId: 2, active: false}
      ]
    }
  },
  components: {
  },
  methods: {
    changeTab(tab){
      this.tabs.map(item => {
        item.active = item.tabId === tab.tabId ? true : false
        this.tab = tab.tabId
      })
    },
    fabulousComment(state){
      state.isFabulous = !state.isFabulous
    }
  },
  created () {
     this.courseInfo.htmlForContent = this.courseInfo.htmlForContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ');
     this.courseInfo.htmlForLesson = this.courseInfo.htmlForLesson.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ');
     Countdown.init('2020-01-03 09:00:00','countdown', this)
  },
  onLoad(){
    //  Countdown.init('2020-01-03 09:00:00','countdown', this)
    //  console.log(this.countdown)
  }
}
</script>
<style lang="stylus" scoped>
  .pages_teacher_detail
    width 100%
    .footer_button
      display flex
      position fixed
      bottom 0
      left 0
      height 80rpx
      width 100%
      z-index 1000
      height:80rpx;
      line-height 80rpx;
      text-align center;
      border:1rpx solid rgba(241,241,241,1);
      font-size:34rpx;
      font-weight:400;
      color:rgba(254,254,254,1);
      background:linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
    .course_container
      padding-bottom 80rpx
      .lesson_describe
        width 100%
        .course_commet
          margin 50rpx 0 20rpx 20rpx
          ._commet_title
            margin-bottom 42rpx
            .commet_line
              padding-bottom 10rpx
              border-bottom 6rpx solid #F9DBA7;
              font-size:28rpx;
              font-weight:400;
              color:rgba(51,51,51,1);
              line-height:40rpx;
          .commet_list
            padding 35rpx 0
            border-bottom 1px solid rgba(246,246,246,1);
            .commet_head
              display flex
              align-items center
              position relative
              ._nickname
                margin 0 10rpx
                font-size:24rpx;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height:36rpx;
              .fabulous_img
                position absolute
                right 52rpx
                top 10rpx
                img
                  width:27rpx;
                  height:28rpx;
                  vertical-align middle
              ._avatar
                img
                  width 60rpx
                  height 60rpx
            .commet_desc
              margin-right 53rpx
              font-size:26rpx;
              font-weight:400;
              color:rgba(51,51,51,1);
              line-height:34rpx;
        .content_tab
          display flex
          justify-content space-between
          ._tabs
            flex 1
            height:80rpx;
            text-align center
            background:rgba(255,255,255,1);
            border:1rpx solid rgba(241,241,241,1);
            font-size:34rpx;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:80rpx;
            &.active
              color:rgba(255,255,255,1);
              background:linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
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
        .describe_container
          padding 27rpx 0 24rpx 30rpx
          position relative
          .count_down
            display flex
            justify-content center
            padding 0 20rpx
            height: 50px;
            opacity: 0.9;
            position absolute
            bottom 100rpx
            right 20rpx
            font-size: 30rpx;
            font-weight: 400;
            color: rgba(102,102,102,1);
            line-height: 50rpx;
            background: rgba(51,51,51,1);
            .count_day,
            .count_hour,
            .count_minute,
            .count_seconds
              margin 0 6rpx
              background:linear-gradient(0deg,rgba(172,129,72,1) 0%, rgba(249,219,167,1) 100%);
              -webkit-background-clip:text;
              -webkit-text-fill-color:transparent;
          .course_label
            font-size 30rpx
            font-weight 500
            color rgba(51,51,51,1)
            line-height 36rpx
          .course_name_title
            margin 4rpx 0 20rpx 0
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
          .course_desc
            font-size:26rpx;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:36rpx;
          .course_price
            display flex
            align-items center
            margin -8rpx 0 28rpx 0
            ._price_label
              background:linear-gradient(0deg,rgba(172,129,72,1),rgba(249,219,167,1));
              border-radius 20rpx
              width 115px
              height 48px
              line-height 48px
              text-align center
              font-size 28rpx
              font-weight 400
              color rgba(255,255,255,1)
            ._price_now
              font-size:30px;
              font-weight:400;
              color:rgba(210,13,13,1);
              line-height:36px;
              margin 0 9rpx 0 12rpx
            ._price_old
              font-size:24px;
              font-weight:400;
              text-decoration:line-through;
              color:rgba(102,102,102,1);
              line-height:36px;
</style>
