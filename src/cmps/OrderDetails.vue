<template>
  <section class="order-details-container flex column align-center justify-center">
      <div class="heading flex">
      <h1>פרטי הזמנה</h1>
      </div>
      <CartList :cart="cart" />
      <CartAmount />
  </section>
</template>

<script>
import CartList from "./cart/CartList.vue"
import CartAmount from "./cart/CartAmount.vue";
export default {
    props:{
        className: String
    },
    components: { CartList, CartAmount },
    computed: {
        cart() {
            return this.$store.getters.cart;
        }
    },
}
</script>

<style>

</style>