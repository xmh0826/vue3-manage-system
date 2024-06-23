import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../views/LayoutView/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayoutView
    },
  ]
})

export default router
