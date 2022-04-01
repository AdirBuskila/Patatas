<template>
  <div class="cart-summery-container flex column justify-center align-center">
    <div class="cart-subtotal flex space-between">
      <p><span>₪</span>{{ cartSubtotal }}</p>
      <p>:סה''כ ביניים</p>
    </div>
    <div class="cart-subtotal flex space-between">
      <p><span>₪</span>{{ deliveryFee }}</p>
      <p>:דמי משלוח</p>
    </div>
    <div class="cart-total flex space-between">
      <p><span>₪</span>{{ cartTotal }}</p>
      <p>:סה''כ</p>
    </div>
    <div class="link-wrapper">
      <Router-link to="/payment">
        <div class="purchase-btn flex">
          <p>לתשלום</p>
        </div>
      </Router-link>
    </div>
    <div @click="goBack" class="link-wrapper-back pointer">
      <div class="purchase-btn flex">
        <p>חזרה לתפריט</p>
      </div>
    </div>
  </div>
</template>

<script>
import { productService } from '../../services/product.service';
export default {
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    cartSubtotal() {
      return productService.getCartSubTotal(this.cart);
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
    deliveryFee() {
      return this.$store.getters.deliveryFee;
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style></style>
