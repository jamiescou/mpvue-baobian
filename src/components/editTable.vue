<template>
  <div class="com_table_edit">
    <div class="basic_info">
      <div class="basic_item">
        <span class="basic_label">
          姓名
        </span>
        <input :disabled="isEdit" v-model="info.name" class="basic_field" type="text" placeholder="请输入姓名" placeholder-style="font-size:26rpx;color:rgba(102,102,102,1)">
        <span class="has_next"></span>
      </div>
      <div class="basic_item">
        <span class="basic_label">
          性别
        </span>
        <picker class="picker_box" :disabled="isEdit" @change="pickerSexChange" :value="sexIndex" :range="sexArray">
          <div class="picker_level">
            {{sexArray[sexIndex]}}
          </div>
        </picker>
        <span class="has_next"><img v-if="!isEdit" src="/static/images/next.png" alt=""></span>
      </div>
      <div class="basic_item">
        <span class="basic_label">
          微信号
        </span>
        <input :disabled="isEdit" v-model="info.weixinAcc" class="basic_field" type="text" placeholder="请输入微信号" placeholder-style="font-size:26rpx;color:rgba(102,102,102,1)">
        <span class="has_next"></span>
      </div>
      <div class="basic_item">
        <span class="basic_label">
          手机号
        </span>
        <input :disabled="isEdit" v-model="info.phone" class="basic_field" type="text" placeholder="请输入手机号" placeholder-style="font-size:26rpx;color:rgba(102,102,102,1)">
        <span class="has_next"></span>
      </div>
      <div class="basic_item">
        <span class="basic_label">
          地域
        </span>
        <picker class="picker_box" :disabled="isEdit" mode="region" :value="region" @change="regionPick">
          <div v-if="!region.length">请选择区域</div>
          <div class="picker_level">
            {{region[0]}}，{{region[1]}}，{{region[2]}}
          </div>
        </picker>
        <span class="has_next"><img v-if="!isEdit" src="/static/images/next.png" alt=""></span>
      </div>
      <div class="basic_item">
        <span class="basic_label">
          企业
        </span>
        <input :disabled="isEdit" v-model="info.company" class="basic_field" type="text" placeholder="请输入企业名称" placeholder-style="font-size:26rpx;color:rgba(102,102,102,1)">
        <span class="has_next"></span>
      </div>
      <div class="basic_item">
        <span class="basic_label">
          职位
        </span>
        <input :disabled="isEdit" v-model="info.job" class="basic_field" type="text" placeholder="请输入职位" placeholder-style="font-size:26rpx;color:rgba(102,102,102,1)">
        <span class="has_next"></span>
      </div>
    </div>
    <div class="rich_text_container">
      <div class="rich_text_list">
        <div class="rich_label">
          IP标签
        </div>
        <div class="rich_area">
          <textarea :disabled="isEdit" v-model="info.ipTag" name="" id="" cols="30" rows="10">
          </textarea>
        </div>
      </div>
      <div class="rich_text_list">
        <div class="rich_label">
          你现在最需要什么资源或帮助？
        </div>
        <div class="rich_area">
          <textarea name="" id="" v-model="info.question0" :disabled="isEdit" cols="30" rows="10">
          </textarea>
        </div>
      </div>
      <div class="rich_text_list">
        <div class="rich_label">
          你能给其他人提供什么样的资源或帮助？
        </div>
        <div class="rich_area">
          <textarea name="" v-model="info.question1" id="" :disabled="isEdit" cols="30" rows="10">
          </textarea>
        </div>
      </div>
      <div class="rich_text_list">
        <div class="rich_label">
          产品介绍
        </div>
        <div class="rich_area">
          <textarea name="" v-model="info.productIntro" id="" :disabled="isEdit" cols="30" rows="10">
          </textarea>
        </div>
      </div>
      <div class="rich_text_list">
        <div class="rich_label">
          企业介绍
        </div>
        <div class="rich_area">
          <textarea name="" v-model="info.companyIntro" id="" :disabled="isEdit" cols="30" rows="10">
          </textarea>
        </div>
      </div>
    </div>
    <div class="ip_test">
      <div>IP 诊断<span class="ip_tips">(此内容仅豹变学院内部可见)</span></div>
      <span class="has_next"><img src="/static/images/next.png" alt=""></span>
    </div>
    <div class="edit_info" v-if="isEdit" @click="editUserInfo">
      修改信息
    </div>
    <div class="in_edit_info" v-if="!isEdit">
      <div class="cancel_info" @click="cancelInfo">
        取消
      </div>
      <div class="submit_info" @click="submitInfo">
        提交
      </div>
    </div>
  </div>
</template>
 
