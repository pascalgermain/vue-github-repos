<template>
  <div v-if="repo" class="repo-detail">
    <img :src="repo.owner.avatar_url">
    <repo-link :url="repo.html_url" :name="repo.full_name"></repo-link>
    <div class="owner">{{ repo.owner.login }}</div>
    <div>{{ repo.description }}</div>
  </div>
</template>

<script>
import RepoLink from './RepoLink'

export default {
  components: {
    RepoLink
  },
  computed: {
    repo () {
      return this.$store.getters.activeRepo
    }
  }
}
</script>

<style scoped>
.repo-detail {
  margin-left: 50px;
}

img {
  display: block;
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
}

a {
  display: block;
}

.owner {
  color: #999;
}
</style>
