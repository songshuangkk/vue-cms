<template lang="html">
  <div id="item-table-div">
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <td>
            接口名:
          </td>
          <td colspan="2">
          </td>
          <td>
            维护者
          </td>
          <td>

          </td>
        </tr>
        <tr>
          <td>
            参数
          </td>
          <td>
            类型
          </td>
          <td>
            是否必须
          </td>
          <td>
            备注
          </td>
          <td>
            范例
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Item',
  data() {
    return {
      items: [111, 222, 333, 444, 555]
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css" scoped>
#item-table-div {
  margin-top: 30px;
}
</style>
