import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faCoffee, faClock, faMapLocation,faUtensils} from'@fortawesome/free-solid-svg-icons';
import {faFacebook,faInstagram,faTwitter} from'@fortawesome/free-brands-svg-icons';
import './assets/tailwind.css'

library.add(faCoffee,faClock,faMapLocation,faUtensils,faFacebook,faInstagram,faTwitter)


createApp(App).use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.use(MotionPlugin)
.mount('#app')
