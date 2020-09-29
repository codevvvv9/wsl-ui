import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";

const history = createWebHashHistory();
export const router = createRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children: [{path: "switch", component: SwitchDemo}],
    },
  ],
  history,
});

router.afterEach(() => {
  console.log('路由切换了');
  
})