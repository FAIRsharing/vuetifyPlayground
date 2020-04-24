import Vue from "vue"
import Vuex from "vuex"
import selectedChips from "./selectedChips.js"


Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    selectedChips: selectedChips,
  }
})

