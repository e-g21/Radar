<template>
  <h1 class="p-title">Cuenta del propietario </h1>
  <p class="p-text">Administra tu información</p>
  <div class="mt-10  sm:w-full sm:max-w-sm">
    <form action="#" method="POST" class="space-y-6">
      <div>
        <label for="email" class="label-input">Nombre de contacto</label>
        <div class="mt-2">
          <input id="email" type="text" name="text" required placeholder="Andrés Torres" class="t-input" />
        </div>
      </div>
      <div>
        <label for="email" class="label-input">Correo electrónico</label>
        <div class="mt-2">
          <input id="email" type="email" name="email" required autocomplete="email" placeholder="correo@gamil.com" class="t-input" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="label-input">Contraseña</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-gray-900 hover:text-principal">Cambiar</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" type="password" name="password" placeholder="*****" required autocomplete="current-password"
            class="t-input" />
        </div>
      </div>

      <div class="flex justify-center pt-5">
        <button type="submit" class="btn  w-full">
          Guardar Información
        </button>
      </div>
    </form>
  </div>
</template>
