<template>
  <h1>bytes <span>({{ formatBytes('bytes') }})</span></h1>

  <h2>Safely calculate the weight of any text snippet.
    <span>({{ formatBytes('Safely calculate the weight of any text snippet.') }})</span>
  </h2>

  <p>👇 Snippet size: {{ formattedSize }}</p>

  <textarea v-model="source" />

  <footer>
    <p>By <strong>safely</strong>, we mean that none of your text ever leaves the browser.</p>
    <p>When in doubt, check the source-code
      <a href="https://github.com/andreasvirkus/bytes" target="_blank" rel="noopener noreferrer nofollow">here</a>.
    </p>
  </footer>
</template>

<script>
function formatBytes(bytes, decimals) {
  if (bytes == 0) return '0 Bytes'
  const k = 1024
  const dm = decimals || 2
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export default {
  name: 'App',
  data() {
    return {
      source: '',
    }
  },
  computed: {
    rawSize() {
      return new Blob([this.source]).size
    },
    formattedSize() {
      return formatBytes(this.rawSize)
    }
  },
  methods: {
    formatBytes(str) {
      return formatBytes(new Blob([str]).size)
    },
  }
}
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #223;
}

textarea {
  border: 1px solid #222;
  border-radius: 8px;
  background: none;
  min-width: 600px;
  max-width: 96vw;
  min-height: 260px;
  max-height: 680px;
  padding: 8px;
}
textarea:focus {
  outline: none;
  box-shadow: 0 0 1px 1px #222;
}

span {
  color: #999;
  font-size: 60%;
}
</style>
