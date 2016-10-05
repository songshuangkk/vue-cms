<template lang="html">
  <div id="header">
    <div id="system-title">
      <div class="system-search">
        吊炸天的系统
      </div>
      <div class="system-search">
        <input v-if="show" transition="search-transition" type="text" name="name" value="">
        <img src="/search.svg" v-on:click="show-search"/>
      </div>
    </div>
    <ul class="Navigation__account">
      <li v-show="isLogin()">
        <div>
          <a id="sign-in-btn">Sign In</a>
        </div>
      </li>
      <li v-show="isLogin()">
        <div>
          <a id="sign-up-btn">Sign Up</a>
        </div>
      </li>
      <li v-show="isLogin()">
        <div>
          <a id="sign-out-btn">Sign Out</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activity: false
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    isLogin: function () {
      // TODO 判断用户是否已经登入
      return true
    },
    showSearch: () => {
      this.activity = true;
    }
  },
  components: {}
};
</script>

<style lang="css" scoped>


#header {
  flex-basis: 100%;
    height: 80px;
    align-self: flex-start;
    background: #3c3e42;
}

.Navigation__account {
  display: -webkit-box;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-flex: 1;
    flex: 1;
}

li > div {
  margin-left: 15px;
  margin-top: 23px;
  margin-right: 35px;
}

li {
  color: #fff;
  border: none;
  font-weight: 500;
  font-size: 16px;

}

#sign-in-btn {
  cursor: pointer;
}

#sign-out-btn {
  cursor: pointer;
  background: #60b044;
  padding: 10px 20px;
}

#sign-up-btn {
  background: #ff5c2d;
  padding: 10px 20px;
  cursor: pointer;
}

#system-title {
  margin-top: 23px;
  margin-left: 40px;
  font-size: 30px;
  float: left;
  font-family: STKaiti;
  width: 500px;
}

.system-search {
  width: 50px;
  height: 40px;
  float: left;
  display: inline;
  width: 200px;
}

.system-search > img {
  width: 50px;
  height: 50px;
}

.system-search > input {
  display: none;
}

</style>
