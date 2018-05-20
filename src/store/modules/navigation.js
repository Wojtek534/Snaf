export default {
  state: {
    navClipped: true,
    drawer: true,
    fixed: false,
    navMiniVariant: false
  },
  getters: {
    getNavClipped (state) {
      return state.navClipped
    },
    getDrawer (state) {
      return state.drawer
    },
    getFixed (state) {
      return state.fixed
    },
    getMiniVariant (state) {
      return state.navMiniVariant
    }
  },
  mutations: {
    setNavClipped: (state) => {
      state.navClipped = !state.navClipped
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer
    },
    setFixed: (state) => {
      state.fixed = !state.fixed
    },
    setMiniVariant (state) {
      state.navMiniVariant = !state.navMiniVariant
    }
  },
  namespaced: false
}
