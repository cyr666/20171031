<template>
	<div class = "cityaside-con">
		<div class = "cityaside" v-for = "(item,key) in foreignInfo" @touchstart = "handleSureLetter">{{key}}</div>
	</div>
</template>

<script>
	export default{
		computed:{
			foreignInfo(){
				return this.$store.state.city.foreignInfo
			}
		},
		methods:{
			handleSureLetter(e){
				var top = 201;
				var num = Math.round((e.targetTouches[0].clientY - top)/16);
				var height = this.$store.state.city.foreign[num]-44;				
				document.documentElement.scrollTop = height
			}
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