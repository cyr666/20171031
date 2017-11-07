<template>
	<div>
		<index-header/>
		<index-swiper/>
		<index-iconswiper :iconswiperInfo="iconswiperInfo" :iconswiperInfoSecond="iconswiperInfoSecond"></index-iconswiper>
		<index-Activity/>
		<index-recommend/>
		<index-weekendsgo/>
	</div>
</template>

<script>
	import HeaderComponent from "./components/Header";
	import WeekendsgoComponent from "./components/Weekendsgo";
	import SwiperComponent from "./components/Swiper";
	import Activity from "./components/Activity";
	import HotRecommend from "./components/Recommend";
	import iconswiper from "./components/Icon_swiper";
	import axios from "axios";
	
	export default {
		
		data() {
			return {
				iconswiperInfo: [],
				iconswiperInfoSecond: []
			}
		},
		
		components:{
			"index-header":HeaderComponent,
			"index-weekendsgo": WeekendsgoComponent,
			"index-swiper":SwiperComponent,
			"index-recommend":HotRecommend,
			"index-iconswiper":iconswiper,
			"index-Activity":Activity
		},
		methods:{
			getHomeData() {
				axios.get('/static/index.json')
					.then(this.handleGetDataSucc.bind(this))
					.catch(this.handleGetDataErr.bind(this))
			},
	
			handleGetDataSucc(response) {
				if (response.status === 200) {
					const {data}  = response.data;
					this.iconswiperInfo = data.iconswiperInfo;
					this.iconswiperInfoSecond = data.iconswiperInfoSecond;
				}
			},
	
			handleGetDataErr(err) {
				console.log(err);
			}
		},
		mounted:function() {
			this.getHomeData()
		}
		
	}
</script>

<style>
</style>

