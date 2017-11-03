<template>
	<div>
		<app-header/>
		<weekendsgo-content/>
	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import WeekendsgoComponent from "./Weekendsgo";
	export default {
	components:{
		"app-header":HeaderComponent,
		"weekendsgo-content": WeekendsgoComponent
	}
}
</script>

<style>
</style>

