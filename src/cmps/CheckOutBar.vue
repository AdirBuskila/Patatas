<template>
  <div @click="openModal" class="check-out-bar flex align-center space-between">
    <div class="cart-total">
      <p>₪ {{ cartTotal }}</p>
    </div>
    <div class="container flex align-center">
      <div class="title-container">
        <p>לחץ לתשלום</p>
      </div>
      <div class="img-container">
        <img
          src="https://res.cloudinary.com/dubjerksn/image/upload/v1648498285/Patats/ozshoygfxkbltyo37qwp.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
  },
  methods: {
    openModal() {
      this.$store.dispatch({ type: 'setModalState', isOpen: true });
    },
  },
};
</script>

<style></style>
