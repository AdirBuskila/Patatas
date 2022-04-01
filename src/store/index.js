import { createStore } from 'vuex';
// import userModule from '@/store/modules/user.module.js';
import productModule from './modules/product.module';
import modalModule from './modules/modal.module';
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
        productModule,
        modalModule
    }
});

export default store;