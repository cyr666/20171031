
<template>
 	<header class="header">
 		<router-link to = '/'>
 			<div class="header-left iconfont icon-fanhui" @click="handleBackClick"></div>
 		</router-link>
 		<div class="header-title">
 			<input type="text" placeholder="输入城市\景点\游玩主题"/>
 		</div>
 		<div class="header-right">
 			<a class="header-search">搜索</a>
 		</div>
 	</header>
</template>

<script>
	export default {
		methods: {
			handleBackClick:function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.header {
		width:100%;
		height: .88rem;
		overflow: hidden;
		position:fixed;
		top:0;
		background: #00bcd4;
		z-index:9
	}
	.header-left {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}
	.header-title {
		position: absolute;
		left: .8rem;
		right: 1.02rem;
		top: .14rem;
	}
	.header-title input{
		width:100%;
		border:none;
		line-height: .6rem;
		background: #fff;
		border-radius: .06rem;
		text-indent: .2rem;
	}
	.header-right {
		float: right;
		line-height: .88rem;
		text-align: center;
		padding:0 .14rem;
	}
	.header-search {
		display: inline-block;
    	width: .74rem;
		color: #fff;
	}
</style>
