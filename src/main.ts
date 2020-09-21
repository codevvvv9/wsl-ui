import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory,  RouterHistory} from "vue-router";

const app = createApp(App)

app.mount('#app')
