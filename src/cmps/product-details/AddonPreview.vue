<template>
  <div @click="onSetAddon(addon)" :class="addonClass">
    <div v-if="addon.value === 0" class="regular">
      <p>{{ addon.name }}</p>
    </div>
    <div v-else class="extra flex">
      <p class="addon-name">{{ addon.name }}</p>
      <div class="price">
        <p>₪{{ addon.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { productService } from '../../services/product.service';
export default {
  props: {
    addon: Object,
  },
  methods: {
    onSetAddon(addon) {
      this.$emit('set-addon', addon);

    },
  },
  computed: {
    addonClass() {
        return productService.getAddonClass(this.$store.getters.productAddons, this.addon)
    },
  },
};
</script>

<style></style>
