<template>
    <AddressInput @addressSelect="getAddress" :mapboxOptions="mapboxOptions"></AddressInput>
</template>

<script setup>
    import { reactive } from 'vue'
  // import AddressInput from './components/AddressInput.vue'
  // import AddressInput from './components/AddressInput.js'
    import AddressInput from '@samhess/vue-address-input'
    const editedItem = reactive({})
  // mapbox options as per https://docs.mapbox.com/api/search/geocoding
    const mapboxOptions = {
        access_token : '',
        limit : 10,
        language: 'de'
    }
    function getAddress(address) {
        Object.assign(editedItem,address)
    }
</script>
