<template>
  <!-- Login -->
  <div class="view-login bg-gray-100">
    <div class="card bg-principal flex flex-col md:flex-row flex-wrap md:m-auto max-w-5xl w-full p-0 overflow-hidde ">
      <div class="md:w-[48%] w-full flex flex-col ">
        <div class="md:p-8 p-4 flex justify-between items-center">
          <a href="https://radarapp.net/"
            class="text-white hover:text-gray-400 flex items-center gap-2 text-[15px] max-sm:text-[12px]">
            <font-awesome-icon :icon="['fas', 'angle-left']" class="text-white border py-1 rounded-sm" />
            Volver a la página principal</a>
          <div class="flex items-center">
            <span class="font-bold text-white text-[15px] max-sm:text-[12px]">¡Síguenos!</span>
            <div class="flex">
              <a href="#tiktok" class="hover:scale-75 transition delay-150 duration-300 ease-in-out"><font-awesome-icon
                  :icon="['fab', 'facebook-f']" class="text-white text-[22px] max-sm:text-[14px]" /></a>
              <a href="#insta" class="hover:scale-75 transition delay-150 duration-300 ease-in-out"><font-awesome-icon
                  :icon="['fab', 'instagram']" class="text-white text-[22px] max-sm:text-[14px]" /></a>
              <a href="#face" class="hover:scale-75 transition delay-150 duration-300 ease-in-out"><font-awesome-icon
                  :icon="['fab', 'tiktok']" class="text-white text-[22px] max-sm:text-[14px]" /></a>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="flex md:flex-1 flex-col md:mt-14 mt-5">
          <h1 class="font-bold text-white text-center text-[43px] mt-auto hidden md:block">¡Registra tu comercio <br>
            <span class="text-miAmarillo">GRATIS!</span>
          </h1>
          <img src="@/assets/img/hombres.png" alt="Logo" class="w-full hidden md:block" />
          <img src="@/assets/img/Header-molvil-login.png" alt="img" class="w-full block md:hidden" />
        </div>
      </div>
      <!--  -->
      <div class="card bg-white flex flex-col md:justify-center sm:px-6 md:py-12 lg:px-8 flex-1">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src="@/assets/img/logo-radar.png" alt="Logo" class="h-10 mx-auto hidden md:block" />
        </div>
        <!-- Tabs header -->
        <div class="flex justify-center gap-4 md:mt-10 -mt-6 ">
          <button v-for="tab in tabs" :key="tab.key" @click="activeTab = tab.key" :class="[
            'rounded-full border transition sm:px-8 py-2 text-center font-semibold transition flex-1 md:flex-0 max-sm:text-[13px]',
            activeTab === tab.key
              ? 'btn-black'
              : 'btn-border bg-white'
          ]">
            {{ tab.label }}
          </button>
        </div>
        <!-- Tabs content -->
        <div class="p-2">
          <!-- Iniciar sesión -->
          <div v-if="activeTab === 'login'">
            <!-- Form Iniciar sesion-->
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" class="space-y-6" @submit.prevent="handleLogin">
                <div>
                  <label for="email" class="label-input">Tu Correo Electrónico</label>
                  <div class="mt-2">
                    <input id="email" v-model="loginForm.email" type="email" name="email" required autocomplete="email"
                      class="t-input" />
                  </div>
                </div>
                <!--  -->
                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="label-input">Contraseña</label>
                    <div class="text-sm">
                      <a href="#" class="font-semibold text-gray-900 hover:text-principal">Olvidaste la contraseña?</a>
                    </div>
                  </div>
                  <div class="mt-2">
                    <input  v-model="loginForm.password" type="password" name="password" required
                      autocomplete="current-password" class="t-input" />
                  </div>
                </div>

                <div class="flex justify-center pt-5"><!-- @click="irWelcome" -->
                  <button type="submit" class="btn shadow-miAmarillo px-20 py-4 w-full font-bold" :disabled="loading">
                    <span v-if="loading">Accediendo...</span>
                    <span v-else>Acceder</span>
                  </button>
                </div>
              </form>
              <p v-if="errorMessage" class="text-red-600 mt-2 text-center">{{ errorMessage }}</p>
            </div>
          </div>
          <!-- Registrarse -->
          <div v-if="activeTab === 'register'">
            <!-- Form Iniciar sesion-->
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" class="space-y-6" @submit.prevent="handleRegister">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label  class="label-input">Tu nombre *</label>
                    <div class="mt-2">
                      <input v-model="registerForm.name" type="text" required class="t-input" />
                    </div>
                  </div>

                  <div>
                    <label class="label-input">Teléfono *</label>
                    <div class="mt-2">
                      <input v-model="registerForm.phone_number" type="text" required class="t-input" />
                    </div>
                  </div>
                  <!--  -->
                  <!--  -->
                  <div class="col-span-2">
                    <label for="email" class="label-input">Tu Correo Electrónico *</label>
                    <div class="mt-2">
                      <input v-model="registerForm.email" type="email" name="email" required autocomplete="email"
                        class="t-input" />
                    </div>
                  </div>
                  <!--  -->
                  <div>
                    <div class="flex items-center justify-between">
                      <label for="password" class="label-input">Contraseña *</label>
                    </div>
                    <div class="mt-2">
                      <input  v-model="registerForm.password" type="password" name="password" required
                        autocomplete="current-password" class="t-input" />
                    </div>
                  </div>
                  <!--  -->
                  <div>
                    <div class="flex items-center justify-between">
                      <label for="password" class="label-input">Repetir contraseña*</label>
                    </div>
                    <div class="mt-2">
                      <input  v-model="registerForm.password_confirmation" type="password" name="password" required
                        autocomplete="current-password" class="t-input" />
                    </div>
                  </div>
                </div>
                <div class="flex justify-center pt-5">
                  <button type="submit" class="btn shadow-miAmarillo px-20 py-4 w-full font-bold" :disabled="loading">
                    <span v-if="loading">Registrando...</span>
                    <span v-else>Registrarme</span>
                  </button>
                </div>
                <p v-if="registerError" class="text-red-600 mt-2 text-center">{{ registerError }}</p>
                <p v-if="registerSuccess" class="text-green-600 mt-2 text-center">{{ registerSuccess }}</p>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
