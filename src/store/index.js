import Vue from 'vue'
import Vuex from 'vuex'
import repos from '../services/repos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    repos: []
  },
  mutations: {},
  actions: {
    getRepos ({commit}, {query}) {
      if (query === '') return
      repos.getRepos(query, response => console.log(response))
    }
  }
})
