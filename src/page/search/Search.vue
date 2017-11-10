<template>
	<div>
		 <search-list/> 
		<!--<list/>-->
	</div>
</template>

<script>
    import SearchComponent from "./searchList";
//	import ListComponent from "./list";
	export default {
	components:{
		 "search-list": SearchComponent
//		"list": ListComponent
	}
}
</script>

<style>
</style>

