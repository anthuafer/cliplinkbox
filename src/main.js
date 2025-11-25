import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Importar estilos globales con Tailwind
import './assets/main.css'

// Registrar Service Worker para PWA
import { registerSW } from 'virtual:pwa-register'

// Configuración del SW (autoUpdate)
const updateSW = registerSW({
    onNeedRefresh() {
        console.log('Nueva versión disponible. Refresca la app para actualizar.')
    },
    onOfflineReady() {
        console.log('La app está lista para funcionar offline.')
    },
})

// Crear instancia de Vue
const app = createApp(App)

// Integrar Pinia (estado global)
const pinia = createPinia()
app.use(pinia)

// Montar aplicación
app.mount('#app')
