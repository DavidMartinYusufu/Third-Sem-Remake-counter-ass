// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import about from "./components/About.vue"
import Counter from './components/Counter.vue';
import NotFound from './components/NotFound.vue';

const routes =  [
    {path: '/', component: Counter},
    {path: '/about', component: about},
    {path: '/:pathMatch(.*)*', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

createApp(App).use(router).mount('#app')
