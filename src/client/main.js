import Vue from 'vue'
import Login from './components/login.vue'

new Vue({
  el: 'body',
  replace: false,
  template: '<Login></Login>',
  data: {},
  components: { Login }
})
