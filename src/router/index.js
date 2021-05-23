import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Movie',
    component: () => import('../views/movie/index.vue')
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () => import('../views/movie/index.vue')
  },
  {
   path: '/home',
   name: 'Home',
   component: () => import('../views/home/index.vue')
 },
 {
   path: '/new',
   name: 'New',
   component: () => import('../views/new/index.vue')
 },
 {
   path: '/my',
   name: 'My',
   component: () => import('../views/my/index.vue')
 }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'action'
})

export default router
