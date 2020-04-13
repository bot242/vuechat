import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import NaveComponent from '@/components/Nave.vue'
import BotComponent from "@/components/Bot.vue"
import Login from '@/components/login.vue'
import Register from '@/components/Register.vue'
import Home from '@/components/Home.vue'
import WidgetTab from '@/components/WidgetTab.vue'
import Embed from '@/components/Embed.vue'
import SampleTest from '@/components/SampleTest.vue'
import Testing from '@/components/Testing'
import Testing1 from '@/components/Testing1'
import Chat from '@/components/Chat'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
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
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home,
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    {
      path: '/Widget',
      name: 'widget',
      component: WidgetTab,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Embed',
      name: 'Embed',
      component: Embed,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Script',
      name: 'Script',
      component: Testing,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '',
      name: 'Publish',
      component: Testing1,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Nave',
      name: 'Nave',
      component: NaveComponent,
      meta: {
        requiresAuth: true
      }
    },
    // {
    //   path: '/Scrip',
    //   name: 'Scrip',
    //   component: Scrip,
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    {
      path: '/sample',
      name: 'Sample',
      component: SampleTest,

    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,

    },
    {
      path: '/Bot',
      name: 'Bot',
      component: BotComponent,
      meta: {
        requiresAuth: true
      }
    },

  ]
})
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


export default router


