<template>
<!--  编辑我的收货地址  -->
<div class="myAddress">
  <div class="header">
    <span class="iconfont icon-jiantou" @click="back"></span>
    <h3>我的收货地址</h3>
  </div>
  <div class="main">
    <ul>
      <li v-for="(item,index) in allAddress" :key="index">
        <p>{{item.name}}</p>
        <p>{{item.phone}}</p>
        <p>{{item.city+item.detailAdd}}</p>
        <el-button type="text" @click="toModifyAddress(index)">编辑</el-button>
      </li>
    </ul>
  </div>
  <div class="footer">
    <el-button type="primary" @click="toAdd">新增收货地址</el-button>
  </div>
</div>
</template>

<script>
  export default {
    name: "myAddress",
    methods:{
      back(){
        this.$router.go(-1)
      },
      toModifyAddress(index){
        this.$router.push({
          path:'/modifyaddress',
          query:{index:index}
        })
      },
      //跳转新增收货地址页面
      toAdd(){
         this.$router.push({
          path:'/addnewaddress'
         })
      }
    },
    computed: {
      allAddress(){
        return this.$store.state.address
      }
    }
  }
</script>

<style>
  .footer .el-button--primary{
    width: 100%;
  }
</style>

<style scoped>
.myAddress .header{
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;

}
.myAddress .header span{
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
}
.main{
  margin-top:60px;
}
.main li{
  border-bottom: 1px solid #eeeeee;
  position: relative;
}
.main li p{
  line-height:30px;
}
.main li .el-button{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 40px;
}
  .footer{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 70px;
    line-height: 70px;
    z-index: 9999;
    background: #fff;
    padding: 0 5px;
  }
</style>