<template>
  <div v-on:click.prevent="goBack" class="wrapper">
    <div
      v-if="product"
      v-on:click.stop="some"
      class="product-details flex column align-center justify-center"
    >
      <div class="top flex row-reverse">
        <div class="img-container flex">
          <img class="product-img" :src="product.img" />
        </div>
        <div class="product-info flex column">
            <div class="product-name">
              <p>{{ product.name }}</p>
            </div>
          <div class="product-description">
            {{ product.description }}
          </div>
        </div>
        <div class="product-price flex column">
          <p><span>₪ </span>{{ product.price }}</p>
        </div>
      </div>
      <div class="bottom flex column">
        <div
          v-if="product.addons.length > 0"
          class="product-addons flex column"
        >
          <p class="heading">תוספות לבחירה</p>
          <AddonList @set-addon="setAddon" :addons="product.addons" />
        </div>
        <div class="product-comments">
          <p class="heading">הערות מיוחדות?</p>
          <input placeholder="רשום הערות למטבח..." />
        </div>
        <div class="add-to-cart flex row-reverse">
          <el-button @click="addToCart" type="warning" plain class="add-btn"
            >הוסף לסל</el-button
          >
          <el-button @click="goBack" type="danger" plain class="go-back-btn">
            <Right />
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddonList from '../cmps/product-details/AddonList.vue';
import ProductSummery from '../cmps/product-details/ProductSummery.vue';
import { Right } from '@element-plus/icons-vue';
export default {
  components: { AddonList, ProductSummery, Right },
  data() {
    return {
      selectedProduct: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    await this.$store.dispatch({ type: 'loadProduct', id });
  },
  mounted() {
    document.body.style.overflowY = 'hidden';
  },
  computed: {
    product() {
      return this.$store.getters.product;
    },
    productAddons() {
      return this.$store.getters.productAddons;
    },
  },
  unmounted() {
    document.body.style.overflowY = '';
  },
  methods: {
    async setAddon(addon) {
      await this.$store.dispatch({ type: 'addProductAddon', addon });
    },
    async addToCart() {
      await this.$store.dispatch({ type: 'addProductToCart' });
      this.$router.back();
    },
    goBack() {
      this.$router.back();
    },
    some() {
      console.log();
    },
  },
};
</script>
<style lang="scss"></style>
