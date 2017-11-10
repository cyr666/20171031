<template>
	<div class = "HotRecommend-con">
		<p class = "hot-title">热销推荐</p>
		<ul class = "hotlist">
			<li class = "listElem" v-for = "item in recommend" :key = "item.id">
				<div class = "hot-img-con">
					<img :src="item.imgUrl" :alt="item.title"/>
				</div>
				<div class = "hot-ticket-desc">
					<p class = "hot-ticket-title" >{{item.title}}</p>
					<p class = "attraction-desc">{{item.desc}}</p>
					<p class = "hot-ticket-price"><span class = "price-symbol">￥</span><span class = "price-num">{{item.price}}</span>起</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		computed:{
			recommend(){
				return this.$store.state.home.recommend;
			}
		}
	}
</script>

<style scoped>
	.HotRecommend-con{
		clear: both;
		width:100%;
		background:#eee;
	}
	.hot-title{
		overflow: hidden;
		width:5.6rem;
		height:.8rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding-left: .26rem;
		line-height:.8rem;
		color:#212121;
	}
	.hotlist{
		/*width:6.4rem;*/
		height:9.4rem;
	}
	.listElem{
		/*width:5.92rem;*/
		height:1.4rem;
		padding:12px;
		background:#fff;
		border-bottom:1px solid #CCCCCC
	}
	.hot-img-con{
		float:left;
	}
	.hot-img-con img{
		width:1.4rem;
		height:1.4rem;
	}
	.hot-ticket-desc{
		float:left;
		margin-left:10px;
	}
	.hot-ticket-title{
		font-size:0.32rem;
		height: 0.36rem;
		line-height: 0.36rem;
		width:4.32rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.attraction-desc{
		overflow: hidden;
		width:4.32rem;
		height:.6rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height:.6rem;
		font-size:0.28rem;
		color:#CACACA
	}
	.hot-ticket-price{
		line-height:0.44rem;
		color:#CACACA;
	}
	.price-symbol{
		color:#FB6700;
	}
	.price-num{
		font-size:.44rem;
		color:#FB6700;
	}
</style>