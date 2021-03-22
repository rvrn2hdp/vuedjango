<template>
  <div id="app">
    <!-- img alt="Vue logo" src="./assets/logo.png" -->
    <Header/>
    <List/>
    <!--Detail></Detail-->
  </div>
</template>

<script>

import Header from './components/Header.vue'
//import HelloWorld from './components/HelloWorld.vue'
import List from './components/List.vue'
//import Detail from './components/Detail.vue'

export default {
  name: 'App',
  components: {
    Header,
    List,
    //Detail,
  }
}
</script>
