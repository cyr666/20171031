<template>
	<div>
		<citySearch/>
		<cityList/>
		<cityAside /><!--@ChangeHeight = "handleHeight"-->
	</div>
</template>

<script>
	import CitySearch from './citydomestic/CitySearch';
	import CityAside from './citydomestic/CityAside';
	import CityList from './citydomestic/CityList';
	export default{
		components:{
			citySearch: CitySearch,
			cityAside: CityAside,
			cityList: CityList
		}
//		methods:{
//			handleHeight(top){
//				this.$emit("ChangeTop",top)
//			}
//		}
	}
</script>

<style>
</style>