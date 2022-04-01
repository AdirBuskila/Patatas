<template>
  <div class="app-header-wrapper main-layout">
    <div class="app-header-container full flex align-center justify-center">
      <BranchInfo />
      <Router-Link to="/">
        <div class="logo-container">
          <img
            src="https://res.cloudinary.com/dubjerksn/image/upload/v1648396610/Patats/wemxftho7eyqjos5rd0b.png"
          />
        </div>
      </Router-Link>
    </div>
  </div>
</template>

<script>
import BranchInfo from './BranchInfo.vue';

export default {
  components: {
    BranchInfo,
  },
};
</script>

<style></style>
