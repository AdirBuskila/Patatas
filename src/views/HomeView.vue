<template>
  <section class="home-page flex column align-center">
    <div class="hero-carousel flex"></div>
    <CategoriesGrid />
  </section>
</template>

<script>
import CategoriesGrid from "../cmps/CategoriesGrid.vue";
export default {
  components:{
    CategoriesGrid
  }
};
</script>
