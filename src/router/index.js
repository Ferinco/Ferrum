import Home from '@/pages/home.vue';
import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: "" },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;