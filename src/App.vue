<template>
  <div id="app">
    <!-- img alt="Vue logo" src="./assets/logo.png" -->
    <Header />
    <div class="container">
      
      <div class="row">
        <div class="col-md-4">
          <Categories />
          <br>
          <Types />
        </div>
        <div class="col-md-8">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
//import HelloWorld from './components/HelloWorld.vue'
import Categories from "./components/Categories.vue";
import Types from "./components/Types.vue";

export default {
  name: "App",
  components: {
    Header,
    Categories,
    Types,
  },
};
</script>
