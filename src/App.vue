<template>
  <div id="app">
    <router-view></router-view>
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
