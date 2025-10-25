<template>

  <div class="flex flex-col h-screen">
    <Navbar @toggleSidebar="toggleOffcanvas" />
    <!-- CONTENIDO DE LA APP -->
    <div class="flex-1">
      <!-- VISTA DE BIENVENIDA -->
      <div class="main-dashboard">
         <Sidebar
        :menuActivo="menuActivo"
        :vistaActual="vistaActualDashboard"
        :showOffcanvas="showOffcanvas"
        @toggle-offcanvas="toggleOffcanvas"
        @cambiar-vista="cambiarVista"
        @toggle-menu="toggleMenu"
      />

        <div class="content-main">
          <component v-if="vistas[vistaActualDashboard]" :is="vistas[vistaActualDashboard]" @toggle-menu="toggleMenu" />
          <div v-else>Vista no encontrada</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

//Global
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'

//Para Perfil Comercioal
import Panel from '../views/Dashboard/Panel.vue'
import FichaPerfil from '../views/Dashboard/FichaPerfil.vue'
import Catalago from '../views/Dashboard/Catalago.vue'
import QrDigital from '../views/Dashboard/QrDigital.vue'
import Planes from '../views/Dashboard/Planes.vue'

//Para Dashboard
import Bienvenido from '../views/Dashboard/Bienvenido.vue'
import CuentaPropietario from '../views/Dashboard/CuentaPropietario.vue'
import Contactos from '../views/Dashboard/Contactos.vue'
import TerminosCondiciones from '../views/Dashboard/TerminosCondiciones.vue'


// Map de componentes
const vistas = {
  Panel,
  FichaPerfil,
  Catalago,
  QrDigital,
  Planes,
  Bienvenido,
  Contactos,
  CuentaPropietario,
  TerminosCondiciones
}


// Estado actual
const vistaActualDashboard = ref('Bienvenido')

// Estado del menú activo
const menuActivo = ref('menu-bienvenido') // 'menu-bienvenido' o 'menu-dashboard'

// Control del sidebar en modo responsive
const showOffcanvas = ref(false)
// Función para abrir/cerrar sidebar desde Navbar o Sidebar
function toggleOffcanvas() {
  showOffcanvas.value = !showOffcanvas.value
}

// Función para cambiar vista
function cambiarVista(nuevaVista) {
  if (vistas[nuevaVista]) {
    vistaActualDashboard.value = nuevaVista
  }
}
// Función para alternar entre menús y cambiar la vista inicial
function toggleMenu() {
  if (menuActivo.value === 'menu-dashboard') {
    menuActivo.value = 'menu-bienvenido'
    vistaActualDashboard.value = 'Bienvenido' // primer item del menú-bienvenido
  } else {
    menuActivo.value = 'menu-dashboard'
    vistaActualDashboard.value = 'Panel' // primer item del menú-dashboard
  }
}
</script>
