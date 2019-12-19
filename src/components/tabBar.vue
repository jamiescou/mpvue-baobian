<template>
  <div class="tabbar-wrap" :class="isIphoneX? 'isIphoneX':''">
      <ul class="tabbar">
          <li class="tabbar-item" v-for="(item, index) in navList" 
          :key="index" 
          @click="selectNavItem(index, item.pagePath)"
          :class="item.isSpecial ? 'wrapSpecial':''">
              <p class="tabbar-icon" >
                  <img alt="tabbar-icon" 
                  :src="selectNavIndex == index? item.selectedIconPath : item.iconPath" 
                  :class="item.isSpecial ? 'imgSpecial':''"
                  >
              </p>
              <p class="tabbar-text" :class="selectNavIndex == index? 'active':''">
                  {{item.text}}
              </p>
          </li>
      </ul>
  </div>
</template>

<script>
  export default {
    props: ['selectNavIndex'],
    data() {
      return {
        color: "#979795",
        selectedColor: "#333333",
        navList: [
          {
            pagePath: "/pages/index/main",
            iconPath: "/static/tabbar/main.png",
            selectedIconPath: "/static/tabbar/main_active.png",
            text: "首页"
          },
          {
            pagePath: "/pages/lesson/main",
            iconPath: "/static/tabbar/lesson.png",
            selectedIconPath: "/static/tabbar/lesson_active.png",
            isSpecial: true,
            text: "课程"
          },
          {
            pagePath: "/pages/my/main",
            iconPath: "/static/tabbar/my.png",
            selectedIconPath: "/static/tabbar/my_active.png",
            text: "我的"
          }
        ],
      }
    },
    methods: {
      /**
       * 点击导航栏
       */
      selectNavItem(index, pagePath) {
        if (index === this.selectNavIndex) {
          return false;
        }
        this.bindNavigateTo(pagePath);
      },

      /**
       * 路由跳转
       */
      bindNavigateTo(url) {
        wx.switchTab({
          url
        })
      },
    },
    computed: {
        isIphoneX(){
            return this.$store.getters.isIphoneX
        }
    }
  }
</script>

<style lang="stylus" scoped>
.tabbar-wrap 
    position fixed
    bottom 0
    left 0
    height 92px
    width 100%
    padding-top 6px
    box-shadow 0 0 2px #C4C4C4
    z-index 1000
    background #fff
    &.isIphoneX
        padding-bottom 66rpx
    .tabbar 
        display flex
        .tabbar-item
            flex 1  
            .tabbar-icon
                height 56px
                text-align center
                position relative
                img 
                    width 56px
                    height 56px
                    &.imgSpecial
                        width w = 84px
                        height h = 84px      
            .tabbar-text
                text-align center
                line-height 36px
                color #333
                font-weight 400
                font-size 22px
                &.active
                    color #333
                    font-weight bold
            &.wrapSpecial
                .tabbar-icon
                    position absolute
                    top -36px
                    width 84px
                    height 84px
                    padding 6px
                    top -36px
                    left 50%
                    margin-left -((@width + @padding * 2 ) / 2)
                    border-radius 50%
                    border-top 2px solid #C4C4C4
                    text-align center
                    background #fff
                .tabbar-text
                    position relative
                    bottom -56px

</style>
