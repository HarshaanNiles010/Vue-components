<template>
    <GMapMap
        :center="center"
        :zoom="10"
        map-type-id="roadmap"
        style="width: 100vw; height: 900px;">
        <GMapMarker
            :position="center"/>
    </GMapMap>
</template>

<script setup>
import {ref, onMounted} from 'vue';
    const center = ref(
        {
            lat:0,
            lng:0
        }
    )
    function getLocation() {
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(position =>{
                center.value.lat = position.coords.latitude,
                center.value.lng = position.coords.longitude
            })
        }
        else{
            console.error("Geolocation is not working");
        }
        return { center }
    }
    onMounted(() => {
        console.log("using the lifecycle hook to change location");
        getLocation();
    })
</script>