<script>
    export default {
      props:['info','isEdit'],
      data(){
        return {
          sexIndex: 0,
          sexArray:['男', '女'],
          region: ['北京市', '北京市', '海淀区'],
          // customItem: '全部'
          userInfo: {
            gander: '男',
            bossId: 2,
            city: "海淀区",
            company: "阿里巴巴",
            companyIntro: "阿里巴巴，电子商务，阿里巴巴，电子商务阿里巴巴，电子商务阿里巴巴，电子商务阿里巴巴，电子商务阿里巴巴，电子商务阿里巴巴，电子商务阿里巴巴，电子商务阿里巴巴，电子商务阿里巴巴，电子商务",
            headImg: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJNMpx8cDsjNS2rED8Mx1eBmOn1PA4KjBtapMiafCwwWsKcDpria1kzwbVibk2tKOIOqQs1UvTlqmhhQ/132",
            id: 3,
            ipTag: "创业教父",
            job: "ceo",
            name: "艾克斯",
            nickName: "艾克斯",
            phone: "13829298282",
            productIntro: "天猫，淘宝，支付宝，阿里妈妈，阿里巴巴，平头哥",
            province: "北京市",
            question0: "这是第一个问题答案",
            question1: "这是第二个问题答案",
            question2: "这是第三个问题答案",
            question3: "这是第四个问题答案",
            question4: "这是第五个问题答案",
            secretaryPhone: '1388922222',
            weixinAcc: "wechataccount"
          }
        }
      },
      onLoad(){
        Object.assign(this.$data, this.$options.data())
      },
      methods:{
        pickerSexChange (val) {
          this.sexIndex = val.target.value
        },
        regionPick(e) {
          console.log('picker发送选择改变，携带值为', e.mp.detail.value)
          this.region = e.mp.detail.value
        },
        editUserInfo(){
          const url = '/pages/editInfo/main'
          wx.navigateTo({
            url
          })
        },
        cancelInfo() {
          wx.navigateBack()
        },
        submitInfo(){
          let {id} = this.userInfo
          let postData = {
            ...this.userInfo
          }
          this.request.post('/api/user/updateUserInfo', postData).then(res => {
            wx.showToast({
              title: '更新成功',
              icon: 'none'
            })
            // wx.nextTick(() => {
            //   wx.navigateBack()
            // })
          }) 
        }
      }
    } 
</script>
 
<style lang="stylus" scoped>
  .com_table_edit
    width 100%;
    .edit_info
      text-align center;
      font-size:36rpx;
      font-family:PingFang SC;
      color:rgba(255,255,255,1);
      height:82rpx;
      line-height:82rpx;
      background:linear-gradient(0deg,rgba(180,127,60,1),rgba(255,218,160,1));
    .in_edit_info
      font-size:36rpx;
      font-family:PingFang SC;
      color:rgba(255,255,255,1);
      height:82rpx;
      line-height:82rpx;
      display flex;
      .cancel_info
        flex 1
        text-align center;
        font-size:36rpx;
        font-weight:500;
        color:rgba(51,51,51,1);
        background:rgba(255,255,255,1);
      .submit_info
        flex 1
        text-align center;
        font-size:36rpx;
        font-weight:500;
        color:rgba(255,255,255,1);
        background:linear-gradient(0deg,rgba(180,127,60,1),rgba(255,218,160,1));
    .ip_test
      display flex;
      height:88px;
      padding-left: 20rpx;
      background:rgba(255,255,255,1);
      height 88rpx;
      font-size:30rpx;
      font-weight:500;
      color:rgba(51,51,51,1);
      padding-left: 2%;
      border-bottom 20rpx solid rgba(247,247,247,1);
      border-top 20rpx solid rgba(247,247,247,1);
      line-height 88rpx;
      align-items center
      justify-content space-between
      .has_next
        width 6%;
        img 
          width:16rpx;
          height:28rpx;
      .ip_tips
        font-size:20rpx;
        font-weight:500;
        color:rgba(153,153,153,1);
    .rich_text_container
      padding 30rpx 2%
      .rich_text_list
        margin-bottom 30rpx;
        .rich_label
          margin-bottom 27rpx;
          font-size:30rpx;
          font-weight:500;
          color:rgba(51,51,51,1);
        .rich_area
          padding 20rpx;
          border:2rpx solid rgba(247,247,247,1);
          border-radius:10rpx;
          font-size:26rpx;
          font-weight:400;
          color:rgba(102,102,102,1);
    .basic_info
      .basic_item
        padding-left: 2%;
        border-bottom 2px solid rgba(247,247,247,1);
        height 88rpx;
        line-height 88rpx;
        display flex
        align-items center
        justify-content space-between
        .basic_label
          width 20%;
          font-size:26rpx;
          font-weight:400;
          color:rgba(102,102,102,1);
        .picker_box
          width 70%
          text-align left
          .picker_level
            font-size:30rpx;
            font-weight:400;
            color:rgba(51,51,51,1);
        .basic_field
          width 70%
          text-align left
          font-size:30rpx;
          font-weight:400;
          color:rgba(51,51,51,1);
        .has_next
          width 6%;
          img 
            width:16rpx;
            height:28rpx;
</style>