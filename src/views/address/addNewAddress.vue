<template>
<!--  新增收货地址  -->
  <div class="add">
    <div class="header">
      <span class="iconfont icon-jiantou" @click="back"></span>
      <h3>新增收货地址</h3>
    </div>
    <div class="main">
      <el-form :model="newAddForm" :rules="rules"  :label-position="'left'" label-width="80px"  ref="newAddForm">
        <el-form-item label="收货人">
          <el-input v-model="newAddForm.name"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model.number="newAddForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="所在城市">
          <el-input v-model="newAddForm.city"></el-input>
        </el-form-item>
        <el-form-item label="收货地址">
          <el-input v-model="newAddForm.detailAdd"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer">
      <el-form>
        <el-form-item>
          <el-button type="primary" @click="submit">保存修改</el-button>
          <el-button type="danger" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "addNewAddress",
    data() {
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
        newAddForm: {
          name: '',
          phone: '',
          city: '',
          detailAdd: ''
        },
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
      submit(){
          this.$store.commit('addNewAddress',this.newAddForm)
          this.$router.push({
            path:'/myaddress'
          })
      },
      reset(){
        this.newAddForm.name=''
        this.newAddForm.phone=''
        this.newAddForm.city=''
        this.newAddForm.detailAdd=''
      }
    }
  }
</script>
<style>
 .add .footer .el-form-item__content{
   text-align: center;
 }
</style>


<style scoped>
.add .header{
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  line-height: 50px;
  text-align: center;
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.add .header span{
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
}
.add .main{
    margin-top: 60px;
  padding: 0 5px;
  }
</style>