<template>
  <div>
    <div v-if="loading">Loading</div>
    <ul v-else>
      <li v-for="repo in repos">
        <img :src="repo.owner.avatar_url">
        <repo-link :url="repo.html_url" :name="repo.full_name"></repo-link>
        <input type="button" value="Details" @click="setActiveRepoId(repo.id)">
        <div>{{ repo.description }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RepoLink from './RepoLink'

export default {
  components: {
    RepoLink
  },
  computed: mapState([
    'repos',
    'loading'
  ]),
  methods: {
    setActiveRepoId (repoId) {
      this.$store.dispatch('setActiveRepoId', repoId)
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  clear: both;
}

img {
  float: left;
  width: 200px;
  height: 200px;
  margin: 0 20px 20px 0;
}
</style>
