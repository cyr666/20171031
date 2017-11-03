<template>
	<app-header/>
	<weekendsgo-content/>
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

