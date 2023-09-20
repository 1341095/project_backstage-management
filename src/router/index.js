import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout/index.vue'
import login from '@/views/login/index.vue'
import Home from '@/views/home/Home.vue'

// 异步加载定义组件
const Product = () => import('@/views/product/index.vue')
const List = () => import('@/views/product/list/index.vue')
const Category = () => import('@/views/product/category/index.vue')

const Order = () => import('@/views/order/index.vue')
const OrderList = () => import('@/views/order/list/index.vue')
const Collect = () => import('@/views/order/collect/index.vue')

const Advert = () => import('@/views/advert/index.vue')
const AdvertList = () => import('@/views/advert/list/index.vue')
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
      },
      { // 产品管理页面
        path: '/product',
        name: ' product',
        component: Product, // 出口是product
        children: [ // 三级路由
          {
            path: 'list', // 访问路径：/product/list
            name: 'list',
            component: List
          },
          {
            path: 'category', // 访问路径：/product/list
            name: 'category',
            component: Category
          }
        ]
      },
      { // 订单管理页面
        path: '/order',
        name: 'order',
        component: Order,
        children: [ // 三级路由
          {
            path: 'order-list',
            name: 'order-list',
            component: OrderList
          },
          {
            path: 'collect',
            name: 'collect',
            component: Collect
          }
        ]
      },
      { // 广告管理页面
        path: '/advert',
        name: 'advert',
        component: Advert,
        children: [ // 三级路由
          {
            path: 'advert-list',
            name: 'advert-list',
            component: AdvertList
          }
        ]
      }
    ]
  },
  { path: '/login', name: 'login', component: login }
]

const router = new VueRouter({
  routes
})

export default router
