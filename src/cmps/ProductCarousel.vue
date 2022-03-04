<template>
    <el-carousel trigger="click" height="100px">
      <el-carousel-item v-for="item in productImgs" :key="item">
        <!-- <h3 class="small">{{ item }}</h3> -->
        <div class="img-container flex">
        <img :src="item" />
        </div>
      </el-carousel-item>
    </el-carousel>
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