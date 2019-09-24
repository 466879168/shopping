<template>
  <!--  购物车  -->
  <div class="cart">
    <div class="header">
      <h3>我的购物车</h3>
    </div>
    <div class="main" v-if="cartGoods.length>0">
      <ul class="goods-wrap">
        <li v-for="item in cartGoods" :key="item.id">
          <one-commodity
            :itemId="item.id"
            :imgUrl="item.imgUrl"
            :title="item.title"
            :content="item.content"
            :price="item.price"
            :count="item.count"
          ></one-commodity>
        </li>
      </ul>
      <div class="price-wrap">
        <!-- 总价 -->
        <div class="amount">
          商品总价:
          <span>￥{{amount}}</span>
        </div>
        <!-- 红包 -->
        <div class="red-packet">
          <el-select v-model="redPacket" :placeholder="redPacketPlaceholder">
            <el-option
              v-for="item in redPackets"
              :key="item.id"
              :label="item.label"
              :value="item.money"
              :disabled="isRedPacketDisabled(item.limit)"
            ></el-option>
          </el-select>
          <span v-show="redPacket">-￥{{redPacket}}</span>
        </div>
        <!-- 商品实付 -->
        <div class="pay">
          <div>
            商品实付：
            <span>￥{{amount-redPacket}}</span>
          </div>
        </div>
        <div class="freight">
          <span>运费（实付满49免邮）:</span>
          <span class="right">
            <span class="postage" v-show="needPostage">￥{{postage}}</span>
            <span class="postage" v-show="!needPostage">免邮</span>
          </span>
        </div>
        <!-- 合计 -->
        <div class="total">
          <span>合计：</span>
          <span class="right">￥{{pay}}</span>
        </div>
      </div>
      <div class="footer">
        <div class="gopay">
           <el-button class="text" type="primary" @click="toOrder">去结算></el-button>
        </div>
      </div>
    </div>
    <div class="empty-wrap" v-else>
      您还没有添加任何产品！
    </div>
  </div>
</template>

<script>
import OneCommodity from "./OneCommodity";

export default {
  name: "Cart",
  data(){
    return {
      //所有的红包选项
      redPackets:[
        {id:1,money:10,limit:70,label:'10元红包(满70可用)'},
        {id: 2, money: 20, limit: 100, label: '20元红包(满100可用)'},
        {id: 3, money: 30, limit: 150, label: '30元红包(满150可用)'}
      ],
      //红包的金额
      redPacket:'',
      redPacketPlaceholder:'无可用红包',
      needPostage:true,
      postage:6
    }
  },
  components: {
    OneCommodity
  },
  computed: {
    //获取当前购物车中的商品
    cartGoods() {
      return this.$store.state.cartGoods;
    },
    //商品总价的计算
    amount() {
      let cartGoods = this.$store.state.cartGoods;
      //先定义一个变量等下储存总价
      let result = 0;
      cartGoods.forEach(good => {
        result += good.price * good.count;
      });
      return result;
    },
    //合计
    pay(){
      let result =this.amount-this.redPacket
      //console.log(result)
      if(result>=49){
        this.needPostage=false
      }else {
        this.needPostage=true
      }
      if(this.needPostage){
        result+=this.postage
        //console.log(result)
      }
      return result;
    }
  },
  mounted() {
    //console.log(this.cartGoods)
  },
  methods: {
    //根据金额判断下那个红包可以用
    isRedPacketDisabled(limit){
      if (this.amount <limit){
        //没有可用的红包 <30元
        if(this.amount< this.redPackets[0].limit){
          this.redPacket=''
          this.redPacketPlaceholder='无可用红包'
        }
        return true
      }else {
        //有可用的红包的时候默认选择最大的优惠
        this.redPackets.concat().reverse().some(val=>{
          if(val.limit<=this.amount){
            this.redPacket=val.money
            return true
          }
        })
        return false
      }
    },
    //跳转到订单也面
    toOrder(){
      let isLogin =this.$store.state.isLogin
      //判断当前状态是否为登录
      if(!isLogin){
        this.$router.push({
          path:'/Login'
        })
        return 
      }
      if(this.cartGoods.length>0){
        this.$router.push({
          path:'/order',
          //把当前购物车的商品和总价格传过去
          query: {
            cartGoods:this.cartGoods,
            pay:this.pay
          }
        })
      }
    }
  }
};
</script>

<style scoped lang="stylus">
.cart
  background #f5f5f5
  .header 
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 49px;
    line-height: 49px;
    text-align: center;
    color: #2c3e50;
    border-bottom: 1px solid #eeeeee;
    background: #fff;
    z-index: 666;
  .main 
    margin-top: 70px;
    .goods-wrap
      margin-top 10px;
    .price-wrap
      margin-top 10px
      padding 15px 10px
      background #fff
      text-align left 
      color #2c3e50
      margin-bottom 100px
      .amount
        height 40px
        line-height 40px
        span
          float right 
      .red-packet
        span
          float right
      .pay
        height 40px
        line-height 40px
        span  
          float right
      .freight
        height 40px
        line-height 40px
        .right
          float right 
      .total
        height 40px
        line-height 40px
        .right  
          float right 
    .footer
      text-align right
      background #fff
      position fixed
      left 0
      right 1px
      bottom 50px
      .gopay
        .text
          color #fff
  .empty-wrap
    position absolute
    height 50px
    width 100%
    top 50% 
    margin-top -25px
    color #2c3e50
    font-size 20px
    text-align center
          
</style>