import Vue from 'vue'
import Vuex from 'vuex'
import repos from '../services/repos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    repos: [],
    activeRepoId: null,
    loading: false
  },
  getters: {
    activeRepo: state => {
      return state.repos.find(repo => repo.id === state.activeRepoId)
    }
  },
  mutations: {
    setRepos (state, repos) {
      state.repos = repos
    },
    setActiveRepoId (state, repoId) {
      state.activeRepoId = repoId
    },
    setLoading (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    getRepos ({commit}, query) {
      if (query === '') return
      commit('setLoading', true)
      commit('setActiveRepoId', null)
      commit('setRepos', [])
      repos.getRepos(query, items => {
        commit('setRepos', items)
        commit('setLoading', false)
      }, error => {
        commit('setLoading', false)
        console.log('error', error)
      })
    },
    setActiveRepoId ({commit}, repoId) {
      commit('setActiveRepoId', repoId)
    }
  }
})
