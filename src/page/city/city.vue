<template>
	<div>
		<cityHeader @change = "handleChangeType"/>
		<cityDomestic v-if = "isshow"/>
		<cityForeign v-else/>
	</div>
</template>

<script>
	import CityHeader from "./components/CityHeader";
	import CityDomestic from "./components/CityDomestic";
	import CityForeign from "./components/CityForeign";
	export default {
		data(){
			return {
				isshow:true
			}
		},
		components:{
			cityHeader:CityHeader,
			cityDomestic:CityDomestic,
			cityForeign:CityForeign
		},
		mounted:function(){
			if(!this.$store.state.city.hotCityInfo.length){
				this.$store.dispatch("getHotcityData")
			}
		},
		methods:{
			handleChangeType(e){
				if(e){
					this.isshow = true
				}else{
					this.isshow = false
				}
			}
		}
	}
</script>

<style>
</style>
