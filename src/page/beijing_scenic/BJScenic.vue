<template>
	<div>
		<app-header/>
		<BeijingScenic :ticket = "this.$store.state.ticket"/>
	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import BeijingScenic from "./BeijingScenic";
import axios from "axios";

	export default {

		components:{
			"app-header":HeaderComponent,
			"BeijingScenic":BeijingScenic
		},
		

		mounted:function(){
			// if(!this.$store.state.ticket.length){
			 	this.$store.dispatch("getTicket");
			// }
		}
	}
</script>

<style>
</style>

