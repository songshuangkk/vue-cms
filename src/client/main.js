import Vue from 'vue'
import Login from './components/login.vue'
import Home from './components/home.vue'

new Vue({
  el: 'body',
  replace: false,
  template: '<Home></Home>',
  data: {},
  components: { Login, Home }
})
