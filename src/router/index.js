import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'



const routes = [
  
  {
    path: '/',
    name: 'LoginDeep',
    component: () => import('../components/LoginDeep.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },

  {
    path: '/config',
    name: 'ConfParameters',
    component: () => import('../components/ConfParameters.vue')
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
