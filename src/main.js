import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css' // Tailwind
import 'flowbite'             // importa el JS de Flowbite (activa dropdowns, modals, etc.)
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite'; // <-- ¡Esta es la clave!

import { useScreen } from './composables/useScreen'
// Font Awesome
import { library, byPrefixAndName} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons' // todos los solid
// 👇 Importa el brand que necesitas
import { fab, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
//Router
import router from './router'


onMounted(() => {
  initFlowbite()
})



library.add(fas, fab)
const app = createApp(App) 
.use(router)
// Agregar helper global
const { screen } = useScreen()
app.config.globalProperties.$screen = screen
app.component('font-awesome-icon', FontAwesomeIcon)
app.provide('byPrefixAndName', byPrefixAndName)

app.mount('#app')
