export const mutations = {
    /*    setParameters(state, data) {
        },*/
    setLocalStorageExpiryTime: function () {
        let now = new Date();
        localStorage.expiryDate = now;
        return now;
    }
};

export const actions = {
    // this.commit("introspection/setLocalStorageExpiryTime");
};
export const getters = {
    /*    buildQueryParameters: (state) => (params) => {
            return queryParameters;
        }*/
};

let selectedChips = {
    namespaced: true,
    state: {
        errors: String,
        searchQueryParameters: {},
    },
    modules: {},
    mutations: mutations,
    actions: actions,
    getters: getters
};
export default selectedChips;

