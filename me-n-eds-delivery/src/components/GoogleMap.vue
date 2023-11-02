<template>
    <GoogleMap api-key="AIzaSyA88I2QbpGeFhAQyE8KAuzq7G-cQlaijN4" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
    </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
    name:GoogleMap,
    components: { GoogleMap, Marker },
    setup() {
    const center = { 
                    lat: 40.689247, 
                    lng: -74.044502 
                };
    if ("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(position => {
            center.lat = position.coords.latitude;
            center.lng = position.coords.longitude;
            //console.log("Latitude: ",center.lat);
            //console.log("Longitude: ", center.lng);
        })
    }
    
    return { center };
    },
});
</script>