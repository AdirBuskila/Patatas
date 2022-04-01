<template>
  <div class="dashboard flex">
    <BranchInfo />
    <MenuBar :filterBy="filterBy" @set-filter-by="setFilterBy" />
    <OrderDetails />
    <ProductList :filterBy="filterBy" :products="products" />
    <MenuNav :filterBy="filterBy" @set-filter-by="setFilterBy" />
    <CheckOutBar />
    <OrderSummery />
  </div>
</template>

<script>
import ProductList from '../cmps/ProductList.vue';
import OrderDetails from '../cmps/OrderDetails.vue';
import MenuNav from './MenuNav.vue';
import BranchInfo from './BranchInfo.vue';
import MenuBar from './MenuBar.vue';
import CheckOutBar from './CheckOutBar.vue';
import OrderSummery from './OrderSummery.vue';
export default {
  data() {
    return {
      filterBy: {name: 'פאטאטאס', value:'main'},
    };
  },
  components: {
    ProductList,
    OrderDetails,
    MenuNav,
    BranchInfo,
    MenuBar,
    CheckOutBar,
    OrderSummery
},
  computed: {
    products() {
      return this.$store.getters.getFilteredProducts(this.filterBy.value);
    },
  },
  methods: {
    setFilterBy(value) {
      this.filterBy = value;
    },
  },
};
</script>

<style></style>
