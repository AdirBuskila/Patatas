<template>
  <div class="app">
    <AppHeader/>
    <RouterView />
  </div>
</template>

<script>
import AppHeader from '@/cmps/AppHeader.vue';

export default {
  components: {
    AppHeader,
},
  async created() {
    await this.$store.dispatch({ type: 'loadProducts' });
  },
};
</script>

<style scoped></style>
