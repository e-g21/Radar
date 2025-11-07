import { createApp, onMounted } from 'vue'
import App from './App.vue'
import axios from 'axios'

// Estilos y librerías
import './assets/main.css'  // Tailwind
import 'flowbite'
import { initFlowbite } from 'flowbite'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'   // todos los íconos solid
import { fab } from '@fortawesome/free-brands-svg-icons'  // todos los íconos de marcas

// Router
import router from './router'

// Composables
import { useScreen } from './composables/useScreen'

// Inicializa Flowbite al montar
onMounted(() => {
  initFlowbite()
})

// Agrega íconos a la librería global
library.add(fas, fab)

// Crea la app
const app = createApp(App)

// Usa router y helpers globales
app.use(router)

const { screen } = useScreen()

app.config.globalProperties.$axios = axios
app.config.globalProperties.$screen = screen

// Componente global para íconos
app.component('font-awesome-icon', FontAwesomeIcon)

// Monta la app
app.mount('#app')
