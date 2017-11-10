import axios from "axios"
export default{
	state:{
		hotCityInfo:[],
		ChinaCityInfo:[],
		alphabet:[]
	},
	actions:{
		getHotcityData(context){
			axios.get('/static/city.json')
				.then((res)=>{
					if(res.status === 200){
						const{data} = res.data;
						context.commit("handleHotcityData",data)
					}
				
				})
		}
	},
	mutations:{
		handleHotcityData(state,data){
			state.hotCityInfo = data.hotCityInfo;
			state.ChinaCityInfo = data.ChinaCityInfo;
		}
	},
	getters:{
		
	}
}
