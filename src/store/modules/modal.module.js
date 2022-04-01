
export default {
    state: {
        isOpen: false,
    },
    getters: {
        isOpen(state) {
            return state.isOpen;
        },
    },
    mutations: {
        setIsOpen(state, { isOpen }) {
            state.isOpen = isOpen;
        },
    },
    actions: {
        setModalState({ commit }, { isOpen }) {
            commit({ type: 'setIsOpen', isOpen });
        },

    },
};