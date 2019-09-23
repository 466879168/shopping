<template>
<!--  修改收货地址  -->
  <div class="modify">
    <div class="header">
      <span class="iconfont icon-jiantou" @click="back"></span>
      <h3>修改收货地址</h3>
    </div>
    <div class="main">
      <el-form :rules="rules" :label-position="'left'" label-width="80px" :model="newAddress" ref="newAdd">
        <el-form-item label="收货人">
          <el-input v-model="newAddress.name"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="newAddress.phone"></el-input>
        </el-form-item>
        <el-form-item label="所在城市">
          <el-input v-model="newAddress.city"></el-input>
        </el-form-item>
        <el-form-item label="收货地址">
          <el-input v-model="newAddress.detailAdd"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer">
      <el-form >
        <el-form-item>
          <el-button type="primary" @click="submit">保存修改</el-button>
          <el-button type="danger" @click="deleteAddress">删除收货地址</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "modifyAddress",
    data(){
      let validatePhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else if (!/^1[3-9]{1}[0-9]{9}$/.test(value)) {
          return callback(new Error('手机号不正确'));
        } else {
          callback();
        }
      };
      return {
        rules: {
          name: [
            {required: true, message: '请输入名字', trigger: 'blur'}
          ],
          phone: [
            {required: true, validator: validatePhone, trigger: 'blur'}
          ],
          city: [
            {required: true, message: '请输入所在城市', trigger: 'blur'}
          ],
          detailAdd: [
            {required: true, message: '请输入详细地址', trigger: 'blur'}
          ],
        }
      }
    },
    methods:{
      back(){
        this.$router.go(-1)
      },
      //修改后将修改内存保存在store中
      submit(){
          if (this.newAddress){
            this.$store.commit('modifyAddress',{
              index:this.index,
              value:this.newAddress
            })
            this.$router.push({
              path:'/myaddress'
            })
          }else{
            return false
          }
      },
      //点击删除收货地址后
      deleteAddress(){
        this.$store.commit('deleteAddress',this.itemIndex)
        this.$router.push({
          path:'/myaddress'
        })
      }
    },
    computed:{
      itemIndex(){
        return this.$route.query.index
      },
      newAddress(){
        return this.$store.state.address[this.itemIndex]
      }
    }
  }
</script>

<style>
  .footer .el-form{
    text-align: center;
  }
</style>

<style lang="stylus" scoped>
.modify
  .header
    position: fixed
    left 0
    right 0
    top 0
    height: 50px
    line-height 50px
    text-align center
    span
      position absolute
      left 0
      top 0
      width: 50px
      height: 50px
  .main
    margin: 70px 10px 10px
</style>