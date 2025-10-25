<template>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-2 sm:gap-20 gap-2">
    <div class="card flex-1 sm:py-10 py-4 bg-gray-300 text-center">
      <h2 class="p-title max-sm:text-[22px] mb-4 sm:mb-10">Visualizaciones</h2>
      <h5 class="title">200</h5>
    </div>
    <div class="card flex-1 sm:py-10 py-4 bg-gray-300 text-center">
      <h2 class="p-title max-sm:text-[22px] mb-4 sm:mb-10">Ordenes</h2>
      <h5 class="title">30</h5>
    </div>
  </div>

  <div class="block mt-20">
    <h2 class="p-title mb-10">Ordenes</h2>

    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="min-w-[700px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class=" text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Titular
                </th>
                <th scope="col" class="px-6 py-3">
                    Fecha de Creación
                </th>
                <th scope="col" class="px-6 py-3">
                   Total
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Ana Martinez
                </th>
                <td class="px-6 py-4">
                    M25 abril 2025 - 8:45PM
                </td>
                <td class="px-6 py-4">
                    15.00$
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-principal dark:text-blue-500 hover:underline">Cambiar</a>
                </td>
            </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Ana Martinez
                </th>
                <td class="px-6 py-4">
                    M25 abril 2025 - 8:45PM
                </td>
                <td class="px-6 py-4">
                    15.00$
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-principal dark:text-blue-500 hover:underline">Cambiar</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  </div>
</template>

<script setup>
defineEmits(["toggle-menu"]);
</script>
