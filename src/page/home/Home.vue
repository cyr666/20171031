<template>
	<div>
		<app-header/>
		<swiper-content/>
		<Category/>
		<Activity/>
		<hot-recommend/>
		<weekendsgo-content/>
	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import WeekendsgoComponent from "./Weekendsgo";
	import SwiperComponent from "./Swiper";
	import Activity from "./Activity";
	import HotRecommend from "./Recommend";
	import Category from "./Category";
	export default {
	components:{
		"app-header":HeaderComponent,
		"weekendsgo-content": WeekendsgoComponent,
		"swiper-content":SwiperComponent,
		"hot-recommend":HotRecommend,
		"Category":Category,
		"Activity":Activity
	}
}
</script>

<style>
</style>

