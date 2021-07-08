import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Signup from '@/components/Login/Signup'
import ForgotPassword from '@/components/Login/ForgotPassword'
import Home from '@/components/Home'
import CreditosGrupales from '@/components/CreditosGrupales'
import Inspeccionar from '@/components/Inspeccionar'
import ControlDeCambios from '@/components/ControlDeCambios'
import ListadoDeSoftware from '@/components/ListadoDeSoftware'

Vue.use(Router)

export default new Router({
  routes: [
        {
            path: '/',
            name: 'signup',
            component: Signup
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: ForgotPassword
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/creditos-grupales',
            name: 'creditos-grupales',
            component: CreditosGrupales
        },
        {
            path: '/inspeccionar',
            name: 'inspeccionar',
            component: Inspeccionar
        },
        {
            path: '/control-de-cambios',
            name: 'control-de-cambios',
            component: ControlDeCambios
        },
        {
            path: '/listado-de-software',
            name: 'listado-de-software',
            component: ListadoDeSoftware
        }
    ]
})
