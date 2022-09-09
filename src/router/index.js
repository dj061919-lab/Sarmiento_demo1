import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../components/Home.vue'
import Personal from '../components/Personal.vue'
import Programming from '../components/Programming.vue'
import AboutView from '../components/AboutView.vue'
import Tip from '../components/Tip.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/programming',
      name: 'programming',
      component: Programming
    },
    {
      path: '/tip',
      name: 'tip',
      component: Tip
    },
  ]
})

export default router