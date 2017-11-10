import Vuex from 'vuex'
import Vue from 'vue'

import beijing_scenic from '../page/beijing_scenic/module.js'


Vue.use(Vuex);

export default new Vuex.Store({
	
	modules: {
//		home: home,
		beijing_scenic: beijing_scenic
	}
		
})











