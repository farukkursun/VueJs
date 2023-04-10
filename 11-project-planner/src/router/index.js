import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add',
    name: 'addproject',
    component: () => import('../views/AddProject.vue')
  },
  {
    path: '/projects/:id',
    name: 'editproject',
    component: () => import('../views/EditProject.vue'),
    props: true

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
