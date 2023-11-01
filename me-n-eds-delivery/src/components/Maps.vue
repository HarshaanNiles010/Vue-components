<template>
    <div>
    <h1>Geolocation Finder</h1>
    <button @click="getLocation">Get My Location</button>
        <div v-if="location">
            <p>Latitude: {{ location.latitude }}</p>
            <p>Longitude: {{ location.longitude }}</p>
        </div>
    </div>
</template>

<script>
// This is the options API route.
export default {
    Name:'Maps',
    data() {
        return {
            location: null
        };
    },
        methods: {
        getLocation() {
            if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                this.location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
                };
            }, error => {
                console.error("Error getting location:", error);
            });
            } else {
            console.error("Geolocation is not supported by your browser.");
            }
        }
        }
    };
</script>
    