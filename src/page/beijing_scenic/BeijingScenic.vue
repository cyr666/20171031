<template>
	<div>
	 	<div class="Beijing-scenic" v-show = "!show">
	 		<ul class="BJ-view-list">
	 			<li class="sight-group" v-for = "item in ticket" :key = "item.id">
	 				<div class="sight-group-content">
	 					<div class="sight-info">
	 						<div class="sight-imgcon">
	 							<img class="sight-img" :src="item.imgUrl" :alt="item.title">
	 						</div>
	 						<div class="sight-detail">
	 							<h3 class="sight-name">{{item.title}}</h3>
	 							<span class="tag-word">{{item.hot}}</span>
	 							<span class="sight-price">
	 								¥
	 								<em>{{item.price}}</em>
	 								<span class="lowprice-text">&nbsp;起</span>
	 							</span>
	 							<div class="sight-comments">
		 							<span class="starlevel">
		 								<span class="starlevel-xing iconfont icon-wuxing1"></span>
		 							</span>
		 							<span class="comments-totalnum">{{item.comment}}</span>
		 						</div>
		 						<div class="sight-location">
		 							<span class="sight-address">{{item.region}}</span>
		 						</div>
	 						</div>
	 					</div>
	 					<div class="sight-ticket-item">
	 						<h4 class="ticket-name">{{item.adultTicket}}</h4>
	 						<span class="ticket-qunarprice">
	 							¥<em>{{item.price1}}</em>
	 						</span>
	 					</div>
	 					<div class="sight-ticket-item">
	 						<h4 class="ticket-name">{{item.stuTicket}}</h4>
	 						<span class="ticket-qunarprice">
	 							¥<em>{{item.price2}}</em>
	 						</span>
	 					</div>
	 				</div>
	 			</li>
	 		</ul>
	 	</div>
	 	
	 	
	 	<div class="Beijing-scenic2" v-show = "show">
	 		<ul class="BJ-view-list">
	 			<li class="sight-group" v-for = "item in ticket" :key = "item.id">
	 				<div class="sight-group-content">
	 					<div class="sight-info">
	 						<div class="sight-imgcon">
	 							<img class="sight-img" :src="item.imgUrl2" :alt="item.title2">
	 						</div>
	 						<div class="sight-detail">
	 							<h3 class="sight-name">{{item.title2}}</h3>
	 							<span class="sight-price">
	 								¥
	 								<em>{{item.price02}}</em>
	 								<span class="lowprice-text">&nbsp;起</span>
	 							</span>
	 							<div class="sight-comments">
		 							<span class="starlevel">
		 								<span class="starlevel-xing iconfont icon-wuxing1"></span>
		 							</span>
		 							<span class="comments-totalnum">{{item.comment2}}</span>
		 						</div>
		 						<div class="sight-location">
		 							<span class="sight-address">{{item.region2}}</span>
		 						</div>
	 						</div>
	 					</div>
	 					<div class="sight-ticket-item">
	 						<h4 class="ticket-name">{{item.adultTicket2}}</h4>
	 						<span class="ticket-qunarprice">
	 							¥<em>{{item.price12}}</em>
	 						</span>
	 					</div>
	 					<div class="sight-ticket-item">
	 						<h4 class="ticket-name">{{item.stuTicket2}}</h4>
	 						<span class="ticket-qunarprice">
	 							¥<em>{{item.price22}}</em>
	 						</span>
	 					</div>
	 				</div>
	 			</li>
	 		</ul>
	 	</div>
	 	<div class="moreinfo">
	 		<div>
	 			<div class="pagination">
	 				<a class="disable-btn" @click = 'handleClick' :style = "{background:color1,border:border1,color:color3}"
	 				>上一页</a>
	 				<span class="page-num">{{page}}</span>
	 				<a class=""  @click = 'handleNextPage' :style = "{background:color2,border:border2}">下一页</a>
	 			</div>
	 			<div class="page-text">去哪儿门票</div>
	 		</div>
	 	</div>
 	</div>
</template>

