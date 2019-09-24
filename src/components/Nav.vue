<template>
  <div class="navBar">
    <router-link tag="div" to="/home">
      <div class="iconfont icon-shouye"></div>
      <div>首页</div>
      </router-link>
    <router-link tag="div" to="/cart" class="two">
      <div class="iconfont icon-weibiaoti--"></div>
      <div>购物车</div>
      <span class="number" v-show="cartNum>0">{{cartNum}}</span>
      </router-link>
    <router-link tag="div" to="/profile">
      <div class="iconfont icon-wode"></div>
      <div>我的</div>
      </router-link>
  </div>
</template>

<script>
export default {
name:'Nav',
computed:{
  cartNum(){
    return this.$store.state.cartNum
  }
}
}
</script>

<style lang="stylus" scoped>
.navBar
  position fixed
  left 0
  right 0
  bottom 0
  height 50px
  display flex
  border-top 1px solid #999
  background: #fff;
  z-index 1
  div
    flex 1
    text-align center
    div
      margin-top 7px
      color #a1a1a1
  .two
    position relative
    .number
      position absolute
      left 50%
      top 10%
      width 20px
      height 20px
      line-height 20px
      border-radius 50%
      background #ff65af 
      font-size 10px
      color #fff
      text-align center
</style>