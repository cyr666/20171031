import Vuex from 'vuex'
import Vue from 'vue'
import axios from "axios"


Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		ticket:[]
	},
	actions: {
		getTicket(context) {
			axios.get('/static/scenic.json')
				.then((response) => {
					if (response.status === 200) {
						const {data}  = response.data;
						context.commit("changeTicket", data.ticket);
						console.log(data.ticket);
					}
				})
		}
	},
	mutations: {
		changeTicket(state, data) {
			state.ticket = data
		}
	},
	getters: {

	}
		
})











