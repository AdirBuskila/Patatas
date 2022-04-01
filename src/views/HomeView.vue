<template>
  <section class="home-page flex justify-center">
    <div class="container flex column align-center">
      <div class="heading">
        <p>: בחר סניף</p>
      </div>
      <div class="branch-selector-container flex">
        <RouterLink :to="{ name: 'delivery', params: { location: '/holon' } }">
          <div class="branch-link">
            <p>חולון</p>
          </div>
        </RouterLink>
        <RouterLink to="/tel-aviv">
          <div class="branch-link">
            <p>תל אביב</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  mounted() {
    this.setDeliveryFee(0);
  },
  computed: {
    deliveryFee() {
      return this.$store.getters.deliveryFee;
    },
  },
  methods: {
    setDeliveryFee(deliveryFee) {
      this.$store.dispatch({ type: 'setDeliveryFee', deliveryFee });
    },
  },
};
</script>
