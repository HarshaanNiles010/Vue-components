<template>
  <newAddress></newAddress>
</template>

<script>
import Maps from './components/Maps.vue';
import GoogleMap from './components/GoogleMap.vue';
import AddressList from './components/AddressList.vue';
import NewFormList from './components/NewFormList.vue';
import newAddress from './components/newAddress.vue';
export default {
  name: 'App',
  components: {
    Maps,
    GoogleMap,
    AddressList,
    NewFormList,
    newAddress
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
