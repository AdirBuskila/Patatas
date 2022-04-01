<template>
  <section class="payment-page main-layout">
    <div class="page-container flex">
    <OrderDetails />
    <PaymentForm />
    </div>
  </section>
</template>

<script>
import OrderDetails from "../cmps/OrderDetails.vue";
import PaymentForm from "../cmps/PaymentForm.vue";
export default {
    components: { OrderDetails, PaymentForm }
}
</script>

<style>

</style>