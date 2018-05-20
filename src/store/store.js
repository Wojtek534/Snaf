import Vue from 'vue'
import Vuex from 'vuex'
import Navigation from './modules/navigation'
import Fetch from './modules/fetch'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    Navigation,
    Fetch
  }
})
