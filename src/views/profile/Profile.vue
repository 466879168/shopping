<template>
<!--  我的  -->
<div class='profile'>
<div class="login">
 <el-button type="success" @click="toLogin">登陆</el-button>
</div>
<div class="user">

</div>
</div>
</template>

<script>
  export default {
    name: "Profile",
    computed:{

    },
    methods: {
      toLogin(){
        this.$router.push({
          path:'/login'
        })
      }
    }
  }
</script>

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
</style>