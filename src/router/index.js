import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CardView from '../views/CardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/card',
    name: 'card',
    component: CardView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router