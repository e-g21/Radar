<template>
  <div v-if="vistaActiva === 'A'" class="f-perfil">
    <div class="content-banner" id="f-banner">
      <div class="flex-1 text-center">
        <!-- Banner comerciar -->
        <div class="flex  justify-center w-full">
          <label for="dropzone-file"
            class="flex flex-col w-full h-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-300">
            <div class="flex flex-col items-center justify-center pt-6 pb-6 ">
              <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <h2 class="p-title">Banner Comercial</h2>
              <p class="p-text mb-6">
                Foto de portada del banner de tu perfil comercial
              </p>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Haga Click para
                  subir</span> o arrastra y suelta</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
        <div class="logo-comercial cursor-pointer" data-tooltip-target="tooltip-edit" data-tooltip-placement="bottom">
          <label for="dropzone-file" class="cursor-pointer">
            <img src="@/assets/img/gs-logo.png" alt="Logo" class="w-full block" />
            <a class="absolute inset-x-0 bottom-0 text-xl text-white text-shadow-lg/30"><font-awesome-icon
                :icon="['fas', 'edit']" /></a>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
        <div id="tooltip-edit" role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-principal rounded-lg shadow-xs opacity-0 tooltip">
          Editar logo comercial
        </div>
      </div>
      <!--  -->
      <div class="w-full">
        <form action="#" method="POST" class="space-y-6 pt-10">
          <div class="grid md:grid-cols-2 grid-cols-1 gap-8 mt-19 w-full">
            <div class="c-perfil">
              <h4 class="p-title mb-4 text-lg">Datos de Sucursal</h4>
              <div class="c-dates">
                <label for="text" class="label-input">Nombre Comercial</label>
                <div class="mt-2">
                  <input type="text" name="text" required placeholder="Agregar tu nombre comercial" class="t-input" />
                </div>
              </div>
              <div class="c-dates">
                <label for="text" class="label-input">Categorías</label>
                <div class="mt-2 ">
                  <fwb-select v-model="selectedCategoria" :options="categorias" custom class="t-select"
                    placeholder="Seleccionar categorías" />
                </div>
              </div>
              <!--  -->
              <div class="c-dates">
                <label for="text" class="label-input">Configurar Horarios</label>
                <!-- Botón agregar -->
                <div class="relative">
                  <input @click="abrirFormulario()" type="text" placeholder="Agregar Horario"
                    class="t-input cursor-pointer mt-2 border-principal" />
                  <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                    <font-awesome-icon :icon="['fas', 'plus']" class="text-principal " />
                  </div>
                </div>

                <!-- Formulario (abre solo al presionar + Más o Editar) -->
                <div v-if="mostrarFormulario"
                  class="bg-white mt-6 p-4 border rounded-lg bg-gray-50 grid grid-cols-3 gap-4 shadow-custom">
                  <!-- Select de días -->
                  <div>
                    <label class="block text-sm font-medium mb-1">Días</label>
                    <select v-model="form.dias" class="w-full p-2 border rounded mb-3">
                      <option value="">Seleccione días</option>
                      <option value="lunes-viernes">Lunes a Viernes</option>
                      <option value="sabado-domingo">Sábado y Domingo</option>
                      <option value="lunes">Lunes</option>
                      <option value="martes">Martes</option>
                      <option value="miercoles">Miércoles</option>
                      <option value="jueves">Jueves</option>
                      <option value="viernes">Viernes</option>
                      <option value="sabado">Sábado</option>
                      <option value="domingo">Domingo</option>
                    </select>
                  </div>
                  <!-- Horas -->
                  <div>
                    <label for="end-time"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Desde</label>
                    <div class="relative">
                      <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                            clip-rule="evenodd" />
                        </svg>
                      </div>
                      <input type="time" v-model="form.desde" id="end-time" class="t-input" min="09:00" max="18:00"
                        value="00:00" required />
                    </div>
                  </div>
                  <!--  Hasta-->
                  <div>
                    <label for="end-time"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hasta</label>
                    <div class="relative">
                      <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                            clip-rule="evenodd" />
                        </svg>
                      </div>
                      <input type="time" v-model="form.hasta" id="end-time" class="t-input" min="09:00" max="18:00"
                        value="00:00" required />
                    </div>
                  </div>
                  <!-- Botones -->
                  <div class="flex justify-end space-x-3 col-span-3 items-center">
                    <a @click="cerrarFormulario" class=" font-medium text-gray-600 hover:underline cursor-pointer">
                      Cancelar
                    </a>
                    <button @click="guardarHorario" class="btn">
                      Guardar
                    </button>
                  </div>
                </div>
                <!-- Lista de horarios guardados -->
                <div v-if="horarios.length > 0" class="my-6">
                  <h3 class="p-title mb-4 text-lg">Horarios Configurados:</h3>
                  <ul class="flex flex-col divide-y-2 divide divide-gray-200">
                    <li v-for="(horario, index) in horarios" :key="index"
                      class="flex items-center justify-between py-3">
                      <span>
                        <strong>{{ horario.dias }}</strong>: {{ horario.desde }} - {{ horario.hasta }}
                      </span>
                      <div class="space-x-3">
                        <button class="text-principal hover:underline" @click="abrirFormulario(index)">
                          Editar
                        </button>
                        <button class="text-gray-600 hover:underline" @click="eliminarHorario(index)">
                          Eliminar
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!--  -->
              <div class="c-dates">
                <label for="text" class="label-input">Número de Teléfono de Whatsapp</label>
                <div class="grid grid-cols-4 gap-4 mt-2">
                  <fwb-select v-model="selectedCodigos" :options="agenciasTel" custom class="t-select"
                    placeholder="Código" />
                  <input type="number" required placeholder="000-00-00" class="t-input col-span-3" />
                </div>
              </div>
              <!--  -->
              <div class="c-dates">
                <label for="text" class="label-input">¿Quienes somos?</label>
                <div class="mt-2">
                  <textarea class="w-full resize-none" name="quienes somos" id=""></textarea>
                </div>
              </div>
            </div>
            <!--Datos Territorias -->
            <div class="c-perfil">
              <h4 class="p-title mb-4 text-lg ">Datos territoriales</h4>
              <!--  -->
              <div class="c-dates">
                <label for="text" class="label-input">Estado</label>
                <div class="mt-2">
                  <fwb-select v-model="selectedEstado" :options="estado" custom class="t-select"
                    placeholder="Seleccionar Estado" />
                </div>
              </div>
              <!--  -->
              <div class="c-dates">
                <label for="text" class="label-input">Municipio</label>
                <div class="mt-2">
                  <fwb-select v-model="selectedMunicipio" :options="municipio" custom class="t-select"
                    placeholder="Seleccionar Municipio" />
                </div>
              </div>
              <!--  -->
              <div class="c-dates">
                <label for="text" class="label-input">Parroquia</label>
                <div class="mt-2">
                  <fwb-select v-model="selectedParroquia" :options="parroquia" custom class="t-select"
                    placeholder="Seleccionar Parroquía" />
                </div>
              </div>
              <!--  -->
              <div class="c-dates">
                <label for="text" class="label-input">Ciudad</label>
                <div class="mt-2">
                  <fwb-select v-model="selectedCiudad" :options="ciudad" custom class="t-select"
                    placeholder="Seleccionar Ciudad" />
                </div>
              </div>
              <!--  -->
              <div class="c-dates">
                <label for="text" class="label-input">Dirección de sucursal</label>
                <div class="mt-2">
                  <input type="text" required placeholder="Dirección" class="t-input" />
                </div>
              </div>
              <!--  -->
            </div>
          </div>
          <div class="flex justify-end space-x-3 col-span-3 items-center">
            <a @click="mostrarVista('B')" class=" font-medium text-gray-600 hover:underline cursor-pointer">
              Cancelar
            </a>
            <button @click="mostrarVista(null)" class="btn text-end" type="submit">
              Guardar Información
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div v-else class="f-perfil">
    <div class="content-banner" id="f-banner">
      <div class="flex-1 text-center">
        <!-- Banner comerciar -->
        <div class="img-bannerComercial">
          <img src="@/assets/img/banner1.jpg" alt="bannerComercial">
        </div>
        <div class="logo-comercial">
          <img src="@/assets/img/gs-logo.png" alt="Logo" class="w-full block" />
        </div>
      </div>
      <!--  -->
      <div class="w-full">
        <form action="#" method="POST" class="space-y-6 md:pt-10 pt-3">
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-8 md:mt-19 w-full">
            <div class="c-perfil">
              <h4 class="p-title mb-4 text-lg">Datos de Sucursal</h4>
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 divide-y-4 ">
                  <tbody>
                    <tr class="bg-white border-gray-200 max-lg:border-b max-sm:grid w-full">
                      <th scope="row" class="p-3 max-sm:px-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Nombre Comercial
                      </th>
                      <td class="p-3 max-sm:px-0 max-sm:pt-0">
                        Mango Bajito
                      </td>
                    </tr>
                    <!--  -->
                    <tr class="bg-white border-gray-200 max-lg:border-b max-sm:grid w-full">
                      <th scope="row" class="p-3 max-sm:px-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Categorías
                      </th>
                      <td class="p-3 max-sm:px-0 max-sm:pt-0">
                        Comida, Restaurant
                      </td>
                    </tr>
                    <!--  -->
                    <tr class="bg-white border-gray-200 max-lg:border-b max-sm:grid w-full">
                      <th scope="row" class="p-3 max-sm:px-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Horarios
                      </th>
                      <td class="p-3 max-sm:px-0 max-sm:pt-0">
                        <strong>Lunes a Viernes</strong>: <br> 08:00 AM - 06:00 PM
                      </td>
                    </tr>
                    <!--  -->
                    <tr class="bg-white border-gray-200 max-lg:border-b max-sm:grid w-full">
                      <th scope="row" class="p-3 max-sm:px-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Número de Whatsapp
                      </th>
                      <td class="p-3 max-sm:px-0 max-sm:pt-0">
                        0412-333-00-00
                      </td>
                    </tr>
                    <!--  -->
                    <tr class="bg-white border-gray-200 max-lg:border-b max-sm:grid w-full">
                      <th scope="row" class="p-3 max-sm:px-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ¿Quienes somos?
                      </th>
                      <td class="p-3 max-sm:px-0 max-sm:pt-0">
                        Lorem ipsum dolor sit amet consectetur, adipiscing elit donec mollis egestas conubia, pharetra
                        nulla congue arcu.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
            <!--Datos Territorias -->
            <div class="c-perfil">
              <h4 class="p-title mb-4 text-lg ">Datos territoriales</h4>
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <tbody>
                    <tr class="bg-white border-gray-200 max-lg:border-b max-sm:grid w-full">
                      <th scope="row" class="p-3 max-sm:px-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Estado
                      </th>
                      <td class="p-3 max-sm:px-0 max-sm:pt-0">
                        Falcón
                      </td>
                    </tr>
                    <!--  -->
                    <tr class="bg-white border-gray-200 max-lg:border-b max-sm:grid w-full">
                      <th scope="row" class="p-3 max-sm:px-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Municipio
                      </th>
                      <td class="p-3 max-sm:px-0 max-sm:pt-0">
                        Carirubana
                      </td>
                    </tr>
                    <!--  -->
                    <tr class="bg-white border-gray-200 max-lg:border-b max-sm:grid w-full">
                      <th scope="row" class="p-3 max-sm:px-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Parroquia
                      </th>
                      <td class="p-3 max-sm:px-0 max-sm:pt-0">
                       Punta Cardón
                      </td>
                    </tr>
                    <!--  -->
                    <tr class="bg-white border-gray-200 max-lg:border-b max-sm:grid w-full">
                      <th scope="row" class="p-3 max-sm:px-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Ciudad
                      </th>
                      <td class="p-3 max-sm:px-0 max-sm:pt-0">
                        Punto Fijo
                      </td>
                    </tr>
                    <!--  -->
                    <tr class="bg-white border-gray-200 max-lg:border-b max-sm:grid w-full">
                      <th scope="row" class="p-3 max-sm:px-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Dirección de sucursal
                      </th>
                      <td class="p-3 max-sm:px-0 max-sm:pt-0">
                        CC Las virtudes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
            </div>
          </div>
          <div class="flex justify-end space-x-3 col-span-3 items-center">
            <button @click="mostrarVista('A')" class="btn text-end" type="submit">
              Editar Perfil
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { FwbSelect } from 'flowbite-vue'
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
});

