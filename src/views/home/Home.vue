<template>
<!--  首页  -->
  <div class="home">
    <home-header></home-header>
    <home-main></home-main>
  </div>
</template>

<script>
    import homeHeader from './homeHeader'
    import homeMain from './homeMain'
export default {
name:'Home',
  components:{
    homeHeader,
    homeMain
  }
}
</script>

<style scoped lang='stylus'>

</style>