<template>
  <div>
    <input v-model="query">
    <input type="button" value="Search" @click="getRepos">
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    getRepos () {
      this.$store.dispatch('getRepos', {query: this.query})
    }
  }
}
</script>