const selectedCategoria = ref('');
const selectedEstado = ref('');
const selectedMunicipio = ref('');
const selectedParroquia = ref('');
const selectedCiudad = ref('');
const selectedCodigos = ref('');
//Categorias
const categorias = [
  // ¡ESTA ES LA ÚNICA OPCIÓN QUE DEBE TENER value: ''!
  { value: '', name: 'Seleccionar' },
  // Tus opciones reales
  { value: 'food', name: 'Comida' },
  { value: 'cal', name: 'Calzados' },
  { value: 'car', name: 'Vehículos' },
]
//Estado
const estado = [
  { value: 'fal', name: 'Falcón' },
  { value: 'car', name: 'Carabobo' },
  { value: 'ama', name: 'Amazonas' },
]
//Municipio
const municipio = [
  { value: 'alt', name: 'Alto Orinoco' },
  { value: 'Fe', name: 'Federación' },
  { value: 'Bo', name: 'Bolívar' },
]
//Parroquia
const parroquia = [
  { value: 'Mi', name: 'Mitare' },
  { value: 'rio', name: 'Río Seco' },
  { value: 'snt', name: 'Santa Ana' },
]
//Ciudad
const ciudad = [
  { value: 'bar', name: 'Barquisimeto' },
  { value: 'mar', name: 'Maracay' },
  { value: 'va', name: 'Valencia' },
]

