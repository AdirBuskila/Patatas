<template>
  <section class="branch-container flex">
    <div class="products-container main-layout">
      <DashBoard />
      <RouterView />
    </div>
  </section>
</template>

<script>
import DashBoard from '../cmps/DashBoard.vue';
import ProductDetails from './ProductDetails.vue';
import AppHeader from '../cmps/AppHeader.vue';
export default {
  components: {
    DashBoard,
    ProductDetails,
    AppHeader
},
};
</script>
