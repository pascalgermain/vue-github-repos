<template>
  <div>
    <div v-if="loading">Loading</div>
    <ul v-else>
      <li v-for="repo in repos">
        <img :src="repo.owner.avatar_url">
        <a :href="repo.html_url" target="_blank">{{ repo.full_name }}</a>
        <div>{{ repo.owner.login }}</div>
        <div>{{ repo.description }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    repos () {
      console.log(this.$store.state.repos)
      return this.$store.state.repos
    },
    loading () {
      return this.$store.state.loading
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

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
</style>
