
let utilsStore = {
    namespaced: true,
    state: {
        UIGeneralStatus: {
            bodyOverflowState: false,
            drawerVisibilityState: false,
            headerVisibilityState: true,
        },
    },
    mutations: {
        setGeneralUIAttributesMutation(state, statusObject) {
            state.UIGeneralStatus.bodyOverflowState =  statusObject.bodyOverflowState;
            state.UIGeneralStatus.drawerVisibilityState = statusObject.drawerVisibilityState;
            state.UIGeneralStatus.headerVisibilityState = statusObject.headerVisibilityState;
        }
    },
    actions: {
        setGeneralUIAttributesAction(state, statusObject) {
            this.commit('utils/setGeneralUIAttributesMutation', statusObject);
        },
    }
};


export default utilsStore;

