<template>
	<div>
		<div class = "header-keywords">
			<input class = "city-keywords" placeholder="输入城市名或拼音"/>
		</div>
		<div class = "userPosition">您的位置</div>
		<div class = "location-con">
			<li class = "location-beijing">美国</li>
		</div>
		<div class = "hot-City">
			热门城市
		</div>
	</div>
</template>

<script>
</script>
<style scoped>
	.header-keywords{
		width:100%;
		padding:0 .2rem .1rem .2rem;
		background:#00bcd4;
		margin-top:.88rem
	}
	.city-keywords{
		width:90%;
		padding:.10rem 0 .10rem .1rem;
		text-align:center;
		border:none;
		border-radius:.08rem;
		font-size:.28rem;
	}
	.userPosition{
		padding-left:.3rem;
		line-height:.54rem;
		background:#e6eaea;
	}
	.location-con{
		padding:.04rem .5rem .26rem .2rem;
		border-top:1px solid #ccc;
		border-bottom:1px solid #ccc;
	}
	.location-beijing{
		list-style:none;
		margin-top:.2rem;
		line-height:.56rem;
		width:1.66rem;
		text-align:center;
		border:1px solid #00bcd4;
		border-radius:.08rem;
		color:#00bcd4;
	}
	.hot-City{
		padding-left:.3rem;
		line-height:.54rem;
		background:#e6eaea;
	}
</style>