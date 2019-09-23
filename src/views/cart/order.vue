<template>
  <!-- 订单页面 -->
  <div class="order">
    <div class="header">
      <span class="iconfont icon-jiantou" @click="toCart"></span>
      <h3>填写订单页面</h3>
    </div>
    <div class="main">
      <div class="goods" >
        <div class="goods-item" v-for="item in cartGoods" :key="item.id">
          <div class="left">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="right">
            <p>{{item.count}}</p>
          </div>
        </div>
      </div>
      <div class="all">
        <div class="fl left">
          合计：
        </div>
        <div class="right fr">
          ￥{{pay}}
        </div>
      </div>
      <div class="address">
        <span>地址：</span>
        <el-select v-model="selectAddress" :placeholder="addressPlaceHolder">
        <el-option
        v-for="(item,index) in address"
        :key="index"
        :label="item.name+item.phone+item.city+item.detailAdd"
        :value="index">
        </el-option>
        </el-select>
      </div>
    </div>
    <div class="footer">
      <div class="price fl">
        <span>付款：</span>
        <span class="price-number">￥{{pay}}</span>
      </div>
      <div class="right fr">
         <el-button type="danger" plain @click="topay">去支付</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'Order',
data(){
  return {
    selectAddress:0,
    addressPlaceHolder:'请选择地址'
  }
},
mounted(){
//console.log(this.cartGoods)
//console.log(this.adress)
},
computed: {
  //返回商品详情
  cartGoods(){
    return this.$route.query.cartGoods
  },
  //返回总价格
  pay(){
    return this.$route.query.pay
  },
  //返回默认地址
  address(){
    return this.$store.state.address
  }
},
methods: {
  toCart(){
    this.$router.go(-1)
  },
  topay(){
    this.$store.state.cartGoods=[]
    this.$store.state.cartNum=0
    this.$router.push('/cart')
    alert('支付成功')
  }
}
}
</script>

<style lang='stylus' scoped>
.order
  color #2c3e50
  background #f5f5f5
  .header
    position fixed
    left 0
    right 0
    top 0
    height 50px
    line-height 50px
    text-align center
    color #2c3e99
    margin-bottom 10px
    background #fff
    span  
      position absolute
      left 0
      top 0
      width 50px
      height 50px
      font-size 20px
  .main
    .goods
      margin-top 60px
      padding 5px 
      .goods-item
        margin-bottom 10px
        height 40px
        line-height 40px
        background #fff
        .left
          float left
          height 100%
          img 
            height 100%
        .right
          float right 
    .all
      height 40px
      line-height  40px
      background #fff
      padding 5px
      .right
        font-size 20px
        color #ff65af
        font-weight 900
    .address
      background #fff
      padding 5px
  .footer
    position fixed
    left 0
    right 0
    bottom 0
    z-index  9999
    height 60px
    width 100%
    background #fff
    text-align center
    .price
      width 30%
      height 60px
      line-height 60px
      font-size 20px
      .price-number
        color #ff65af
        font-weight 900
        font-size 25px
    .right
      height 60px
      line-height 60px
      button 
        height 40px


</style>