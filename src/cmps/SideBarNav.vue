<template>
  <div :class="sideBarClass">
    <div
      v-for="option in navArray"
      :key="option.value"
      :class="optionClass(option.value)"
      @click="setFilterBy(option)"
    >
      <p>{{ option.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sideBarClass: String,
    filterBy: Object,
  },
  data() {
    return {
      navArray: [
        { name: 'פאטאטאס', value: 'main' },
        { name: 'מרקים', value: 'soup' },
        { name: 'ספיישלים', value: 'special' },
        { name: 'קינוחים', value: 'desert' },
        { name: 'שתייה קלה', value: 'drink' },
      ],
    };
  },
  methods: {
    optionClass(value) {
      return value === this.filterBy.value
        ? 'menu-option flex active'
        : 'menu-option flex';
    },
    setFilterBy(value) {
      this.$emit('set-filter-by', value);
    },
  },
};
</script>

<style></style>
