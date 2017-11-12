<template>
	<div>
		<app-header/>
		<ticketList/>
		<BeijingScenic/>
	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import TicketList from "./TicketList";
	import BeijingScenic from "./BeijingScenic";
	
	export default {
		components:{
			"app-header":HeaderComponent,
			"ticketList": TicketList,
			"BeijingScenic":BeijingScenic
		},
		mounted() {
			if (this.$store.getters.shouldGetTicketData) {
				this.$store.dispatch("getTicketInfo");
			}
		}
	}
</script>

<style>
</style>

