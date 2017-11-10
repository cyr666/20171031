<template>
	<div>
		<citySearch/>
		<cityList/>
		<cityAside @ChangeHeight = "handleHeight"/>
	</div>
</template>

<script>
	import CitySearch from './cityfoeign/CitySearch';
	import CityAside from './cityfoeign/CityAside';
	import CityList from './cityfoeign/CityList';
	export default{
		components:{
			citySearch: CitySearch,
			cityAside: CityAside,
			cityList: CityList
		},
		methods:{
			handleHeight(top){
				this.$emit("ChangeTop",top)
			}
		}
	}
</script>

<style>
</style>