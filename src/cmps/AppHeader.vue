<template>
  <div class="app-header-container full">
    <div class="app-header-wrapper main-layout">
      <section class="app-header flex space-between align-center">
        <RouterLink to="/"><h3 class="logo">Phone for you</h3></RouterLink>
        <nav>
          <RouterLink to="/">Home</RouterLink> |
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </section>
      <div class="dropdowns-container flex">
        <DropDowns />
      </div>
    </div>
  </div>
</template>

<script>
import DropDowns from "./DropDowns.vue";
export default { components: { DropDowns } };
</script>

<style>
el-dropdown-menu {
  widows: 800px;
}
</style>
