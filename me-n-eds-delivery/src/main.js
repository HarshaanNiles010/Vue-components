import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps';

//createApp(App).mount('#app')
const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: '',
        //language: 'de',
    },
}).mount('#app')
