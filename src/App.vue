<template>
  <div id="app">
    <div class="header">
      <search-box></search-box>
    </div>
    <div class="main">
      <div class="col">
        <repo-list></repo-list>
      </div>
      <div class="col">
        <repo-detail></repo-detail>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox'
import RepoList from './components/RepoList'
import RepoDetail from './components/RepoDetail'

export default {
  components: {
    SearchBox,
    RepoList,
    RepoDetail
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.header {
  line-height: 40px;
  margin: 20px 10px;
  border: 1px solid #ddd;
  padding: 20px;
}

.main {
  padding: 10px 20px;
}

.col {
  float: left;
  width: 50%;
}
</style>
