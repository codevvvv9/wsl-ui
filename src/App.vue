<template>
  <router-view> </router-view>
</template>

<script>
import { provide, ref } from "vue";
import { router } from "./router";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    console.log("setup -> width", width)
    const asideVisible = ref(width <= 500 ? false : true);
    provide("asideVisible", asideVisible); //相当于set
    router.afterEach(() => {
      if (width <= 500) {
        asideVisible.value = false
      }
    })
  },
};
</script>
