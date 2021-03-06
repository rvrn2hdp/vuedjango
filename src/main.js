import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import { createRouter } from 'vue-router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Detail from './components/Detail.vue'
import List from './components/List.vue'
import ListCategory from './components/ListCategory.vue'
import ListTypes from './components/ListTypes.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: List },
  { path: '/detail/:id', component: Detail, name: 'detail' },
  { path: '/category/:id/elements', component: ListCategory, name: 'list-category' },
  { path: '/types/:id/elements', component: ListTypes, name: 'list-types' },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
