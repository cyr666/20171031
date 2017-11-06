<template>
	<div>
		<index-header/>
		<index-swiper/>
		<index-iconswiper/>
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
	components:{
		"index-header":HeaderComponent,
		"index-weekendsgo": WeekendsgoComponent,
		"index-swiper":SwiperComponent,
		"index-recommend":HotRecommend,
		"index-iconswiper":iconswiper,
		"index-Activity":Activity
	},
	methods:{
		getHomeData:function() {
			
		}
	},
	mounted:function() {
		this.getHomeData()
//	  	axios.get('/?ID=12345')
//		    .then(function (response) {
//		    console.log(response);
//		    })
//		    .catch(function (error) {
//		    console.log(error);
//	    });

	}
}
</script>

<style>
</style>

