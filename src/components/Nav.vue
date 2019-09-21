<template>
  <div class="navBar">
    <router-link tag="div" to="/home">
      <div class="iconfont icon-shouye"></div>
      <div>首页</div>
      </router-link>
    <router-link tag="div" to="cart">
      <div class="iconfont icon-weibiaoti--"></div>
      <div>购物车</div>
      </router-link>
    <router-link tag="div" to="profile">
      <div class="iconfont icon-wode"></div>
      <div>我的</div>
      </router-link>
  </div>
</template>

<script>
export default {
name:'Nav'
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
  div
    flex 1
    text-align center
    div
      margin-top 7px
      color #a1a1a1


</style>