<template>
	<div>
		<div class = "city-header">
			<div class = "city-Return iconfont icon-fanhui"></div>
			<div class = "city-type">
				<span class = "domestic" @click = "handleTypeChange" Domestic = "true">国内</span>
				<span class = "foreign" @click = "handleTypeChange">海外</span>				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isshow:true
			}
		},
		methods:{
			handleTypeChange(e){
				const isDomestic = e.target.getAttribute("Domestic")
				this.isshow = isDomestic?true:false
				this.$emit("change",this.isshow)
			}
		}
	}
</script>

<style scoped>
	.city-header{
		width:100%;
		height:.88rem;
		background:#00bcd4;
		position:fixed;
		top:0;
		z-index:999
	}
	.city-Return{
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}
	.city-type{
		float:left;
		margin-top:.12rem;
		margin-left:.42rem;
		width:4.08rem;
		height:.6rem;
	}
	.domestic,.foreign{
		display:inline-block;
		margin-right:-3px;		
		width:2rem;
		line-height:.56rem;
		text-align:center;
		border:1px solid #fff;
		color:#fff;
	}
	
</style>