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
	import Category from "./components/Icon_swiper";
	export default {
	components:{
		"index-header":HeaderComponent,
		"index-weekendsgo": WeekendsgoComponent,
		"index-swiper":SwiperComponent,
		"index-recommend":HotRecommend,
		"index-iconswiper":Category,
		"index-Activity":Activity
	},
	mounted:function(){
		console.log("fs")
	}
}
</script>

<style>
</style>

