<template>
<div class="">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in productImgs" :key="item">
        <div class="img-container flex">
        <img :src="item" />
        </div>
      </el-carousel-item>
    </el-carousel>
</div>
</template>
<script>
export default {
    props:{
        productImgs: Array
    },
    
}
</script>
<style lang="">
    
</style>