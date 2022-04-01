<template>
    <RouterLink :to="`/holon/${product._id}`">
      <div class="product-preview flex column align-center">
          <div class="product-img-container">
            <img class="product-img" :src="product.img" />
          </div>
        <div class="product-name-container flex justify-center">
          <p class="product-name">{{ product.name }}</p>
        </div>
      </div>
    </RouterLink>
</template>
<script>
export default {
  props: {
    product: Object,
  },
};
</script>
<style>
</style>
