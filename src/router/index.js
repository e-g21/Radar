import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', redirect: '/bienvenido' },

  { 
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Auth/login.vue')
  },

  { 
    path: '/bienvenido',
    name: 'Bienvenido',
    component: () => import('@/components/DashboardLayout.vue')
  },
  


  // Cualquier otra ruta inválida
  { path: '/:pathMatch(.*)*', redirect: '/bienvenido' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
