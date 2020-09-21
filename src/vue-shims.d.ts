// declare module "*.vue" {
//   import Vue from "vue";
//   export default Vue;
// }
// shims-vue.d.ts
declare module '*.vue' {
  import { Component } from 'vue'
  const component: Component
  export default component
}