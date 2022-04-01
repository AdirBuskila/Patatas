import { productService } from "../../services/product.service";

export default {
    state: {
        products: [],
        product: null,
        productAddons: [],
        deliveryFee: null,
        deliveryLocation: null,
        cart: [
            {
                _id: 'plvfghfghfgh5D2',
                type: 'main',
                name: 'תפוח אדמה',
                price: 31,
                inStock: true,
                description: 'כולל תוספות ללא הגבלה',
                img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967708/Patats/tttjaqpdpguf83tny20j.jpg',
                addons: [
                    { name: 'טונה', value: 2 },
                    { name: 'בצל רגיל', value: 0 },
                    { name: 'סחוג', value: 0 },
                    { name: 'פסטו', value: 0 },
                    { name: 'פטריות פורטבלו', value: 0 },
                    { name: 'פרמזן', value: 0 },
                    { name: 'זיתים ירוקים', value: 0 },
                    { name: 'מוצרלה', value: 0 },
                    { name: 'ביצה קשה', value: 3 },
                    { name: 'הקרמה', value: 4 },
                    { name: 'ביצת עין', value: 3 },
                    { name: 'רוטב שקשוקה ללא ביצה (לטבעונים)', value: 2 },
                ]
            },
            {
                _id: 'plvsdfsdf5D2',
                type: 'speacial',
                name: "ארנצ'יני",
                price: 33,
                inStock: true,
                description: "תוספות לבחירה: רוטב אלפרדו / רוטב אלפרדו פסטו / פרמז'ן / בצל ירוק. ",
                img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967708/Patats/ipvfzxqwiykwj95o2ceo.jpg',
                addons: [
                    { name: 'אלפרדו', value: 0 },
                    { name: 'אלפרדו פסטו', value: 0 },
                    { name: "פרמז'ן", value: 0 },
                    { name: 'בצל ירוק', value: 0 },
                ]

            },
            {
                _id: 'tervsad',
                type: 'drink',
                name: 'בירה קרלסברג',
                price: 15,
                inStock: true,
                description: " ",
                img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330382/Patats/yghjlckhtetggjuactqh.png',
                addons: [
                ]
            },
        ],
    },
    getters: {
        products(state) {
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
        deliveryFee(state) {
            return state.deliveryFee;
        },
        deliveryLocation(state) {
            return state.deliveryLocation;
        },
        cartTotal(state) {
            return productService.getCartTotal(state.cart) + state.deliveryFee
        },
        getFilteredProducts: (state) => (filterBy) => { 
            return state.products.filter(product => product.type === filterBy)
        }
    },
    mutations: {
        setProducts(state, { products }) {
            state.products = products;
        },
        setProduct(state, { product }) {
            state.product = product;
        },
        addToCart(state) {
            let product = {...state.product}
            product.addons = [... state.productAddons]
            state.cart.push(product);
            state.productAddons = []
        },
        removeFromCart(state, { idx }) {
            state.cart.splice(idx, 1)
        },
        setDeliveryFee(state, { deliveryFee }) {
            state.deliveryFee = deliveryFee
        },
        setDeliveryLocation(state, { deliveryLocation }) {
            state.deliveryLocation = deliveryLocation
        },
        setProductAddon(state, { addon }) {
            const addonIndex = state.productAddons.findIndex(currAddon => {
                return currAddon.name === addon.name
            })
            if (addonIndex === -1) {
                state.productAddons = [...state.productAddons, addon]
            }
            else {
                state.productAddons.splice(addonIndex, 1)
            }
        },
    },
    actions: {
        async loadProducts({ commit }) {
            const products = await productService.query()
            commit({ type: 'setProducts', products });
        },
        async loadProduct({ commit }, { id }) {
            const product = await productService.get(id)
            commit({ type: 'setProduct', product });
        },
        async addProductAddon({ commit }, { addon }) {
            commit({ type: 'setProductAddon', addon });
        },
        async addProductToCart({ commit }) {
            commit({ type: 'addToCart'});
        },
        async removeFromCart({ commit }, { idx }) {
            commit({ type: 'removeFromCart', idx });
        },
        setDeliveryFee({ commit }, { deliveryFee }) {
            commit({ type: 'setDeliveryFee', deliveryFee });
        },
        setDeliveryLocation({ commit }, { deliveryLocation }) {
            commit({ type: 'setDeliveryLocation', deliveryLocation });
        },
    },
};