<template>
  <section class="samsung-phones-container flex column align-center">
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
    const { filterPhoneBy } = this.$route.params;
    if (filterPhoneBy)
      await this.$store.dispatch({
        type: 'setFilterBy',
        filterBy: { type: filterPhoneBy },
      });
    else {
      await this.$store.dispatch({
        type: 'setFilterBy',
        filterBy: { type: 'SAMSUNG' },
      });
    }
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    async filterList() {
      const { filterPhoneBy } = this.$route.params;
      await this.$store.dispatch({
        type: 'setFilterBy',
        filterBy: { type: filterPhoneBy },
      });
    },
  },
  watch: {
    '$route.path'() {
      this.filterList();
    },
  },
};
</script>
<style lang=""></style>
