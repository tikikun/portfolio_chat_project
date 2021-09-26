import { createApp } from 'vue'
//import global from "@/global";
import App from './App.vue'
import router from './router'
import './index.css'



createApp(App).use(router).mount('#app')
