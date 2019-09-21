<template>
  <!--  首页主体  -->
  <div class="main">
    <ul class="goods">
      <li v-for="item in goods" class="one-com" v-show="isCurrent(item.kind)" :key="item.id">
        <one-commodity
            :itemId="item.id"
            :imgUrl="item.img"
            :title="item.title"
            :content="item.content"
            :price="item.price"
            :count="0"
        ></one-commodity>
      </li>
    </ul>
    <div class="no-more">
      <p>没有更多商品啦，敬请期待！</p>
    </div>
  </div>
</template>

<script>
  import oneCommodity from './oneCommodity'
  export default {
    name: "homeMain",
    components: {
      oneCommodity
    },
    data() {
      return {
        goods: this.$store.state.goods
      }
    },
    mounted() {
      //测试数据拿过来没有  从store中
      // console.log(this.goods);
    },
    methods:{
      //计算下那些分类的水果需要显示
      //切换到当前分类的时候 当前分类的kind 商品显示 否则不显示
      isCurrent (num) {
        let currentKind = this.$store.state.goodCurrentType
        //如果是0 代表是全部分类 就所有商品都显示
        if(currentKind === 0){
          return true
        }else{
          return num === currentKind
        }
      }
    },
    computed:{

    }
  }
</script>

<style lang="stylus" scoped>
.main
  width: 100%
  overflow-x hidden
  margin-top 85px
  z-index 999
  background: #fff;
  .goods
    width: 100%
    li
      width: 100%
      height: 130px
</style>
