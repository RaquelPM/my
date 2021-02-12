import Vue from 'vue'
import VueRouter from 'vue-router'
import info from '@/components/info.vue'
import academico from '@/components/academico.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/info',
    name: 'info',
    component: info
  },
  {
    path: '/academico',
    name: 'academico',
    component: academico
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
