import Vue from "vue"
import Vuex from "vuex"
import uiController from "./uiController";

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        uiController: uiController,
    }
})
