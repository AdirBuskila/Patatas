<template>
  <section v-if="product !== null" class="product-details flex align-center">
    <div class="right flex column">
      <div class="img-container flex">
        <img :src="product.img" />
      </div>
      <div class="brand-img-container flex">
        <img :src="productBrand" />
      </div>
      <div class="carousel-container">
        <ProductCarousel :productImgs="product.carousel" />
      </div>
    </div>
    <div class="left flex column">
      <div class="description-container flex column">
        <p class="product-name">{{ product.name }}</p>
        <p class="product-description">{{ product.description }}</p>
      </div>
      <hr class="main" />
      <div class="options-container">
        <ProductOptionsList
          @set-addon="setAddon"
          :inventory="product.inventory"
        />
      </div>
      <hr />
      <div class="purchase-product-container flex">
        <div class="purchase-product flex">
          <button>קנה עכשיו</button>
          <div class="product-price flex align-center">
            <span :class="productAddonClass">כולל שדרוגים</span>
            <p>{{ productPrice }} ₪</p>
          </div>
        </div>
      </div>
      <div class="delivery-info"></div>
    </div>
  </section>
</template>
<script>
import { productService } from '../services/product.service';
import { utilService } from '../services/util.service';
import ProductOptionsList from '../cmps/ProductOptionsList.vue';
import ProductCarousel from '../cmps/ProductCarousel.vue';
export default {
  components: {
    ProductOptionsList,
    ProductCarousel,
  },
  data() {
    return {
      addonsPrice: 0,
    };
  },
  async created() {
    const { id } = this.$route.params;
    await this.$store.dispatch({ type: 'loadProduct', id });
  },
  methods: {
    setAddon(addon) {
      this.$store.dispatch({ type: 'addProductAddon', addon });
    },
  },
  computed: {
    product() {
      return this.$store.getters.product;
    },
    productBrand() {
      return productService.getProductBrandImg(this.product.brand);
    },
    productAddonClass() {
      return this.addonsPrice !== 0 ? '' : 'hide';
    },
    productPrice() {
      this.addonsPrice = 0;
      const addons = this.$store.getters.productAddons;
      const sum = addons.forEach((addon) => {
        this.addonsPrice += addon.value;
      });
      return utilService.numberWithCommas(
        this.product.price + this.addonsPrice
      );
    },
  },
};
</script>
<style lang=""></style>
