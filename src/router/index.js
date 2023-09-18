import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout/index.vue'
import login from '@/views/login/index.vue'
import Home from '@/views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layout,
    // 二级路由，二级路由的出口在layout里
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      }
    ]
  },
  { path: '/login', name: 'login', component: login }
]

const router = new VueRouter({
  routes
})

export default router
