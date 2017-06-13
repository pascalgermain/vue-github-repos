import axios from 'axios'

const apiUrl = 'https://api.github.com'

export default {
  getRepos (query, callback) {
    return axios.get(apiUrl + '/search/repositories?q=' + query)
      .then(response => callback(response.data.items))
      .catch(error => console.log('error', error))
  }
}
