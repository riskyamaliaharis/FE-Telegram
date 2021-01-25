import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Friends from './modules/friends'
import Mine from './modules/mine'
import List from './modules/lists'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Friends, Mine, List },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user']
    })
  ]
})
