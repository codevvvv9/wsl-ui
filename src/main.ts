import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Hello from "./components/Hello.vue";

const history = createWebHashHistory();
const router = createRouter({
  routes: [
    {
      path: "/",
      component: HelloWorld,
    },
    {
      path: "/hello",
      component: Hello,
    },
  ],
  history,
});
const app = createApp(App);
app.use(router)
app.mount("#app");
