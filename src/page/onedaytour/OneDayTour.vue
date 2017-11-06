<template>
	<div>
		<headerconent/>	
		<onedaytourlist/>
	</div>
</template>

<script>
	import OneDayHeader from "./OneDayHeader";
	import OneDayTour_List from "./OneDayTour_List"
	export default{
		components:{
			"headerconent":OneDayHeader,
			"onedaytourlist":OneDayTour_List
		}
	}
</script>

<style>
</style>