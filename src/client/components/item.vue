<template lang="html">
  <div class="item-table-div" v-for="interface_item in interface_list"
  track-by="$index">
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <td>
            接口名:
          </td>
          <td colspan="2">
            {{ interface_item.interfaceName }}
          </td>
          <td>
            维护者
          </td>
          <td>
            {{ interface_item.creator }}
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
        <tr v-for="item in interface_item.params">
          <td>
            {{ item.paramName }}
          </td>
          <td>
            {{ item.paramType }}
          </td>
          <td>
            {{ item.paramIsNeed }}
          </td>
          <td>
            {{ item.paramMemo }}
          </td>
          <td>
            {{ item.paramExample }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['interface_list'],
  data() {
    return {
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
.item-table-div {
  margin-top: 30px;
  margin-left: 10%;
  width: 80%;
}
</style>
