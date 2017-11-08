import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Oneday from '@/page/onedaytour/OneDayTour'
import BeijingScenic from '@/page/beijing_scenic/BJScenic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/onedaytour',
      name: 'Oneday',
      component: Oneday
    },
    {
      path: '/BJScenic',
      name: 'BeijingScenic',
      component: BeijingScenic
    }
  ]
})
