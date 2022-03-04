<template>
  <div class="product-option flex column">
    <p>{{ selectTitle }}</p>
    <select @change="onChange($event)" v-model="selected">
      <option v-for="item in selectOptions" :value="item.id" :key="item.id">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    selectOptions: Array,
    selectTitle: String,
  },
  data() {
    return {
      selected: 1,
    };
  },
  created() {
    this.selected = this.selectOptions.find((i) => i.id === this.selected);
  },
  methods: {
    onChange({target}) {
      const id = target.value
      const addon = this.selectOptions.filter(option => option.id === id)[0]
      this.$emit('set-addon', addon)
    },
  },
};
</script>
<style></style>
