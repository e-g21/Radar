// src/api/auth.js
import axios from "axios";

// 🔹 Base URL general de tu API
//const API_URL = "https://testapi.radarapp.net/api/usuarios";
const API_URL = "/api/usuarios";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// 🔹 Interceptor para agregar token automáticamente si existe
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default {
  // 🔸 Endpoint de registro: POST https://testapi.radarapp.net/api/usuarios/registro
  register(data) {
    return api.post("/registro", data);
  },

  // 🔸 Endpoint de login: POST https://testapi.radarapp.net/api/usuarios/login
  login(data) {
    return api.post("/login", data);
  },

  // 🔸 (Opcional) Obtener perfil de usuario autenticado
  getProfile() {
    return api.get("/perfil");
  },
};