<template>
  <div class = "header">
  		<div class = "header-left">></div>
  		<div class = "header-middle">输入城市/景点/游玩主题</div>
  		<div class = "header-right">北京<span class = "header-city"></span></div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
	.header{
		height:.88rem;
		background:#00bcd4;
		
	}
	.header-left{
		float:left;
		width:.8rem;
		line-height:.88rem;
		padding:0 .2rem;
	}
	.header-middle{
		position:absolute;
		left:.8rem;
		right:1.36rem;
		top:.14rem;
		line-height:.6rem;
		background:#fff;
		border-radius:.06rem;
		text-indent:.2rem ;
	}
	.header-right{
		float:right;
		width:1.28rem;
		line-height:.88rem
	}
	.header-city::after{
		
	}
</style>