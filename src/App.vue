<template>
  <div>
    导航 | <router-link to="/">hello1</router-link> |
    <router-link to="/hello">hello</router-link>
  </div>
  <hr />
  <router-view> </router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
