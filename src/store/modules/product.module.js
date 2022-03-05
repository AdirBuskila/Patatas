import { productService } from "../../services/product.service";

export default {
    state: {
        products: [],
        product: null,
        productAddons: [],
        cart: [],
    },
    getters: {
        products(state) {
            return state.products;
        },
        filterdProducts(state, filterBy) {
            
            return state.products;
        },
        product(state) {
            return state.product;
        },
        productAddons(state) {
            return state.productAddons;
        },
        cart(state) {
            return state.cart;
        },
    },
    mutations: {
        setProducts(state, { products }) {
            state.products = products;
        },
        setProduct(state, { product }) {
            state.product = product;
        },
        setProductAddon(state, { addon }) {
            const addonIndex = state.productAddons.findIndex(currAddon => {
                return currAddon.type === addon.type
            })
            if (addonIndex === -1) {
                state.productAddons = [...state.productAddons, addon]
            }
            else {
                state.productAddons.splice(addonIndex, 1, addon)
            }
        },
    },
    actions: {
        async loadProducts({ commit }) {
            const products = await productService.query()
            commit({ type: 'setProducts', products });
        },
        async setFilterBy({ commit }, { filterBy }) {
            const products = await productService.query(filterBy)
            commit({ type: 'setProducts', products });
        },
        async loadProduct({ commit }, { id }) {
            const product = await productService.get(id)
            commit({ type: 'setProduct', product });
        },
        async addProductAddon({ commit }, { addon }) {
            commit({ type: 'setProductAddon', addon });
        },
    },
};