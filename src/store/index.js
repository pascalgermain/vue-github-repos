import Vue from 'vue'
import Vuex from 'vuex'
import repos from '../services/repos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    repos: [],
    loading: false
  },
  mutations: {
    setRepos (state, repos) {
      state.repos = repos
    },
    setLoading (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    getRepos ({commit}, {query}) {
      if (query === '') return
      commit('setLoading', true)
      repos.getRepos(query, items => {
        commit('setLoading', false)
        commit('setRepos', items)
      }, error => {
        commit('setLoading', false)
        console.log('error', error)
      })
    }
  }
})
