<template>
  <section class="home-page flex column align-center">
    <h1>Home page</h1>
    <div
      v-if="products.length > 0"
      class="products-container flex align-center justify-center"
    >
      <ProductList v-if="products !== null" :products="products" />
    </div>
  </section>
</template>

<script>
import ProductList from '@/cmps/ProductList.vue';
export default {
  props: {
    ProductList,
  },
  components: { ProductList },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>
