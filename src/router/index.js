import Services from '@/components/servies/Services.vue';
import Home from '../pages/home.vue';
import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/about.vue';


const routes = [
  { path: '/', name:"Home", component: Home },
  { path: '/about', name:"About",component: ()=> import('../pages/about.vue') },
  { path: '/#services', name:"Services", component: Services },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;