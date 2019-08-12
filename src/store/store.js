import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screenHeight: 0,
    screenWidth: 0,
    contentWidth: 0,
    contentHeight: 0,
  },
  getters: {},
  mutations: {
    SET_S_HEIGHT(state, val) {
      state.screenHeight = val
    },
    SET_S_WIDTH(state, val) {
      state.screenWidth = val
    },
    SET_C_HEIGHT(state, val) {
      state.contentHeight = val
    },
    SET_C_WIDTH(state, val) {
      state.contentWidth = val
    },
  }
})
