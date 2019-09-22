<template>
  <!-- 商品详情页 -->
  <div class="detail">
    <h3>
      <span class="iconfont icon-jiantou" @click="back"></span>
      商品详情
    </h3>
    <div class="main">
      <div class="img-wrap">
        <img :src="goods.imgUrl" alt="">
      </div>
      <div class="text">
        <div class="title">{{goods.title}}</div>
        <div class="content">{{goods.content}}</div>
        <div class="price">￥<span class="price-number">{{goods.price}}</span></div>
      </div>
      <div class="description" v-for="item in 30" :key="item">
        这是一个{{goods.title}}的介绍
      </div>
    </div>
    <div class="footer">
      <router-link to="/cart" tag="div" class="left iconfont icon-changyongtubiao-mianxing-"></router-link>
      <div class="right" @click="addGoodsToCart">加入购物车</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data(){
    return {
    }
  },
  computed: {
  goods(){
    return this.$route.query
  }
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    addGoodsToCart(){
      let inCart =this.goods.isInCart
      if (inCart === true){
        this.$store.commit('addGoods',this.goods.id)
      }else{
        console.log(66666)
        this.$store.commit('addGoodsToCart',this.goods)
      }
    }
  },
  mounted(){
    //console.log(this.goods)
    //console.log(this.goods);
  }
};
</script>

<style lang='stylus' scoped>
.detail 
  h3 
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    color: #2c3e50;
    border-bottom: 1px solid #eeeeee;
    position fixed
    left 0
    right 0
    top 0
    background: #fff;
    z-index 999
    span
      position absolute
      left 0
      top 0
      width 50px
      height 50px
      font-size 16px
      color #551a8b
  .main
    border-bottom 1px solid #eeeeee
    margin-bottom 70px
    margin-top 50px
    .img-wrap
      text-align center
    .text
      text-align center
      line-height 40px
      .title
        color #2c3e50
        font-weight 700
        font-size 16px
      .content
        color #2c3e50
      .price
        color #2c3e50
        .price-number
          color: #ff65af
    .description
      text-align center
  .footer
    position fixed
    left:0
    right:0
    bottom 0
    width: 100%
    height: 60px
    line-height:60px
    z-index 9999
    .left
      width: 30%
      height: 60px
      background: #fff
      color: #606266
      font-size 30px
      text-align center
      float left
    .right
      width: 70%
      height: 60px
      background: #ff65af
      float right
      color #fffffa
      text-align center
      font-size 20px
</style>