<template>
  <el-dropdown class="dropdown">
    <span class="el-dropdown-link"> טלפונים ואביזרים </span>
    <template #dropdown>
      <el-dropdown-menu class="dropdown-menu">
        <div class="links-container">
          <p>סדרת iPhone 13</p>
          <p>סדרת iPhone 12</p>
          <p>סדרת Galaxy 21</p>
          <p>סדרת Galaxy A</p>
          <Router-Link to="/apple-phones">
            <p>מכשירי Apple</p>
          </Router-Link>
          <Router-Link to="/samsung-phones">
            <p>מכשירי Samsung</p>
          </Router-Link>
          <p>מכשירי Xiaomi</p>
          <p>פתרונות טעינה</p>
          <p>כבלים ומתאמים</p>
          <p>אביזרים לרכב</p>
          <p>אביזרים וכיסויים</p>
        </div>
      </el-dropdown-menu>
    </template> </el-dropdown
  ><span class="divider">|</span>
</template>
<script>
export default {};
</script>
<style lang=""></style>
