<template>
  <div class="menu-bar flex full align-center">
    <div @click="setOpenSideBar" class="menu-bar-container flex pointer">
      <div class="menu-img-container flex">
        <img
          src="https://res.cloudinary.com/dubjerksn/image/upload/v1645051716/gc6dpqabpnywvyzghz0f.png"
          alt=""
        />
      </div>
      <div class="title-container flex">
        <p>תפריט מלא</p>
      </div>
    </div>
  </div>
  <SideBarNav
    :sideBarClass="sideBarClass"
    :filterBy="filterBy"
    @set-filter-by="setFilterBy"
  />
</template>

<script>
import SideBarNav from './SideBarNav.vue';
export default {
  props: {
    filterBy: Object,
  },
  components: { SideBarNav },
  data() {
    return {
      sideBarClass: 'side-bar-nav column flex',
    };
  },
  methods: {
    setOpenSideBar() {
      this.sideBarClass = 'side-bar-nav open column flex';
    },
    setFilterBy(value) {
      this.sideBarClass = 'side-bar-nav column flex';
      this.$emit('set-filter-by', value);
    },
  },
};
</script>

<style></style>