const agenciasTel = [
  { value: '0412', name: '0412' },
  { value: '0424', name: '0424' },
  { value: '0414', name: '0414' },
  { value: '0416', name: '0416' },
  { value: '0426', name: '0426' },
]
const horarios = ref([])
const mostrarFormulario = ref(false)
const editIndex = ref(null)

const form = ref({
  dias: "",
  desde: "",
  hasta: "",
})

const abrirFormulario = (index = null) => {
  if (index !== null) {
    // Editar
    editIndex.value = index
    form.value = { ...horarios.value[index] }
  } else {
    // Nuevo
    editIndex.value = null
    form.value = { dias: "", desde: "", hasta: "" }
  }
  mostrarFormulario.value = true
}

const cerrarFormulario = () => {
  mostrarFormulario.value = false
}

const guardarHorario = () => {
  if (editIndex.value !== null) {
    horarios.value[editIndex.value] = { ...form.value }
  } else {
    horarios.value.push({ ...form.value })
  }
  cerrarFormulario()
}

const eliminarHorario = (index) => {
  horarios.value.splice(index, 1)
}

//FORMULARIO DE DATOS
// 1. Variable de Estado (ref)
// Inicializada en 'null' para que al inicio no se muestre ninguna vista.
const vistaActiva = ref(null);

// 2. Función de Conmutación
// Simplifica el manejo de clics: solo actualiza la variable de estado.
const mostrarVista = (vista) => {
  vistaActiva.value = vista;
};

</script>