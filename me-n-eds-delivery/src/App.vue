<template>
  <GoogleMap></GoogleMap>
</template>

<script>
import Maps from './components/Maps.vue';
import GoogleMap from './components/GoogleMap.vue';
export default {
  name: 'App',
  components: {
    Maps,
    GoogleMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
