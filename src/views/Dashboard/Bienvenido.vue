<template>
  <!--  -->
  <div class="welcome-content">
    <div class="text-center my-[15%]">
      <h1 class="title">
        ¡Hola {{ user?.name || 'Usuario' }}!👋<br />
        Bienvenido
      </h1>
      <p class="p-text my-8">
        Comienza creando tu primer perfil comercial para tu comercio,
        emprendimiento o servicio
      </p>
      <button class="btn" @click="$emit('toggle-menu')">
        Crear Nuevo Perfil Comercial
      </button>
    </div>
    <!-- notify -->
    <div class="message-notify md:w-1/2 mx-auto">
      <div class="card card-message">
        <font-awesome-icon
          :icon="['fas', 'face-smile']"
          class="text-5xl text-miAmarillo hover:text-principal transition-colors duration-300"
          style="color: #ffd700"
        />
        <p class="text-xs text-left text-amarillo">
          Actualmente cuentas con el Plan Amigable Habilitado para crear tu
          primer perfil comercial.
        </p>
      </div>
    </div>
  </div>



</template>

<script setup>
import { useAuth } from "@/composables/useAuth";
const { user} = useAuth();
defineEmits(["toggle-menu"]);

</script>
