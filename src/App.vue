<template>
  <h1>bytes <span>({{ formatBytes('bytes') }})</span></h1>

  <h2>Safely calculate the weight of any text snippet.
    <span>({{ formatBytes('Safely calculate the weight of any text snippet.') }})</span>
  </h2>

  <snippet v-for="idx in snippetPool" :key="idx" :id="idx" />

  <button @click="snippetPool++">Compare with another snippet</button>

  <footer>
    <p>By <strong>safely</strong>, we mean that none of your text ever leaves the browser.</p>
    <p>When in doubt, check the source-code
      <a href="https://github.com/andreasvirkus/bytes" target="_blank" rel="noopener noreferrer nofollow">here</a>.
    </p>
  </footer>
</template>

<script>
import { formatBytes, stringSize } from './bytes'
import Snippet from './components/Snippet.vue'

export default {
  name: 'App',
  components: { Snippet },
  data() {
    return {
      snippetPool: 1,
    }
  },
  methods: {
    formatBytes: (str) => formatBytes(stringSize(str)),
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

button {
  background: none;
  border: 1px solid #333;
  margin-top: 32px;
  padding: 8px;
  border-radius: 4px;
}
button:hover {
  border-color: #222;
  box-shadow: 0 0 1px 1px #222;
}
</style>
