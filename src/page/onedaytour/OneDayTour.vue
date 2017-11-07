<template>
	<div>
		<headerconent/>	
		<onedaytourlist/>
		<ticket/>
		<pagecon/>
		<typefilter/>
	</div>
</template>

<script>
	import OneDayHeader from "./OneDayHeader";
	import OneDayTour_List from "./OneDayTour_List";
	import Ticket from "./Ticket";
	import PageCon from "./PageCon";
	import Typefilter from "./Typefilter";
	
	export default{
		components:{
			"headerconent":OneDayHeader,
			"onedaytourlist":OneDayTour_List,
			"ticket": Ticket,
			"pagecon": PageCon,
			"typefilter": Typefilter
		}
	}
</script>

<style>
</style>