<template>
	<div class = "HotRecommend-con">
		<p class = "hot-title">热销推荐</p>
		<ul class = "hotlist">
			<li class = "listElem">
				<div class = "hot-img-con">
					<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="故宫">
				</div>
				<div class = "hot-ticket-desc">
					<p class = "hot-ticket-title">故宫</p>
					<p class = "attraction-desc">东方宫殿建筑代表，世界宫殿建筑代表</p>
					<p class = "hot-ticket-price"><span class = "price-symbol">￥</span><span class = "price-num">20</span>起</p>
				</div>
			</li>
			<li class = "listElem">
				<div class = "hot-img-con">
					<img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_140x140_97813766.jpg" alt="八达岭长城">
				</div>
				<div class = "hot-ticket-desc">
					<p class = "hot-ticket-title">八达岭长城</p>
					<p class = "attraction-desc">不到长城非好汉</p>
					<p class = "hot-ticket-price"><span class = "price-symbol">￥</span><span class = "price-num">25</span>起</p>
				</div>
			</li>
			<li class = "listElem">
				<div class = "hot-img-con">
					<img src="http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg" alt="颐和园">
				</div>
				<div class = "hot-ticket-desc">
					<p class = "hot-ticket-title">颐和园</p>
					<p class = "attraction-desc">保存完整的一座皇家行宫御苑</p>
					<p class = "hot-ticket-price"><span class = "price-symbol">￥</span><span class = "price-num">23.2</span>起</p>
				</div>
			</li>
			<li class = "listElem">
				<div class = "hot-img-con">
					<img src="http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg" alt="北京欢乐谷">
				</div>
				<div class = "hot-ticket-desc">
					<p class = "hot-ticket-title">北京欢乐谷</p>
					<p class = "attraction-desc">七大主题园区带你畅想北京欢乐谷</p>
					<p class = "hot-ticket-price"><span class = "price-symbol">￥</span><span class = "price-num">20</span>起</p>
				</div>
			</li>
			<li class = "listElem">
				<div class = "hot-img-con">
					<img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_140x140_eae81520.jpg" alt="慕田峪长城">
				</div>
				<div class = "hot-ticket-desc">
					<p class = "hot-ticket-title">慕田峪长城</p>
					<p class = "attraction-desc">秀美长城，关键是人少</p>
					<p class = "hot-ticket-price"><span class = "price-symbol">￥</span><span class = "price-num">20</span>起</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	
</script>

<style scoped>
	.HotRecommend-con{
		clear: both;
		width:100%;
		background:#eee;
	}
	.hot-title{
		height:.8rem;
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
		line-height: 0.36rem;
	}
	.attraction-desc{
		overflow: hidden;
		width:4.32rem;
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