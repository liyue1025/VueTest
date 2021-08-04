<template>
  <div>
    <h1>我是用户</h1>
    <h2>{{ userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed : {
    userId() {
      return this.$route.params.userId;
    }
  }
};
</script>

<style scoped>

</style>