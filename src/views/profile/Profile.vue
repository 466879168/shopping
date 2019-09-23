<template>
<!--  我的  -->
<div class='profile'>
<div class="login" v-if="!isLogin">
 <el-button type="success" @click="toLogin">登陆</el-button>
</div>
<div class="user" v-else>
<div class="header">
  <h3>当前用户:{{username}}</h3>
</div>
<div class="main" >
   <el-button @click="toMyAddress">
     <span>我的地址</span>
     <span class="iconfont icon-jiantouarrow487"></span>
   </el-button>
</div>
<div class="footer">
    <el-button type="danger">退出登录</el-button>
</div>
</div>
</div>
</template>

<script>
  export default {
    name: "Profile",
    computed:{
      username(){
        return this.$store.state.username
      },
      isLogin(){
        return this.$store.state.isLogin
      }
    },
    methods: {
      toLogin(){
        this.$router.push({
          path:'/login'
        })
      },
      toMyAddress(){
        this.$router.push({
          path:'/myaddress'
        })
      }
    },
    mounted(){
      //console.log(this.username)
    }
  }
</script>


<style>
.profile .user .main .el-button{
  width: 100%;
  text-align: left;
  position: relative;
}
.profile .user .main .el-button .iconfont{
  position: absolute;
  right: 0;
  top: 10px;
}
</style>

<style lang="stylus" scoped>
.profile
  position relative
  overflow hidden
  height 100vh
  .login
    position absolute
    left 50%
    top 50%
    transform translate(-50%,-50%)
.user
  width 100%
  position absolute
  top 50%
  transform translateY(-50%)
  text-align center
  .header
    height 50px
    line-height 50px
    color #2c3e50
  .main
    width 100%
    margin-top 10px
    el-button
      width 100%
</style>