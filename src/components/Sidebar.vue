<template>
   <!-- Fondo oscuro cuando el menú esté abierto -->
  <div
    v-if="props.showOffcanvas"
    class="fixed inset-0 bg-black bg-opacity-40 z-10 md:hidden"
    @click="$emit('toggle-offcanvas')"
  ></div>
  <nav class="top-nav-welcome fixed md:static top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-30"
    :class="{
      '-translate-x-full': !props.showOffcanvas,
      'translate-x-0': props.showOffcanvas || $screen('md')
    }"
  >
    <!-- Cabecera del menú solo visible en móvil -->
    <div class="flex md:hidden justify-between items-center p-3 border-b mb-4">
       <img src="@/assets/img/logo-radar.png" alt="Logo" class="h-10"/>
      <button @click="$emit('toggle-offcanvas')" class="text-gray-600">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
    </div>

    <!-- Menús -->
    <ul v-if="props.menuActivo === 'menu-bienvenido'"
      class="menu-bienvenido"
    >
      <li
        v-for="item in menuBienvenido"
        :key="item.name"
        :class="{ 'li-active': props.vistaActual === item.name }"
        @click="
          () => {
            $emit('cambiar-vista', item.name)
            $emit('toggle-offcanvas')
          }
        "
      >
        <font-awesome-icon :icon="item.icon" />
        {{ item.label }}
      </li>
    </ul>

    <ul v-else class="menu-dashboard">
      <li class="li-btn" @click="$emit('toggle-menu')">
        <font-awesome-icon :icon="['fas', 'exchange-alt']" />
        Ir a Bienvenido
      </li>
      <li
        v-for="item in menuDashboard"
        :key="item.name"
        :class="{ 'li-active': props.vistaActual === item.name }"
        @click="
          () => {
            $emit('cambiar-vista', item.name)
            $emit('toggle-offcanvas')
          }
        "
      >
        <font-awesome-icon :icon="item.icon" />
        {{ item.label }}
      </li>
    </ul>
  </nav>

 
</template>

<script setup>
import {defineProps, defineEmits } from "vue";

const props = defineProps({
  menuActivo: String,
  vistaActual: String,
  showOffcanvas: Boolean // ← recibimos el estado desde el padre
})
const emit = defineEmits(['cambiar-vista', 'toggle-menu', 'toggle-offcanvas'])

const menuBienvenido = [
  { name: "Bienvenido", label: "Página principal", icon: ["fas", "home"] },
  {
    name: "CuentaPropietario",
    label: "Cuenta del propietario",
    icon: ["fas", "user-tie"],
  },
  { name: "Contactos", label: "Contactos", icon: ["fas", "address-book"] },
  {
    name: "TerminosCondiciones",
    label: "Términos y Condiciones",
    icon: ["fas", "file-contract"],
  },
];

const menuDashboard = [
  { name: "Panel", label: "Panel principal", icon: ["fas", "home"] },
  { name: "FichaPerfil", label: "Ficha de perfil", icon: ["fas", "id-badge"] },
  { name: "Catalago", label: "Catálogo", icon: ["fas", "book-open"] },
  { name: "QrDigital", label: "QR Digital", icon: ["fas", "qrcode"] },
  { name: "Planes", label: "Planes", icon: ["fas", "clipboard-list"] },
];
</script>
