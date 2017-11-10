import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Oneday from '@/page/onedaytour/OneDayTour'
import City from '@/page/city/city'
import search from '@/page/search/Search'
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
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
