import axios from 'axios'

const apiUrl = 'https://api.github.com'

export default {
  getRepos (query, successFn, errorFn) {
    return axios.get(apiUrl + '/search/repositories?q=' + query)
      .then(response => successFn(response.data.items))
      .catch(error => { if (typeof errorFn === 'function') errorFn(error) })
  }
}
