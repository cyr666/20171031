import axios from "axios"
export default{
	state:{
		swiperInfo:[],
		recommend:[],
		iconswiperInfo:[],
		iconswiperInfoSecond:[]
	},
	actions:{
		getHomeData(context) {
				axios.get("/static/index.json")
					.then((res) =>{
						if(res.status === 200){
							const {data} = res.data;
							context.commit("changeIndexInfo",data);
						}
					})
			}
	},
	mutations:{
		changeIndexInfo(state,data){
			state.swiperInfo = data.swiperInfo;
			state.recommend = data.recommend;
			state.iconswiperInfo = data.iconswiperInfo;
			state.iconswiperInfoSecond = data.iconswiperInfoSecond;
		}
	},
	getters:{
		shouldGetData(state){
			if(!state.swiperInfo.length
			&& !state.recommend.length){
				return true
			}else{
				return false
			}
			
		}
	}
}