<template>
  <div
    v-for="dropdown in dropdowns"
    :key="dropdown.name"
    class="links-container"
  >
    <Router-Link :to="dropdown.location">
      <div class="link-container flex align-center">
        <p>{{ dropdown.name }}</p>
        <Round />
      </div>
    </Router-Link>
  </div>
</template>
<script>
import Round from './icons/Round.vue';
export default {
  components:{
    Round,
  },
  props: {
    dropdowns: Array,
  },
};
</script>
<style lang=""></style>
