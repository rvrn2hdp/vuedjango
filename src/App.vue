<template>
  <div id="app">
    <!-- img alt="Vue logo" src="./assets/logo.png" -->
    <Header/>
    <!--List/-->
    <!--Detail></Detail-->
    <router-link to="/">List</router-link>
    <router-link to="/detail">Detail</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>
