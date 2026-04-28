import { createApp } from 'vue'
import App from './App.vue'
import { routes } from '@/routes'
import { store } from '@/store/store'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
