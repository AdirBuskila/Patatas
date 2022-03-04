import { createStore } from 'vuex';
// import userModule from '@/store/modules/user.module.js';
import productModule from './modules/product.module';
// Create a new store instance.
const store = createStore({
    strict: true,
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {},
    modules: {
        // userModule,
        productModule,
    }
});

export default store;