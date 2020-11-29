<template>
  <h1>bytes</h1>

  <h2>Safely calculate the weight of any text snippet.</h2>

  <textarea v-model="source" />

  <footer>
    <p>By safely, we mean that none of your text ever leaves the browser.</p>
    <p>When in doubt, check the source-code
      <a href="https://github.com/andreasvirkus/bytes" target="_blank" rel="noopener noreferrer nofollow">here</a>.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      source: '',
    }
  },
  computed: {
    rawSize() {
      // TODO: compute this.source to bytes
    },
    formattedSize() {
      return '0.4kB'
    }
  },
}
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #223;
}
</style>
