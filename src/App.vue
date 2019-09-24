<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  
  <nav-bar></nav-bar>
  </div>
</template>

<script>
import navBar from './components/Nav'
export default {
  name:'App',
  components:{
    navBar
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
