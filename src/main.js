import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
createApp(App)
  .use(router)
  .mount('#app');

