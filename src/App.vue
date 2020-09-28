<template>
  <router-view> </router-view>
</template>

<script>
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    console.log("setup -> width", width)
    const asideVisible = ref(width <= 500 ? false : true);
    provide("asideVisible", asideVisible); //相当于set
  },
};
</script>