// Tabs
const tabs = ref([
  { key: 'login', label: 'Iniciar sesión' },
  { key: 'register', label: 'Registrarse' }
])
const activeTab = ref('login')

// AUTH
const { login, register, loading, error } = useAuth()
const router = useRouter()

/* ---------- LOGIN ---------- */
const loginForm = ref({
  email: '',
  password: ''
})
const loginError = ref('')

const handleLogin = async () => {
  loginError.value = ''
  if (!loginForm.value.email || !loginForm.value.password) {
    loginError.value = 'Completa correo y contraseña'
    return
  }

  try {
    await login(loginForm.value)
  } catch (err) {
    loginError.value = err?.response?.data?.message || 'Error al iniciar sesión'
  }
}

/* ---------- REGISTRO ---------- */
const registerForm = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  phone_number: '',
  image: ''
})
const registerError = ref('')
const registerSuccess = ref('')

const handleRegister = async () => {
  registerError.value = ''
  registerSuccess.value = ''

  if (registerForm.value.password !== registerForm.value.password_confirmation) {
    registerError.value = 'Las contraseñas no coinciden'
    return
  }

  try {
    await register(registerForm.value)
    registerSuccess.value = 'Registro exitoso. Ahora puedes iniciar sesión.'
    activeTab.value = 'login'

    // Limpiar formulario
    Object.keys(registerForm.value).forEach(key => registerForm.value[key] = '')
  } catch (err) {
    registerError.value = err?.response?.data?.message || 'Error al registrarse'
  }
}

/* ---------- OBSERVAR ERRORES GLOBALES ---------- */
watch(error, (val) => {
  if (activeTab.value === 'login') loginError.value = val
  else registerError.value = val
})
</script>
