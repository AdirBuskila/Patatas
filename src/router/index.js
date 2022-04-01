import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import HolonBranch from '../views/HolonBranch.vue'
import TelAvivBranch from '../views/TelAvivBranch.vue'
import PaymentPage from '../views/PaymentPage.vue'
import PickDelivery from '../views/PickDelivery.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/d',
      name: 'delivery',
      component: PickDelivery,
      props: true
    },
    {
      path: '/tel-aviv',
      name: 'tel aviv',
      component: TelAvivBranch
    },
    {
      path: '/holon',
      name: 'holon',
      component: HolonBranch,
      children: [
        {
          path: ':id',
          name: 'product details',
          component: ProductDetails,
        }
      ]
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentPage
    },
  ]
})

export default router
