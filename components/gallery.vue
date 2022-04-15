<template>
  <div class="gallery">
    <h1>Gallery</h1>

  
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data() {
    return {
      title: 'Gallery'
    }
  }
}
</script>

<style scoped>
</style>