import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0', // 🔥 permite acceder desde cualquier IP (localhost, red, etc.)
    port: 5173,
    open: true, // abre el navegador automáticamente
    proxy: {
      '/api': {
        target: 'https://testapi.radarapp.net', // 🔹 tu API real
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api') // mantiene el prefijo /api
      }
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
