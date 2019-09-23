<template>
  <div class="myInput">
     <i class="iconfont icon-plus-minus" @click.stop="reduce"></i>
      <span>{{count1}}</span>
     <i class="iconfont icon-jia" @click.stop="add"></i>
  </div>
</template>

<script>
  export default {
    name: "myInput",
    //从每一个商品接收到当前选择的数量
    props:['count1','onlyId'],
    data(){
      return{
        
      }
    },
    created(){
      //console.log(this.onlyId)
      //console.log(this.count1)
    },
    methods:{
      //点击按钮减少商品在购物车的数量
      reduce(){
				if (this.count === 1) {
					this.$store.commit('deleteGoodsFromCart',this.onlyId)
				}else{
					this.$store.commit('reduceGoods',this.onlyId)
				}
      },
      add(){
        this.$store.commit('addGoods',this.onlyId)
      }
    }

  }
</script>

<style lang='stylus' scoped>
.myInput
  width 80px
  height 50px
  text-align center
  .icon-plus-minus,.icon-jia
    width 30px
    height 30px
    border-radius 50%
    border 1px solid #ff65af
    color #000
    font-size 12px
  .icon-plus-minus
    color pink
  .icon-jia
    color #ffffff
    background #ff65af
  span 
    font-size 14px
    margin 0 5px
</style>