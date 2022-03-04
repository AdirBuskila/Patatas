import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import ApplePhones from '../views/ApplePhones.vue'
import SamsungPhones from '../views/SamsungPhones.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/p/:id',
      name: 'product details',
      component: ProductDetails,
    },
    {
      path: '/apple-phones',
      name: 'apple phones',
      component: ApplePhones,
    },
    {
      path: '/samsung-phones',
      name: 'samsung phones',
      component: SamsungPhones,
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
