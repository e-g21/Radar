// src/composables/useAuth.js
import { ref } from "vue";
import { useRouter } from "vue-router";
import authApi from "@/api/auth";

const user = ref(null);
const isAuthenticated = ref(false);
const loading = ref(false);
const error = ref(null);

export function useAuth() {
  const router = useRouter();

  // 🔹 Registro
  const register = async (formData) => {
    loading.value = true;
    error.value = null;

    try {
      const res = await authApi.register(formData);
      if (res.data.successful) {
        alert("✅ Registro exitoso. Ahora inicia sesión.");
      } else {
        throw new Error(res.data.message || "Error en el registro");
      }
    } catch (err) {
      error.value = err.response?.data?.message || "Error en el registro";
    } finally {
      loading.value = false;
    }
  };

   // 🔹 Login
  const login = async (formData) => {
    loading.value = true;
    error.value = null;

    try {
      const res = await authApi.login(formData);

      // Ajuste según estructura del backend
      if (res.data.successful && res.data.data.token) {
        const token = res.data.data.token;
        const userData = res.data.data.user;

        //  Guarda token y usuario
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));

        // Guardar en variables reactivas
        isAuthenticated.value = true;
        user.value = userData;

        router.push("/bienvenido"); // redirige
      } else {
        throw new Error(res.data.message || "Credenciales incorrectas");
      }
    } catch (err) {
      console.error(err);
      error.value = err.response?.data?.message || "Error al iniciar sesión";
    } finally {
      loading.value = false;
    }
  };

  // 🔹 Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    user.value = null;
    isAuthenticated.value = false;
    router.push("/login");
  };

  // 🔹 Verificar si el token sigue siendo válido
  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await authApi.getProfile();
      user.value = res.data.user;
      isAuthenticated.value = true;
    } catch {
      logout(); // Token inválido o expirado
    }
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    register,
    login,
    logout,
    checkAuth,
  };
}

// 🔹 Inicializar sesión si ya hay token guardado
const storedUser = localStorage.getItem("user");
const storedToken = localStorage.getItem("token");

if (storedUser && storedToken) {
  user.value = JSON.parse(storedUser);
  isAuthenticated.value = true;
}