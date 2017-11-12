import Vuex from 'vuex'
import Vue from 'vue'
import home from '../page/home/module.js'
import city from '../page/city/module.js'
import beijing from '../page/beijing_scenic/module.js'
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		home:home,
		city:city,
		beijing:beijing
	}
})











