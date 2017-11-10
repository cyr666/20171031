<template>
	<div>
		<headerconent/>	
		<!-- <onedaytourlist/> -->
		<list/>
	</div>
</template>

<script>
	import OneDayHeader from "./OneDayHeader";
	// import OneDayTour_List from "./OneDayTour_List";
	import list from "./list";
	//import iscroll from "iscroll";
	
	export default{
		components:{
			"headerconent":OneDayHeader,
			// "onedaytourlist":OneDayTour_List,
			"list":list
		}
	}
</script>

<style>
</style>