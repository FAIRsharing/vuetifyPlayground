import Vue from "vue"
import Vuex from "vuex"
import utils from "./utils.js"


Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        utils: utils,
    }
})
