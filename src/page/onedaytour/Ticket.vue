<template>
	<div class="ticketContainer">
		<div class="ticketCon" v-show = "!show">
			<ul class="ticket-img-container">
				<li class="ticket-img-con" v-for="item in ticketInfo" :key="item.id">
					<div class="list-img-con">
						<img :src="item.imgUrl" class="ticket-img" :onerror="defaultImg" />
						<span class="list-bookingflag" :class= "item.classname">{{item.bookingflag}}</span>
					</div>
					<div class="list-product">
						<router-link :to="item.link" class="ticket-list">
							<h4 class="list-productname">{{item.productname}}</h4>
						</router-link>
						<div class="list-taglist">
							<span class="list-tagitemlight">{{item.setout}}</span>
							<span class="list-tagitem list-tagitemleft">{{item.outofpocket}}</span>
							<span class="list-tagitem list-tagitemright">{{item.shopping}}</span>
						</div>
						<div class="list-priceinfo">
							<span class="list-qunarprice">¥<em class="list-price">{{item.price}}</em></span>
							<span class="list-priceflag">起</span>
						</div>
						<div class="list-moreinfo">
							<span class="list-text">{{item.sold}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="ticketCon ticketConSecond" v-show = "show">
			<ul class="ticket-img-container">
				<li class="ticket-img-con" v-for="item in ticketInfoSecond" :key="item.id">
					<div class="list-img-con">
						<img :src="item.imgUrl" class="ticket-img" :onerror="defaultImg" />
						<span class="list-bookingflag" :class= "item.classname">{{item.bookingflag}}</span>
					</div>
					<div class="list-product">
						<router-link :to="item.link" class="ticket-list">
							<h4 class="list-productname">{{item.productname}}</h4>
						</router-link>
						<div class="list-taglist">
							<span class="list-tagitemlight">{{item.setout}}</span>
							<span class="list-tagitem list-tagitemleft">{{item.outofpocket}}</span>
							<span class="list-tagitem list-tagitemright">{{item.shopping}}</span>
						</div>
						<div class="list-priceinfo">
							<span class="list-qunarprice">¥<em class="list-price">{{item.price}}</em></span>
							<span class="list-priceflag">起</span>
						</div>
						<div class="list-moreinfo">
							<span class="list-text">{{item.sold}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="pageCon">
			<div class="pagination">
				<a href="#" class="prevPage" @click="handlePrevClick" :style = "{background:color1,border:border1,color:color3}">上一页</a>
				<span class="currentPage">{{page}}</span>
				<a href="#" class="nextPage" @click="handleNextClick" :style = "{background:color2,border:border2}">下一页</a>
			</div>
			<div class="page-text">去哪儿门票</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["ticketInfo","ticketInfoSecond"],
		data() {
			return {
				defaultImg: 'this.src="' + require('../img/index/iconswiperbackground.jpg') + '"',
				page:1,
				show:false,
				color1:"#bdbdbd",
				color2:"#fff",
				color3:"#fff",
				border1: "none",
				border2:".02rem solid #00afc7"
			}
		},
		
		methods: {
			handlePrevClick() {
				this.show = false;
				this.page = 1;
				this.color1 = "#bdbdbd";
				this.border1 = "none";
				this.color2 = "#fff";
				this.border2 = ".02rem solid #00afc7";
				this.color3 = "#fff";
			},
			
			handleNextClick() {
				this.show = true;
				this.page = 2;
				this.color1 = "#fff";
				this.border1 = ".02rem solid #00afc7";
				this.color2 = "#fff";
				this.border2 = ".02rem solid #00afc7";
				this.color3 = "#00afc7";
			}
		}
	}
</script>

<style scoped>
	/*.ticketContainer{
		margin-top:9rem;
	}*/
	.ticketCon {
		margin-top: .8rem;
	}
	.ticket-img-con {
		display: flex;
	}
	.ticket-list {
		width: 100%;
		color: #000;
	}
	.list-img-con {
		position: relative;
		margin: .2rem;
	}
	.ticket-img {
		width: 1.6rem;
		height: 1.6rem;
	}
	.list-bookingflag {
		position: absolute;
		left: -.04rem;
		top: -.04rem;
		height: .24rem;
		padding: .02rem;
		color: #fff;
		font-size: .24rem;
		line-height: .24rem;
	}
	.list-bookingflagblue {
		background: #00bcd4;
	}
	.list-bookingflagblue::after {
		border-top: .14rem solid #00bcd4;
		border-bottom: .14rem solid #00bcd4;
	}
	.list-bookingflagorange {
		background: #fa8514;
	}
	.list-bookingflagorange::after {
		border-top: .14rem solid #fa8514;
		border-bottom: .14rem solid #fa8514;
	}
	.list-bookingflag::after {
		content: "";
		position: absolute;
		top: 0;
		right: -.1rem;
		width: 0;
		height: 0;
		border-right: .1rem solid transparent;
	}
	.list-product {
		display: inline-block;
		position: relative;
		flex: 1;
		width: 5.3rem;
		height: 1.6rem;
		margin: .2rem .2rem .2rem 0;
	}
	.list-productname {
		height: .72rem;
		line-height: .36rem;
		font-size: .3rem;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.list-taglist {
		position: absolute;
		top: .8rem;
		left: 0;
		overflow: hidden;
		max-height: .58rem;
		margin-right: 1rem;
		padding-top: .06rem;
		line-height: .24rem;
		font-size: 0;
	}
	.list-tagitemlight {
		display: inline-block;
		width: 1.16rem;
		padding: 0 .1rem;
		font-size: .24rem;
		color: #00bcd4;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.list-tagitem {
		display: inline-block;
		width: .8rem;
		padding: 0 .1rem;
		font-size: .24rem;
		color: #616161;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.list-priceinfo {
		position: absolute;
		right: 0;
		bottom: .28rem;
		height: .32rem;
		line-height: .32rem;
		color: #9e9e9e;
		text-align: right;
	}
	.list-qunarprice {
		font-size: .22rem;
		font-weight: bold;
		color: #ff8300;
	}
	.list-price {
		font-size: .32rem;
		padding-left: .04rem;
	}
	.list-priceflag {
		font-size: .24rem;
		padding-left: .02rem;
	}
	.list-moreinfo {
		position: absolute;
		left: -.1rem;
		bottom: 0;
		width: 100%;
		font-size: 0;
		color: #9e9e9e;
	}
	.list-text {
		display: inline-block;
		width: 1.4rem;
		padding: 0 .1rem;
		font-size: .22rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.pageCon {
		margin-bottom: .8rem;
		color: #00afc7;
		text-align: center;
	}
	.pagination {
		height: .7rem;
		line-height: .7rem;
	}
	.currentPage {
	    padding: 0 15px;
		color: #212121;
	    line-height: .6rem;
	}
	.prevPage, .nextPage {
		display: inline-block;
		width: 1.4rem;
		border: .02rem solid #00afc7;
		background: #fff;
		color: #00afc7;
		line-height: .6rem;
		border-radius: .06rem;
	}
	.page-text {
		padding-top: .2rem;
		line-height: .3rem;
		font-size: .3rem;
	}
</style>