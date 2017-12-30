import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Manual from '@/components/Manual'

import DashboardLayout from '@/components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
//import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from '@/components/Dashboard/Views/Overview.vue'
import Noticias from '@/components/Dashboard/Views/Noticias.vue'
import Mapas from '@/components/Dashboard/Views/Mapas.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/manual',
      name: 'Manual',
      component: Manual
    },
    {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'noticias',
        name: 'noticias',
        component: Noticias
      },
      {
        path: 'mapas',
        name: 'mapas',
        component: Mapas
      }
    ]
	}
  ]
})
