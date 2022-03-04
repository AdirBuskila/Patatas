<template>
  <div v-for="option in inventory" :key="option.id">
      <ProductOptions @set-addon="emitAddon" :selectOptions="option.selectOptions" :selectTitle="option.title" />
  </div>
</template>
<script>
import ProductOptions from './ProductOptions.vue';
export default {
  components: {
    ProductOptions,
  },
  props: {
    inventory: Array,
  },
  methods:{
      emitAddon(addon){
          this.$emit('set-addon', addon)
      }
  }
};
</script>
<style lang=""></style>
