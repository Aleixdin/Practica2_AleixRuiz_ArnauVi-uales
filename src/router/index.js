import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
},
{
  path: '/Home',
  name: 'Home',
  component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
},
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/DyD',
    name: 'DyD',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DyD.vue')
  },
  {
  path: '/Empresa',
    name: 'Empresa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Empresa.vue')
  },
  {
    path: '/Tienda',
      name: 'Tienda',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Tienda.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    base: '/GameChicken/',
    routes
})

export default router
