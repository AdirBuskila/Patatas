<template>
    <RouterLink :to="`/p/${product._id}`">
    <div class="product-preview flex column align-center">
        <div class="wrap"></div>
      <div class="product-img-container">
        <img class="product-img" :src="product.img" />
      </div>
      <div class="product-brand-img-container">
        <img class="product-brand" :src="productBrand" />
      </div>
      <div class="product-name-container flex justify-center">
      <p class="product-name">{{ product.name }}</p>
      </div>
      <p class="product-price flex"><span>₪</span>{{ productPrice }}</p>
    </div>
    </RouterLink>

</template>
<script>
import { productService } from '../services/product.service';
import { utilService } from '../services/util.service';

export default {
  props: {
    product: Object,
  },
  computed: {
    productBrand() {
      return productService.getProductBrandImg(this.product.brand);
    },
      productPrice(){
      return utilService.numberWithCommas(this.product.price)
    }
  },
};
</script>
<style></style>
