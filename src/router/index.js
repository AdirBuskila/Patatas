import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import ApplePhones from '../views/ApplePhones.vue'
import SamsungPhones from '../views/SamsungPhones.vue'
import XiaomiPhones from '../views/XiaomiPhones.vue'
import GamingProducts from '../views/GamingProducts.vue'
import ElectronicsProducts from '../views/ElectronicsProducts.vue'
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
      path: '/apple-phones/:filterPhoneBy',
      name: 'filtered apple phones',
      component: ApplePhones,
    },
    {
      path: '/samsung-phones',
      name: 'samsung phones',
      component: SamsungPhones,
    },
    {
      path: '/samsung-phones/:filterPhoneBy',
      name: 'filtered samsung phones',
      component: SamsungPhones,
    },
    {
      path: '/xiaomi-phones',
      name: 'xiaomi phones',
      component: XiaomiPhones,
    },
    {
      path: '/xiaomi-phones/:filterPhoneBy',
      name: 'filtered xiaomi phones',
      component: XiaomiPhones,
    },
    {
      path: '/electronics',
      name: 'electronics products',
      component: ElectronicsProducts,
    },
    {
      path: '/electronics/:filterPhoneBy',
      name: 'filtered electronics products',
      component: ElectronicsProducts,
    },
    {
      path: '/gaming',
      name: 'gaming products',
      component: GamingProducts,
    },
    {
      path: '/gaming/:filterPhoneBy',
      name: 'filtered gaming products',
      component: GamingProducts,
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
