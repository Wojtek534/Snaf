import ext from '../../custom/extensions';

export default {
  state: {
    navClipped: true,
    drawer: true,
    fixed: false,
    navMiniVariant: false
  },
  getters: {
    getNavClipped(state) {
      return state.navClipped;
    },
    getDrawer(state) {
      return state.drawer;
    },
    getFixed(state) {
      return state.fixed;
    },
    getMiniVariant(state) {
      return state.navMiniVariant;
    }
  },
  mutations: {
    setNavClipped: state => {
      localStorage.setItem('navClipped', !state.navClipped);
      state.navClipped = !state.navClipped;
    },
    setDrawer: state => {
      localStorage.setItem('drawer', !state.drawer);
      state.drawer = !state.drawer;
    },
    setFixed: state => {
      state.fixed = !state.fixed;
    },
    setMiniVariant: state => {
      localStorage.setItem('navMiniVariant', !state.navMiniVariant);
      state.navMiniVariant = !state.navMiniVariant;
    },
    setDrawerStorage(state) {
      const clipped = localStorage.getItem('navClipped');
      if (!_.isEmpty(clipped)) {
        state.navClipped = ext.StringToBoolean(clipped);
      }
      const variant = localStorage.getItem('navMiniVariant');
      if (!_.isEmpty(variant)) {
        state.navMiniVariant = ext.StringToBoolean(variant);
      }
    }
  },

  namespaced: false
};
