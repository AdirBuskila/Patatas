<template>

  <div
    class="addon-summery-container"
    v-for="addon in addons"
    :key="addon.name"
  >
    <div class="addon-summery ">
      <p>{{ addon.name }}</p>
      <!-- <div v-if="addon.value > 0" class="addon-summery-price">
      <p>₪{{ addon.value }}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props:{
    addons: Array
  },
};
</script>

<style></style>