<script>
	export default {
		props:["ticket"],
		data(){
			return {
				page:1,
				show:false,
				color1:"#bdbdbd",
				color2:"#fff",
				color3:"#fff",
				border1: "none",
				border2:".02rem solid #00afc7"
			}
		},
		methods:{
			handleClick(){
				this.show = false;
				this.page = 1;
				this.color1 = "#bdbdbd";
				this.border1 = "none";
				this.color2 = "#fff";
				this.border2 = ".02rem solid #00afc7";
				this.color3 = "#fff";
			},
			handleNextPage(){
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
	/*.Beijing-scenic2,.Beijing-scenic{
		position:absolute;
		left:0;
	}*/
	.moreinfo{
		position:relative;
		z-index: 333
	}
	.BJ-view-list{
		list-style: none;
		background: #eee;
	}
	.sight-group-content{
		margin-bottom: .2rem;
    	background: #fff;
    	position: relative;
	}
	.sight-info{
		padding: .2rem;
	}
	.sight-imgcon{
		float: left;
		width: 1.6rem;
    	height: 1.6rem;
	}
	.sight-img{
		border: 0;
		vertical-align: middle;
		width: 1.6rem;
   		height: 1.6rem;
	}
	.sight-detail{
		position: relative;
	    overflow: hidden;
	    padding-left: .2rem;
	    height: 1.6rem;
	}
	.sight-name{
		float: left;
		overflow: hidden;
	    max-width: 60%;
	    color: #212121;
	    font-size: .32rem;
	    line-height: .36rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-weight: normal;
	}
	.tag-word{
		display: inline-block;
	    margin-left: .06rem;
	    width: .3rem;
	    height: .3rem;
	    background: #ff1200;
	    color: #fff;
	    font-size: .24rem;
	    line-height: .3rem;
	    text-align: center;
	}
	.sight-price{
		position: absolute;
	    top: 0;
	    right: 0;
	    height: .36rem;
	    color: #ff8300;
	    font-size: .2rem;
	}
	.sight-price>em{
		font-style: normal;
		font-size: .36rem;
	}
	.lowprice-text{
		color:#9e9e9e;
	}
	.sight-comments{
		margin-top: .38rem;
	    height: .64rem;
	    line-height: .64rem;
	}
	.starlevel{
		width: 1.2rem;
	    height: .24rem;
	    font-size: .24rem;
	    display: inline-block;
    	position: relative;
	}
	.starlevel-xing{
		color: #00bcd4;
		overflow: hidden;
	    font-size: 1px;
	    position: absolute;
	    top: -.2rem;
	    left: -.05rem;
	}
	.comments-totalnum{
		position: relative;
	    top: -.04rem;
	    margin-left: .06rem;
	    color: #9e9e9e;
	    font-size: .24rem;
	    line-height: .64rem;
	}
	.sight-location{
		position: absolute;
	    bottom: 0;
	    color: #9e9e9e;
	    white-space: nowrap;
	}
	.sight-ticket-item{
		position: relative;
	    height: .9rem;
	    margin: 0 .2rem;
	    border-top: 1px dashed #c9cccd;
	}
	
	.ticket-name{
		overflow: hidden;
	    margin-right: 1.2rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .9rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-weight: normal;
	}
	.ticket-qunarprice{
		overflow: hidden;
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: 1.2rem;
	    height: .9rem;
	    color: #ff8300;
	    font-size: .2rem;
	    line-height: .9rem;
	    text-align: right;
	}
	.ticket-qunarprice>em{
		font-size: .36rem;
		font-style: normal;
	}

	.moreinfo{
		background: #eee;
		padding: .2rem 0;
	    color: #00afc7;
	    line-height: .82rem;
	    text-align: center;
	}
	.pagination{
		height: .7rem;
    	line-height: .7rem;
	}
	.pagination>a{
		text-decoration: none;
		display: inline-block;
	    width: 1.4rem;
	    border: .02rem solid #00afc7;
	    background: #fff;
	    color: #00afc7;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.pagination .disable-btn{
		background: #bdbdbd;
	    color: #fff;
	    border: 0;
	}
	.page-num{
		color: #212121;
	    line-height: .6rem;
	    padding: 0 15px;
	}
	.page-text{
		padding-top: .2rem;
	    line-height: .3rem;
	    font-size: .3rem;
	}
</style>
