import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // 🔹 Si entra a la raíz, redirige a /bienvenido
  { path: '/', redirect: '/bienvenido' },

  // 🔹 Vista de login
  { 
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Auth/login.vue')
  },

  // 🔹 Dashboard o vista principal protegida
  { 
    path: '/bienvenido',
    name: 'Bienvenido',
    component: () => import('@/components/DashboardLayout.vue'),
    meta: { requiresAuth: false } // ✅ Protegida con token
  },

  // 🔹 Cualquier ruta inválida
  { path: '/:pathMatch(.*)*', redirect: '/bienvenido' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 🚦 Middleware global de autenticación
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  // 1️⃣ Si la ruta necesita autenticación y NO hay token → redirige a login
  if (to.meta.requiresAuth && !token) {
    next("/login");
  } 
  // 2️⃣ Si el usuario ya está autenticado e intenta ir a /login → redirige al dashboard
  else if (to.path === "/login" && token) {
    next("/bienvenido");
  } 
  // 3️⃣ En cualquier otro caso → deja pasar
  else {
    next();
  }
});

export default router;
