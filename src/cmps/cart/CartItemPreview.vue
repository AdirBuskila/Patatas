<template>
  <hr />
  <div class="item-preview flex row-reverse">
    <div class="item-actions flex">
      <CirclePlus class="pointer" />
      <Edit class="pointer" />
    </div>
    <div class="item-price flex">
      <p>₪{{ productPrice }}</p>
    </div>
    <div class="item-name">
      <p>{{ item.name }}</p>
      <div v-if="item.addons.length > 0" class="addons-container">
        <p>תוספות:</p>
        <ProductSummery :addons="item.addons" />
      </div>
    </div>
    <div class="cart-item-img">
      <img :src="item.img" alt="" />
    </div>
    <div class="close-icon-container flex">
      <CircleClose class="pointer" @click="remove(idx)" color="red" />
    </div>
  </div>
</template>

<script>
import { CircleClose, Edit, CirclePlus } from '@element-plus/icons-vue';
import { productService } from '../../services/product.service';
import ProductSummery from '../product-details/ProductSummery.vue';
export default {
  props: {
    item: Object,
    idx: Number,
  },
  components: {
    CircleClose,
    Edit,
    CirclePlus,
    ProductSummery,
  },
  data() {
    return {
      addonsPrice: 0,
    };
  },
  methods: {
    async remove(idx) {
      await this.$store.dispatch({ type: 'removeFromCart', idx });
    },
  },
  computed: {
    productPrice() {
      return productService.getTotalPrice(this.item);
    },
  },
};
</script>

<style></style>
