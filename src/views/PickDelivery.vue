<template>
  <section class="delivery-page">
    <div class="delivery-container flex justify-center align-center">
      <div
        @click="delivery"
        class="delivery-type pointer flex column justify-center align-center"
      >
        <div class="img-container">
          <img
            src="https://res.cloudinary.com/dubjerksn/image/upload/v1648666552/Patats/oxvvg9yj68hh1la23niw.png"
          />
        </div>
        <p>משלוח</p>
      </div>
      <div
        @click="selfPickUp"
        class="delivery-type pointer flex column justify-center align-center"
      >
        <div class="img-container">
          <img
            src="https://res.cloudinary.com/dubjerksn/image/upload/v1648666553/Patats/g0ajtcooie7taepsbkls.png"
          />
        </div>
        <p>איסוף עצמי</p>
      </div>
    </div>
    <div
      v-if="isDelivery"
      class="select-delivery-location-container column flex justify-center align-center"
    >
      <div class="container flex column justify-start align-center">
        <div class="img-container">
          <img
            src="https://res.cloudinary.com/dubjerksn/image/upload/v1648666552/Patats/oxvvg9yj68hh1la23niw.png"
          />
        </div>
        <div class="title">
          <p>:בחר אזור משלוח</p>
        </div>
        <div class="select-container">
          <select v-model="selected">
            <option
              v-for="option in options"
              :key="option.text"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
        </div>
        <div @click="setDelivery" class="btn-container">
          <button>
            <p>הבא</p>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    location: String,
  },
  data() {
    return {
      isDelivery: false,
      selected: '',
      options: [
        { text: 'בת ים', value: { fee: 20, location: 'בת ים' } },
        { text: 'חולון', value: { fee: 17, location: 'חולון' } },
        { text: 'אזור', value: { fee: 20, location: 'אזור' } },
      ],
    };
  },
  methods: {
    selfPickUp() {
      this.$store.dispatch({ type: 'setDeliveryFee', deliveryFee: 0 });
      this.$store.dispatch({
        type: 'setDeliveryLocation',
        deliveryLocation: null,
      });
      this.$router.push(this.location);
    },
    delivery() {
      this.isDelivery = true;
    },
    setDelivery() {
      if (this.selected === '') return;
      this.$store.dispatch({
        type: 'setDeliveryFee',
        deliveryFee: this.selected.fee,
      });
      this.$store.dispatch({
        type: 'setDeliveryLocation',
        deliveryLocation: this.selected.location,
      });
      this.$router.push(this.location);
    },
  },
};
</script>

<style></style>
