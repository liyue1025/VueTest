<template>
  <div id="app">
    <router-link tag="button" to="/home">首页</router-link>
    <router-link tag="button" to="/about">关于</router-link>
    <router-link tag="button" :to="'/user/' + userid">用户</router-link>
    <router-view></router-view>

    <!-- 通过代码跳转路由 -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userid : 'zhangsan'
    }
  },
  // 通过代码跳转路由
  methods: {
    homeClick() {
      this.$router.push("/home");
    },
    aboutClick() {
      this.$router.push("/about");
    },
  },
};
</script>

<style>
.router-link-active {
  color: red;
}
</style>
