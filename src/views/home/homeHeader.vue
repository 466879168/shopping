<template>
  <!--  首页头部  -->
  <div class="header">
    <h3>一小时达</h3>
    <div class="tap-menu">
      <el-tabs
        :tab-position="'top'"
        type="border-card"
        style="height: 39px;"
        v-model="goodType"
        @tab-click="changeGoodType"
      >
        <el-tab-pane label="全部" name="全部"></el-tab-pane>
        <el-tab-pane label="水果" name="水果"></el-tab-pane>
        <el-tab-pane label="蔬菜" name="蔬菜"></el-tab-pane>
        <el-tab-pane label="肉蛋" name="肉蛋"></el-tab-pane>
        <el-tab-pane label="速冻" name="速冻"></el-tab-pane>
        <el-tab-pane label="酒饮" name="酒饮"></el-tab-pane>
        <el-tab-pane label="乳品" name="乳品"></el-tab-pane>
        <el-tab-pane label="零食" name="零食"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeHeader",
  data(){
    return{
      //所有的商品分类 每个分类对应着不同的数字
      kindType:new Map([
        ['全部', 0],
        ['水果', 1],
        ['蔬菜', 2],
        ['肉蛋', 3],
        ['速冻', 4],
        ['酒饮', 5],
        ['乳品', 6],
        ['零食', 7]
      ]),
      //当前的分类商品是那个，默认是全部
      goodType:'全部'
    }
  },
methods:{
    //点击改变当前商品分类
  changeGoodType(){
    //将当前的商品分类传递给store中保存
    this.$store.state.goodCurrentType=this.kindType.get(this.goodType)
  }
}
};
</script>

<style lang="stylus" scoped>
.header
  position fixed
  left 0
  right 0
  top 0
  background: #fff;
  z-index 999
  h3
    width: 100%
    height: 45px
    text-align: center
    color: #465565
    line-height: 45px
    border-bottom: #dcdfe6

</style>