<template>
  <el-dropdown class="dropdown">
    <span class="el-dropdown-link"> טלפונים ואביזרים </span>
    <template #dropdown>
      <el-dropdown-menu class="dropdown-menu">
        <DropDownsList :dropdowns="dropdowns" />
        <!-- <div class="links-container">
          <p>סדרת iPhone 13</p>
          <p>סדרת iPhone 12</p>
          <p>סדרת Galaxy 21</p>
          <p>סדרת Galaxy A</p>
          <Router-Link to="/apple-phones">
            <div class="link-container flex align-center">
              <p>מכשירי Apple</p>
              <Round />
            </div>
          </Router-Link>
          <Router-Link to="/samsung-phones">
            <p>מכשירי Samsung</p>
          </Router-Link>
          <p>מכשירי Xiaomi</p>
          <p>פתרונות טעינה</p>
          <p>כבלים ומתאמים</p>
          <p>אביזרים לרכב</p>
          <p>אביזרים וכיסויים<p>/
        </div> -->
      </el-dropdown-menu>
    </template> </el-dropdown
  ><span class="divider">|</span>
</template>
<script>
import DropDownsList from './DropDownsList.vue';
export default {
  data() {
    return {
      dropdowns: [
        {name:'סדרת iPhone 13',location:'/apple-phones/IPHONE-13'},
        {name:'סדרת iPhone 12',location:'/apple-phones/IPHONE-12'},
        {name:'סדרת Galaxy 21',location:'/'},
        {name:'סדרת Galaxy A',location:'/'},
        {name:'מכשירי Samsung',location:'/samsung-phones'},
        {name:'מכשירי Apple',location:'/apple-phones'},
        {name:'מכשירי Xiaomi',location:'/'},
        {name:'פתרונות טעינה',location:'/'},
        {name:'כבלים ומתאמים',location:'/'},
        {name:'אביזרים לרכב',location:'/'},
        {name:'אביזרים וכיסויים',location:'/'},
        ]
    }
  },
  components: {
    DropDownsList,
  },
};
</script>
<style lang=""></style>
