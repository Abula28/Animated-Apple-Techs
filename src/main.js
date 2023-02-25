import { MotionPlugin } from '@vueuse/motion';
import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

import router from "./router";

createApp(App).use(router).use(MotionPlugin).mount("#app");
