<template>
  <header class="header-main p-4 flex items-center justify-between">
    <div class="grid grid-cols-3 md:grid-cols-2 gap-4 w-full items-center">
      <div class="">
        <img src="@/assets/img/logo-radar.png" alt="Logo" class="md:h-10" />
      </div>
      <div class="flex items-center justify-end gap-2 md:gap-7 col-span-2  md:col-span-1">
        <a href="#Cerrar-Sesión" class="hidden md:flex text-label text-black hover:text-gray-400 items-center gap-2">
          <font-awesome-icon :icon="['fas', 'angle-left']" class="border py-1 rounded-sm" />
          Cerrar Sesión
        </a>
        <!--  -->
        <div class="hidden md:flex users-main text-label cursor-pointer" data-modal-target="modal-NombrePerfil" data-modal-toggle="modal-NombrePerfil">
          <span class="img-users"><img src="@/assets/img/usuario.webp" alt="Logo" class="h-10" /></span>
          Andrés Torres
        </div>
        <!-- Menu mobile -->
        <div class="flex md:hidden">
          <button class="border p-1 rounded-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            @click="$emit('toggleSidebar')">
            <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
          </button>
        </div>
        <button id="dropdownNombrePefil" data-dropdown-toggle="dropdown"
          class="md:hidden border rounded-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500" type="button">
          <div class="flex users-main text-label justify-normal">
            <span class="img-users size-[33px] overflow-hidden rounded-full"><img src="@/assets/img/usuario.webp"
                alt="Logo" class="w-full" /></span>
            <font-awesome-icon :icon="['fas', 'angle-down']" size="12px" />
          </div>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden bg-white border rounded-lg shadow-custom w-44 px-3">
          <ul class="py-2 text-sm text-gray-700  flex flex-col divide-y-2 divide divide-gray-200"
            aria-labelledby="dropdownNombrePefil">
            <li class="py-3" data-modal-target="modal-NombrePerfil" data-modal-toggle="modal-NombrePerfil">
              <p class="text-label text-black"><strong>Andrés Obregón</strong> </p>
            </li>
            <li class="py-3 ">
              <p class="text-label text-black">Plan: <strong class="text-principal">Premiun</strong> </p>
            </li>
            <li class="py-3 ">
              <a href="#Cerrar-Sesión" class="text-label text-black hover:text-gray-400 flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="border py-1 rounded-sm" />
                Cerrar Sesión
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </header>

  <!-- Main modal -->
  <div id="modal-NombrePerfil" tabindex="-1" aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Editar nombre de la cuenta
          </h3>
          <button type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="modal-NombrePerfil">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form class="p-4 md:p-5">
          <div class="block">
            <div class="c-dates">
              <label for="text" class="label-input">Nombre: <strong>Andrés Obregón</strong></label>
              <div class="mt-2">
                <input type="text" name="text" required placeholder="Reemplazar nombre" class="t-input" />
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <button type="submit" class="btn mt-5">
              Guardar
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
defineEmits(["toggleSidebar"]);

</script>
