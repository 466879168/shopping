<template>
<!--  登录  -->
<div class="login">
  <div class="login-page">
      <span class="iconfont icon-jiantou" @click="back"></span>
      <h3>登录</h3>
  </div>
  <div class="login-body">
    <el-form>
          <el-form-item>
            <el-input v-model="username" placeholder="请输入帐号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="login">登录</el-button>
            <el-button>注册</el-button>
          </el-form-item>
        </el-form>
  </div>
</div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return {
        username: '王小明',
        password: '123456',
      }
    },
    methods: {
      login(){
        this.$store.commit('login',this.username)
        this.$router.go(-1)
      },
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.login
  width 100vw
  height 100vh
  position relative
  background #fff
  z-index 9999
  .login-page
    position absolute
    left 0
    right 0
    top 0
    height 50px
    line-height 50px
    text-align center
    color #2c3e50
    font-size 20px
    span 
      position absolute
      width 50px
      height 50px
      left 0
      right 0
      font-size 25px
  .login-body
    width 80%
    position absolute
    top 50%
    left 10%
    text-align center
    transform translateY(-50%)

</style>