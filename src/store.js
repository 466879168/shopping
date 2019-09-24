import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		//是否登录默认为false
		isLogin:false,
		//没有登陆状态，用户名为空
		username:'',
		//默认存储的地址
		address:[
      {
        name: 'dylan',
        phone: 111111111111,
        city: '郑州',
        detailAdd: '管城自治区第三中学'
      },
      {
        name: 'luna',
        phone: 2222222222,
        city: '郑州',
        detailAdd: '中原区五一公园'
      },
    ],
    //商品当前的类型是那个
    goodCurrentType:0,
    //当前购物车的数量
    cartNum:0,
    //当前添加到购物车中的商品有哪些
    cartGoods:[],
    goods:[
      {"id":1, "kind": 1, "img": "http://ww1.sinaimg.cn/large/00611hkHly1g743edzmuhj305k05kt9r.jpg", "title": "这是水果1", "content": "这是水果介绍", "price": 18 },
      {"id":2, "kind": 1, "img": "http://ww1.sinaimg.cn/large/00611hkHly1g743ee0x6zj305k05kwfv.jpg", "title": "这是水果2", "content": "这是水果介绍", "price": 20 },
      {"id":3, "kind": 2, "img": "http://ww1.sinaimg.cn/large/00611hkHly1g743ee1lq5j305k05kta8.jpg", "title": "这是蔬菜1", "content": "这是蔬菜介绍", "price": 20 },
      {"id":4, "kind": 2, "img": "http://ww1.sinaimg.cn/large/00611hkHly1g743ee1w86j305k05k768.jpg", "title": "这是蔬菜2", "content": "这是蔬菜介绍", "price": 30 },
      {"id":5, "kind": 3, "img": "http://ww1.sinaimg.cn/large/00611hkHly1g743ee0m2kj305k05k758.jpg", "title": "这是肉蛋1", "content": "这是肉蛋介绍", "price": 10 },
      {"id":6, "kind": 3, "img": "http://ww1.sinaimg.cn/large/00611hkHly1g743ee1uonj305k05k75v.jpg", "title": "这是肉蛋2", "content": "这是肉蛋介绍", "price": 15 },
      {"id":7, "kind": 4, "img": "http://ww1.sinaimg.cn/large/00611hkHly1g743ee1uonj305k05k75v.jpg", "title": "这是速冻1", "content": "这是速冻介绍1111111111111111111111111111164864646", "price": 50 },
      {"id":8, "kind": 4, "img": "http://ww1.sinaimg.cn/large/00611hkHly1g743ee75rjj305k05ktac.jpg", "title": "这是速冻2", "content": "这是速冻介绍", "price": 60 },
      {"id":9, "kind": 5, "img": "http://ww1.sinaimg.cn/large/00611hkHly1g743c8jy48j305k05kgmg.jpg", "title": "这是酒饮1", "content": "这是酒饮介绍111111111111111111111111111112163545646", "price": 100 },
      {"id":10, "kind": 5, "img": "http://ww1.sinaimg.cn/large/00611hkHly1g743d4e6n7j305k05kq4p.jpg", "title": "这是酒饮2", "content": "这是酒饮介绍", "price": 70 },
      {"id":11, "kind": 6, "img": "http://ww1.sinaimg.cn/large/00611hkHly1g743ee2x81j305k05kjt9.jpg", "title": "这是乳品1", "content": "这是乳品介绍", "price": 55 },
      {"id":12, "kind": 6, "img": "http://ww1.sinaimg.cn/large/00611hkHly1g743ee7kj4j305k05kmy5.jpg", "title": "这是乳品2", "content": "这是乳品介绍", "price": 33 },
      {"id":13, "kind": 7, "img": "http://ww1.sinaimg.cn/large/00611hkHly1g743dswt7pj305k05kjsw.jpg", "title": "这是零食1", "content": "这是零食介绍", "price": 5 },
      {"id":14, "kind": 7, "img": "http://ww1.sinaimg.cn/large/00611hkHly1g743dswt7pj305k05kjsw.jpg", "title": "这是零食2", "content": "这是零食介绍", "price": 15 }
    ]
  },
  mutations: {
		//增加到购物车  item是保存着这个商品信息的对象
		addGoodsToCart(state,item){
			//当前对象是否在购物车里
			item.isInCart=true
			//当前商品的count++
			item.count++
			//把这个对象保存在购物车数组中
			state.cartGoods.push(item)
			//console.log(state.cartGoods)
			//购物车数量+1
			state.cartNum++
		},
		//id是当前商品的唯一ID 记录下是那个商品在操作
    addGoods(state,itemId){
      state.cartNum++
			//当点击触发时判断下当前添加到购物车里的商品 并且让这个商品的count++
      state.cartGoods.some(val=>{
				if (val.id === itemId) {
					val.count++
					return true
				}
			})
    },
		//当点击触发时，当前购物车的总数量减1
		reduceGoods(state,itemId){
			state.cartNum--
			//让这个商品中的count--
			state.cartGoods.some(val=>{
				if (val.id === itemId) {
					val.count--
					return true
				}
			})
		},
		//当这个商品的count为1的时候 判断下继续减少就从购物车里删除
		deleteGoodsFromCart(state,itemId){
			state.cartNum--
			//参数分别是 当前项  当前项索引 当前遍历的数组对象
			state.cartGoods.some((val,index,goods)=>{
				if (val.id === itemId) {
					val.isInCart=false
					val.count--
					goods.splice(index,1)
					return true;
				}
			})
	},
    //登录
	login(state,username){
		state.username = username
		state.isLogin=true
	},
    //退出
  exit(state){
		state.isLogin=false
    },
    //修改地址后把修改后的值保存
    modifyAddress(state,item){
      state.address[item.index]=item.value
    },
    //新增地址
  addNewAddress(state,newAdd){
    state.address.push(newAdd)
  },
    //从index位置删除一个地址
  deleteAddress(state,index){
		state.address.splice(index,1)
    }
}
})
