const k = 1024
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

export const formatBytes = (bytes, decimals) => {
  if (!bytes) return '0 Bytes'
  const dm = decimals || 2
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export const stringSize = (str) => new Blob([str]).size
