import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import NaveComponent from '@/components/Nave.vue'
import BotComponent from "@/components/Bot.vue"
import Login from '@/components/login.vue'
import Register from '@/components/Register.vue'
import Home from '@/components/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Page,
      children: [
        {
          path: '/Nave',
          name: 'chat',
          component: NaveComponent
        },
        {
          path: '/Bot',
          name: 'Bot',
          component: BotComponent,
        },
        {
          path: '/Home',
          name: 'Home',
      
                component: Home,
        }
              ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
  ]
})


// let router = new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/login',
//       name: 'login',
//       component: Login
//     },
//     {
//       path: '/register',
//       name: 'register',
//       component: Register
//     },
 
//   ]
// })
// router.replace({ path: '/login', redirect: '/login' })
// export default router;

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})
