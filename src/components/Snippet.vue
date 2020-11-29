<template>
  <div>
    <p>👇 Snippet #{{ id }} size: {{ formattedSize }}</p>

    <textarea v-model="source" />
  </div>
</template>

<script>
import { formatBytes, stringSize } from '../bytes'

export default {
  name: 'Snippet',
  props: {
    id: Number
  },
  data() {
    return {
      source: '',
    }
  },
  computed: {
    rawSize() {
      return stringSize(this.source)
    },
    formattedSize() {
      return formatBytes(this.rawSize)
    }
  },
}
</script>
