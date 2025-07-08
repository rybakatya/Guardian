import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MetView from '../views/MetPage.vue'
import FrontlineView from '../views/FrontlinePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/frontline',
      name: 'frontline',
      component: FrontlineView,
    },
    {
      path: '/met',
      name: 'met',
      component: MetView,
    },
  ],
})

export default router
