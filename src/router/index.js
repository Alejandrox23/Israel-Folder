// Importamos funciones necesarias de vue-router
import { createRouter, createWebHistory } from 'vue-router'

// Importamos las vistas que vamos a mostrar
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto.vue'

// Definimos las rutas de la aplicación
const routes = [
  {
    path: '/',          // URL
    component: Home     // Qué componente se muestra
  },
  {
    path: '/contacto',
    component: Contacto
  }
]

// Creamos el router
const router = createRouter({
  history: createWebHistory(), // Permite URLs limpias (sin #)
  routes                        // Le pasamos nuestras rutas
})

// Exportamos el router para usarlo en main.js
export default router