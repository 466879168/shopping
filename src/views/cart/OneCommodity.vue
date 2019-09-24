<template>
<!--  购物车中的一个个小商品  -->
  <div  class="one-commodity" >
    <div class="left">
      <img v-bind:src="imgUrl" alt="">
    </div>
    <div class="right">
      <div class="text">
        <h4 class="title">{{title}}</h4>
        <p class="content">{{content}}</p>
        <div class="price">￥<span class="price-number">{{price}}</span></div>
      </div>
      <div class="btn">
					<my-input :count1="counter" :onlyId="itemId" v-show="countSize >0"></my-input>
      </div>
    </div>
  </div>
</template>

<script>
	import myInput from '../../components/myInput'
  export default {
    name: "OneCommodity",
    props: ['itemId','imgUrl', 'title', 'content', 'price', 'count'],
		components:{
			myInput
		},
    data(){
      return {
        dialogVisible:false,
        oneCommodity: {
          id: this.itemId,
          imgUrl: this.imgUrl,
          title: this.title,
          content: this.content,
          price: this.price,
          count: this.count,
          isInCart: false,
        }
      }
    },
    mounted() {

    },
		computed:{
			//计算下当前的count是多少，然后传给子组件
			counter(){
				let that=this
				let goodsCart=this.$store.state.cartGoods
				let result =0
				goodsCart.some(good=>{
					if (good.id === that.itemId) {
						result = good.count
					}
				})
				return result
			},
			countSize(){
				//当前商品的id
				let id =this.oneCommodity.id
				let num
				//
				this.$store.state.cartGoods.some((val)=>{
					if (val.id === id) {
						num=val.count
					}
				})
				if (num>0) {
					return true
				}else{
					return false
				}
			}
		},
		methods:{
		confirmDelete(){
      this.dialogVisible=false
      this.$store.commit('deleteGoodsFromCart',this.itemId)
    }
		}
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/css/variable.styl'
.one-commodity
  width: 100%
  height: 130px
  border-bottom 1px solid #e4e7ed
  color #2c3e50
  div
    float: left
    box-sizing border-box
  .left
    width: 40%
    height: 100%
    text-align center
    img
      width: 60%
      height: 70%
      transform translateY(15%)
  .right
    padding-left 10px
    width: 60%
    height: 100%
    position: relative
    .text
      text-align left
      margin 15px 0 0 10px
      line-height:30px
      width: 100%
      .title
        font-size:20px
      .content
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .price
        .price-number
          color: $mainColor
          font-weight:600
    .btn
      width: 70px
      height: 50px
      position absolute
      right:5px
      bottom 5px
      font-size 30px
      text-align center
      .iconfont
        position absolute
        left 50%
        transform translateX(-50%)
        width: 50px
        height: 50px
        border-radius 50%
        background $mainColor
        margin auto 0
        line-height:50px
        font-size 30px
        color: #fff
</style>