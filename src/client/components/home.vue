<template lang="html">
  <div>
    <header-top></header-top>
    <div>
      <item  :interface_list=items ></item>
    </div>
    <pagenation></pagenation>
  </div>
</template>

<script>
import Header from './header.vue'
import Item from './item.vue'
import PageNation from './pagenation.vue'
import { input } from 'vue-strap'
import Request from '../util/request'


export default {
  name: 'Home',
  data() {
    return {
      items: ''
    };
  },
  computed: {},
  ready() {
    var self = this;
    Request.doGet('/home/list.json', (data) => {
      this.$set('items', data);
    });
  },
  attached() {},
  methods: {},
  components: {
    headerTop: Header,
    bsInput: input,
    item: Item,
    pagenation: PageNation
  }
};
</script>

<style lang="css">
body {
  margin: 0;
  font-family: Lato,sans-serif;
  background: #f5f5f1;
  color: #7f8c90;
  line-height: 1.6em;
  font-size: 16px;
}
</style>
