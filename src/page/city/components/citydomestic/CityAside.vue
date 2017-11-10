<template>
	<div class = "cityaside-con">
		<div class = "cityaside" v-for = "(item,key) in ChinaCityInfo">{{key}}</div>
	</div>
</template>

<script>
	export default{
		computed:{
			ChinaCityInfo(){
				return this.$store.state.city.ChinaCityInfo
			}
		},
		mounted:function(){
			console.log(this.$store.state.city.ChinaCityInfo)
		}
	}
</script>

<style scoped>
	.cityaside-con{
		position: fixed;
		top:3.86rem;
		right:.1rem
	}
	.cityaside{
		width: .32rem;
	    line-height: .32rem;
	    padding-left: .2rem;
	    color: #00afc7;
	    font-size: .24rem;
	    text-align: center;
	}
</style>