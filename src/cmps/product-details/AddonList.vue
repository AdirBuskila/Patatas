<template>
  <section class="addon-list flex">
    <div
      v-for="addon in addons"
      :key="addon.name"
      class="addon-preview-container"
    >
      <AddonPreview @set-addon="emitAddon" :addon="addon" />
    </div>
  </section>
</template>

<script>
import AddonPreview from '../product-details/AddonPreview.vue';
export default {
  props: {
    addons: Array,
  },
  components: {
    AddonPreview,
  },
  methods: {
    emitAddon(addon) {
      this.$emit('set-addon', addon);
    },
  },
};
</script>

<style></style>
