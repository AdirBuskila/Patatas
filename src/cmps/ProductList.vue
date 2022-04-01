<template>
  <div class="product-list-container flex column">
    <div class="selected-type-container">
    <h1 class="animate__fadeInDown">{{ filterBy.name }}</h1>
    </div>
    <ul class="product-list">
      <li class="fade-in" v-for="product in products" :key="product.id">
        <ProductPreview :product="product" />
      </li>
    </ul>
  </div>
</template>
<script>
import ProductPreview from './ProductPreview.vue';
export default {
  components: {
    ProductPreview,
  },
  props: {
    products: Array,
    filterBy: Object,
  },
};
</script>
<style></style>
