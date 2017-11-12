import axios from 'axios'

export default {
	state: {
		bigitem: [],
		ticket:[]
	},
	actions: {
		getTicketInfo(context) {
			axios.get('/static/scenic.json')
				.then((response) => {
					if (response.status === 200) {
						const {data}  = response.data;
						context.commit("changeTicketInfo", data);
					}
				})
		}
	},
	mutations: {
		changeTicketInfo(state, data) {
			state.bigitem = data.bigitem;
			state.ticket = data.ticket;
		},
		refreshInfo(state, data) {
			state.bigitem.push(...state.bigitem);
		}
	},
	getters: {
		shouldGetTicketData(state) {
			if (!state.bigitem.length &&
				!state.ticket.length) {
				return true
			}else {
				return false;
			}
		}
	}
}