<template>
    <div class="grid gap-2 mb-4 md:grid-cols-2 grid-cols-3">
        <h1 class="p-title max-md:col-span-2">Catálogo</h1>
        <div class="grid grid-cols-2 gap-2 col-span-1 items-center md:hidden">
            <button class="btn p-2 text-center" data-modal-target="agregarNuevoProducto"
                data-modal-toggle="agregarNuevoProducto"> <font-awesome-icon :icon="['fas', 'plus']" />
            </button>
            <!-- drawer init and toggle -->
            <button class="btn p-2 bg-gray-500 " type="button" data-drawer-target="drawer-swipe"
                data-drawer-show="drawer-swipe" data-drawer-placement="bottom" data-drawer-edge="true"
                data-drawer-edge-offset="bottom-[60px]" aria-controls="drawer-swipe">
                <font-awesome-icon :icon="['fas', 'filter']" />
            </button>
        </div>
        <div class="flex flex-1 me-3 justify-end max-md:hidden">
            <h4 class="p-title text-base max-ms:text-xs font-medium mt-1 me-3">Agregar nuevo producto</h4>
            <button class="btn text-end" data-modal-target="agregarNuevoProducto"
                data-modal-toggle="agregarNuevoProducto">
                <font-awesome-icon :icon="['fas', 'plus']" />
            </button>
        </div>
    </div>
    <div class="card-top max-sm:hidden">
        <div class="flex flex-1 items-center ">
            <h4 class="p-title text-base font-medium me-3">Filtros</h4>
            <div class="w-full flex flex-1 gap-4">
                <div class="c-dates m-0">
                    <fwb-input v-model="name" placeholder="Buscar producto">
                        <template #prefix>
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400 ms-3" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" />
                            </svg>
                        </template>
                    </fwb-input>
                </div>
                <div class="c-dates m-0 ">
                    <fwb-select v-model="selected" :options="sucursal" placeholder="Selecciona la sucursal" />
                </div>
                <!--  -->
                <div class="c-dates m-0">
                    <fwb-select v-model="selected" :options="sucursal" placeholder="Categoría" />
                </div>
            </div>
        </div>
        <!--  -->
        <div class="flex items-center max-sm:hidden">
            <h4 class="p-title text-base font-medium me-3">Acción en lote</h4>
            <!--  -->
            <div class="c-dates m-0">
                <fwb-select v-model="selected" :options="sucursal" placeholder="Categoría" />
            </div>
        </div>






    </div>
    <!-- drawer component -->
    <div id="drawer-swipe"
        class="md:hidden fixed z-40 w-full overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform bottom-0 left-0 right-0 translate-y-full bottom-[60px]"
        tabindex="-1" aria-labelledby="drawer-swipe-label">
        <div class="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700" data-drawer-toggle="drawer-swipe">
            <span
                class="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
            <h5 id="drawer-swipe-label"
                class="inline-flex items-center text-base text-gray-500 dark:text-gray-400 font-medium"><svg
                    class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 18 18">
                    <path
                        d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10ZM17 13h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" />
                </svg>Buscar por filtros</h5>
        </div>
        <div class="grid gap-4 p-4 divider border-b ">
            <div class="items-center">
                <h4 class="p-title text-base font-medium me-3">Filtros</h4>
                <div class="grid grid-cols-2 gap-3">
                    <div class="col-span-2 c-dates m-0">
                        <fwb-input v-model="name" placeholder="Buscar producto">
                            <template #prefix>
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400 ms-3"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" />
                                </svg>
                            </template>
                        </fwb-input>
                    </div>
                    <div class="c-dates m-0 ">
                        <fwb-select v-model="selected" :options="sucursal" placeholder="Selecciona la sucursal" />
                    </div>
                    <!--  -->
                    <div class="c-dates m-0">
                        <fwb-select v-model="selected" :options="sucursal" placeholder="Categoría" />
                    </div>
                    <div class="col-span-2 border-b pb-3">
                        <a href="#"
                            class="flex justify-end items-center gap-2 font-medium text-principal dark:text-blue-500 hover:underline"><font-awesome-icon
                                :icon="['fas', 'search']" /> Buscar</a>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="">
                <h4 class="p-title text-base font-medium me-3 ">Acción en lote</h4>
                <!--  -->
                <div class="c-dates m-0">
                    <fwb-select v-model="selected" :options="sucursal" placeholder="Categoría" />
                </div>
            </div>
        </div>
    </div>
    <!--  -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table class="min-w-[700px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class=" text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Acción
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Imagen
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Descripción
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Categoría
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Total
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Vistas
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-principal dark:text-blue-500 hover:underline">Editar</a>
                    </td>
                    <th class="px-6 py-4 font-medium text-gray-900 w-32">
                        <img src="@/assets/img/hombres.png" width="100px" alt="Logo" class="w-full hidden md:block" />
                    </th>
                    <td class="px-6 py-4">
                        Agua Minalba
                    </td>
                    <td class="px-6 py-4">
                        Agua Mineral de manantial
                    </td>
                    <td class="px-6 py-4">
                        Bebida
                    </td>
                    <td class="px-6 py-4">
                        15.00 $
                    </td>
                    <td class="px-6 py-4">
                        200
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
    <!--  -->
    <!-- Main modal -->
    <!-- Main modal -->
    <div id="agregarNuevoProducto" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <!-- Modal header -->
                <div
                    class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Nuevo Producto
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="crud-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <form class="p-4 md:p-5">
                    <div class="grid gap-2 mb-4 grid-cols-2">
                        <div class="col-span-2">
                            <div class="grid gap-4 grid-cols-2">
                                <div class="flex items-center justify-center w-full">
                                    <label for="dropzone-file"
                                        class="flex flex-col items-center justify-center w-full size-[100px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p class="mb-2 text-xs text-center text-gray-500">Click para subir imagen
                                            </p>
                                        </div>
                                        <input id="dropzone-file" type="file" class="hidden" />
                                    </label>
                                </div>
                                <!--  -->
                                <div class="c-dates m-0">
                                    <label for="text" class="label-input">Nombre del producto</label>
                                    <div class="mt-2">
                                        <input type="text" name="text" required placeholder="" class="t-input" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <div class="c-dates m-0">
                                <label for="precio" class="label-input">Precio</label>
                                <div class="mt-2">
                                    <input type="number" name="precio" required placeholder="$12.000" class="t-input" />
                                </div>
                            </div>
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <div class="c-dates m-0">
                                <label for="text" class="label-input">Categoría</label>
                                <select id="category"
                                    class=" mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected="">Selecciona Categoría</option>
                                    <option value="TV">TV/Monitors</option>
                                    <option value="PC">PC</option>
                                    <option value="GA">Gaming/Console</option>
                                    <option value="PH">Phones</option>
                                </select>
                            </div>

                        </div>
                        <div class="col-span-2">
                            <div class="c-dates m-0">
                                <label for="text" class="label-input">Descripción</label>
                                <div class="mt-2">
                                    <textarea class="w-full resize-none" name="quienes somos" id=""></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <button type="submit" class="btn mt-5">
                            Agregar al catálogo
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { FwbSelect, FwbInput } from 'flowbite-vue'

onMounted(() => {
    initFlowbite()
})
</script>