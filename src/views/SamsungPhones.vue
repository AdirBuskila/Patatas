<template>
  <section class="apple-phones-container flex column align-center">
    <div
      v-if="products.length > 0"
      class="products-container flex align-center justify-center"
    >
      <ProductList :products="products" />
    </div>
  </section>
</template>
<script>
import ProductList from '../cmps/ProductList.vue';
export default {
  components: {
    ProductList,
  },
    async created() {
      await this.$store.dispatch({ type: 'setFilterBy', filterBy:{type: 'SAMSUNG'}});
    },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>
<style lang=""></style>
