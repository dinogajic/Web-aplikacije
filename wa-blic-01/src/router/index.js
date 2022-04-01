import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('../views/Home.vue')
},

//details

{
  path: "/:url",
  name: "Details",
  component: () => import('../views/Details.vue'),
  props: true
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
