import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Creation from '../views/Creation.vue'
import Contact from '../views/Contact.vue'
import Error from '../views/PageNotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/creation',
      name: 'creation',
      component: Creation
    }, {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path:'/:pathMatch(.*)*',
      name:'PageNotFound',
      component: Error
    }
  ]
})

export default router
