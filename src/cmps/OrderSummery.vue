<template>
  <section :class="isOpen">
    <div class="title flex justify-center">
      <p>פרטי הזמנה</p>
    </div>
    <CartList :cart="cart" />
    <CartAmount />
    <div class="actions-container flex">
      <div @click="closeModal" class="action flex justify-center align-center">
        <p>חזרה לתפריט</p>
      </div>
      <div @click="goToCheckOut" class="action flex justify-center align-center">
        <p>לתשלום</p>
      </div>
    </div>
  </section>
</template>

<script>
import CartList from './cart/CartList.vue';
import CartAmount from './cart/CartAmount.vue';
export default {
  components: {
    CartList,
    CartAmount,
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    isOpen() {
      return this.$store.getters.isOpen
        ? 'order-summery open flex column align-center'
        : 'order-summery flex column align-center';
    },
  },
  methods: {
    closeModal(){
      this.$store.dispatch({type: 'setModalState', isOpen: false})
    },
    goToCheckOut(){
      this.$router.push('/payment')
      this.closeModal()
    }
  },
};
</script>

<style></style>
