import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps';

//createApp(App).mount('#app')
const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDCAcXjot-L5lxvEFhnMBO17H5MAc5Id6E',
        //language: 'de',
    },
}).mount('#app')
