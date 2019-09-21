<template>
<!--  首页中的单个商品  -->
  <div class="one-commodity">
    <div class="left">
      <img :src="imgUrl" alt="">
    </div>
    <div class="right">
      <div class="text">
        <h4 class="title">{{title}}</h4>
        <p class="content">{{content}}</p>
        <div class="price">￥<span class="price-number">{{price}}</span></div>
      </div>
      <div class="btn">
          <span class="iconfont icon-bag_icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "oneCommodity",
    props:['itemId','imgUrl', 'title', 'content', 'price', 'count'],
    data(){
      return {
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
    created() {

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
    border-right 1px solid #ccc
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