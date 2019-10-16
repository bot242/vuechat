import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "@/components/login.vue"
import SignupComponent from "@/components/signup.vue"
import SecureComponent from "@/components/secure.vue"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [        
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        },
        {
            path:"/signup",
            name:"signup",
            component:SignupComponent
        }
    ]
})