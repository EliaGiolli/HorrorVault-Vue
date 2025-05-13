
//import di librerie esterne
import { createRouter, createWebHistory } from 'vue-router'

// Importa le tue views (pagine)
import Homepage from '../views/Homepage.vue'
import About from '../views/About.vue'
import HorrorFilms from '../views/HorrorFilms.vue'
import FilmList from '../views/FilmList.vue'
import Contacts from '../views/Contacts.vue'

// Crea il router
const routes = [
  { path: '/', component: Homepage },
  { path: '/about', component: About },
  { path: '/horror', component: HorrorFilms },
  { path: '/films', component: FilmList },
  { path: '/contacts', component: Contacts}
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})