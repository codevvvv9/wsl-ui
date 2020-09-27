<template>
  <router-view> </router-view>
</template>

<script>
import { provide, ref } from 'vue';
export default {
  name: "App",
  setup() {
    const asideVisible = ref(false)
    provide('asideVisible', asideVisible) //相当于set
  }
};
</script>
