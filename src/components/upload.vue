<template>
  <div v-if="uploadFlag === 'multiple'" class="j-pic-upload">
    <div v-if="urls.length < 6" class="j-upload-btn" @click="uploadImg()" :style="{'width':width || '120rpx','height':height || '120rpx'}">
      <div class="j-upload-add"><img src="/static/images/photo_pic.png" alt=""></div>
      <div class="add_pic_title">添加图片</div>
      <div class="more_six">(最多6张)</div>
    </div>
    <img @click="previewImg(index)" v-for="(src, index) in urls" :key="src" :src="src" :style="{'width':width || '120rpx','height':height || '120rpx'}" class="img" >
  </div>
  <div v-else class="j-pic-upload">
    <div class="js-upload-btn" @click="uploadImg()" :style="{'width':width || '144rpx','height': height || '144rpx', 'borderRadius': radius || '0'}">
      <img class="upload_avatar" :src="signlePic" alt="">
    </div>
  </div>
</template>
 
<script>
    import { getStorage } from '@/utils/auth'
    export default {
      props:["width","height","radius", "uploadFlag","max","srcs"],
      data(){
        return {
          urlsFlag: true,
          urls:[],
          upLoadImgs: [],
          signlePic: ''
        }
      },
      watch: {
        // upLoadImgs(val){      
        //   console.log('val==>>', val)
        //   this.urlsFlag = val.length > 0 && val.length <= 6
        //   console.log('urlsFlag==>>', this.urlsFlag)
        // },
        srcs(val){
          this.signlePic = val[0]
        }
      },
      onLoad(){
        Object.assign(this.$data, this.$options.data())
      },
      onReady(){
        console.log('onReady in onLoad==>>', this.srcs)
        this.urls = this.srcs || [];
        console.log('this.srcs==>>' ,this.srcs)
        this.signlePic = this.srcs[0]
      },
      methods:{
        uploadCarPic: async function(page, path) {
          // if (!this.urlsFlag) {
          //   wx.showToast({
          //     title: '超过6张',
          //     icon: 'none'
          //   })
          //   this.urls = []
          //   thi.upLoadImgs = []
          //   this.srcs = []
          //   return false
          // }
          let that = this;
          wx.showToast({
            icon: "loading",
            title: "正在上传"
          })
          let data = await getStorage('token')
          console.log('file url===>',  require('@/utils/config').baseURL + '/api/upload/file')
          wx.uploadFile({
            url: require('@/utils/config').baseURL + '/api/upload/file',
            filePath: path, 
            method: "POST",
            name: 'file',
            header: { "Content-Type": "multipart/form-data", "token":  data.data},
            formData: {
            },
            success: function (res) {
              if (res.statusCode != 200) { 
                wx.showModal({
                  title: '提示',
                  content: '上传失败',
                  showCancel: false
                })
                return;
              }
              var imgData = res.data
              that.signlePic  = JSON.parse(imgData).data
              that.upLoadImgs.push(JSON.parse(imgData).data)
              console.log('upLoadImgs==>>', that.upLoadImgs)
              
              that.$emit("choosed",{upLoadImgs: that.upLoadImgs});
            },
            fail: function (e) {
              console.log(e);
              wx.showModal({
                title: '提示',
                content: '上传失败',
                showCancel: false
              })
            },
            complete: function () {
              wx.hideToast();  //隐藏Toast
            }
          })
        },
        uploadImg(){
          let that = this;
          wx.chooseImage({
            count: that.max || 3,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
              console.log('res success===>>', res)
              res.tempFilePaths.forEach(v=>{
                that.uploadCarPic(that, v);
                that.urls.push(v);
              });
              var tempFilePaths = res.tempFilePaths;
              console.log('tempFilePaths==>>>', tempFilePaths)
              // that.$emit("choosed",{all:that.urls,currentUpload:res.tempFilePaths});
            }
          })
        },
        previewImg(index){
          let that = this;
          wx.showActionSheet({
            itemList:["预览","删除"],
            success: function(res) {
              if(res.tapIndex === 0){
                wx.previewImage({
                  current:that.urls[index],
                  urls:that.urls
                });
              } else {
                that.urls.splice(index,1);
                that.$emit("delete",that.urls);
              }
            },
          });
        },
      }
    } 
</script>
 
<style scoped>
  .j-pic-upload{
    padding: 10rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
.j-upload-btn{
  border: 1px dashed #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30rpx;
  margin-right: 30rpx;
}
.js-upload-btn{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.js-upload-btn .upload_avatar{
  border-radius: 50%;
  width: 144rpx;
  height: 144rpx;
}
  .add_pic_title{
    font-size:24rpx;
    font-weight:400;
    color:rgba(178,178,178,1);
  }
  .more_six{
    font-size:18rpx;
    font-weight:400;
    color:rgba(178,178,178,1);
  }
  .j-upload-add{
    font-weight: 500;
    color:#C9C9C9;
  }
  .j-upload-add img{
    width: 55rpx;
    height: 43rpx;
  }
  .img{
    margin:10rpx 30rpx 10rpx 30rpx;
  }
</style>