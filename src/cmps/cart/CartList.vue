<template>
  <div class="cart-item-list-container flex column">
    <div
      v-for="(item, idx) in cart"
      :key="item.id"
      class="cart-item-container flex column"
    >
      <CartItemPreview :idx="idx" :item="item" />
    </div>
  </div>
</template>

<script>
import CartItemPreview from './CartItemPreview.vue';
export default {
  props: {
    cart: Array,
  },
  components: { CartItemPreview },
};
</script>

<style></style>
