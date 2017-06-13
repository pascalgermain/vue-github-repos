<template>
  <div>
    {{ status }}
  </div>
</template>

<script>
export default {
  computed: {
    status () {
      return this.$store.state.loading ? 'Loading' : 'Repo list'
    }
  }
}
</script>
