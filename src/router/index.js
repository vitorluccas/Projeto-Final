import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cronograma from '../views/Cronograma.vue'
import Agenda from '../views/Agenda.vue'
import Sobre from '../views/Sobre.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cronograma',
    name: 'Cronograma',
    component: Cronograma
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: Agenda
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router