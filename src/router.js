import Vue from 'vue'
import Router from 'vue-router'

const Home=()=>import('./views/home/Home')
const Cart=()=>import('./views/cart/Cart')
const Profile=()=>import('./views/profile/Profile')
const Detail=()=>import("./views/home/detail")
const Order=()=>import("./views/cart/order")
const Login=()=>import("./views/login/login")
const myAddress=()=>import('./views/address/myAddress')
const modifyAddress=()=>import('./views/address/modifyAddress')
const addNewAddress=()=>import('./views/address/addNewAddress')


const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const routes=[
{
  path:'',
  redirect: "/home"
},
{
  path:'/home',
  component:Home
},
{
  path:'/cart',
  component:Cart
},
{
  path:'/profile',
  component:Profile,
},
{
  path:'/detail',
  component:Detail
},
{
  path:'/order',
  component:Order
},
{
  path:'/login',
  component:Login
},
{
  path: "/myaddress",
  component:myAddress
},
  {
    path: "/modifyaddress",
    component: modifyAddress
  },
  {
    path: "/addnewaddress",
    component: addNewAddress
  }
]

export default new Router({
  mode: 'history',
  routes
})
