import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '@/views/CatalogView.vue'
import CartView from "@/views/CartView";

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: CatalogView
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView,
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/vuex-shop/'),
  routes
})

export default router
