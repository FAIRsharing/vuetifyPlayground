let utilsStore = {
    namespaced: true,
    state: {
        bodyOverflowState: false,
    },
    mutations: {
        toggleOverflowMutate(state, status) {
            state.bodyOverflowState = status;
        }
    },
    actions: {
        toggleOverflowAction(state, status) {
            this.commit('utils/toggleOverflowMutate', status);
        },
    }
};


export default utilsStore;

