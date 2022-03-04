<template>
        <ul class="product-list flex">
            <li
            v-for="product in products" :key="product.id"
            >
                <ProductPreview :product="product" />
            </li>
        </ul>
</template>
<script>
import ProductPreview from './ProductPreview.vue'
export default {
    components:{
        ProductPreview,
    },
    props: {
        products: Array
    }
    
}
</script>
<style>
    
</style>