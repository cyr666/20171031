<template>
	<div class="onedaytour">
		<headerconent/>	
		<list/>
		<ticket :ticketInfo="ticketInfo" :ticketInfoSecond="ticketInfoSecond"/>
		<typefilter/>
	</div>
</template>

<script>
	import OneDayHeader from "./OneDayHeader";
	import list from "./list";
	import Ticket from "./Ticket";
	import Typefilter from "./Typefilter";
	import axios from "axios";
	
	export default{
		
		data() {
			return {
				ticketInfo: [],
				ticketInfoSecond: []
			}
		},
		
		components:{
			"headerconent":OneDayHeader,
//			"onedaytourlist":OneDayTour_List,
			"ticket": Ticket,
			"typefilter": Typefilter,
			"list":list
		},
		
		methods: {
			
			getOneDayTourData() {
				axios.get('/static/index.json')
					.then(this.handleGetData.bind(this))
			},
	
			handleGetData(response) {
				if (response.status === 200) {
					const {data}  = response.data;
					this.ticketInfo = data.ticketInfo;
					this.ticketInfoSecond = data.ticketInfoSecond;
				}
			}
			
		},
		
		mounted:function() {
			this.getOneDayTourData()
		}
		
	}
</script>

<style>
	html,body {
		height: 100%;
	}
	#app {
		height: 100%;
	}
	.onedaytour {
		position: relative;
		height: 100%;
	}
</style>