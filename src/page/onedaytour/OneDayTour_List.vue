<template>
	<div>
		<div class = "list-concent" v-if = "show">
			<div class = "tagfilter-list"  @touchmove="handletouchmove">
				<ul class = "Tagfilter-inner" @touchmove="handletouchmove">
					<li class = "sights" v-for = "item in sight" :key = "item.id">{{item}}</li>
				</ul>
			</div>
			<div class = "downright">
				<span class = "down iconfont icon-down"  @click = "handleClickDown"></span>
			</div>			
		</div>
		<div v-else class = "placesight" @touchmove = "handlescroll" @scroll = "handleScroll">
			<div class = "title-con">
				<h3 class = "sight-title">游玩景点<span class = "choosemore">(可多选)</span></h3>
				<div class = "up">
					<span class = "up-icon iconfont icon-up" @click = "handleClickUp"></span>
				</div>
			</div>
			<div class = "portrait-con"   @scrollEnd = "handleScrollEnd">
					<ul class = "portrait">
						<li class = "portrait-li" v-for = "item in sight" :key = "item.id">{{item}}</li>
					</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import IScroll from '../../../node_modules/iscroll/build/iscroll-probe.js'
	export default{
		data(){			
			return{
				show:false,
				sight:["八达岭长城","古北水镇","司马台长城","鸟巢","故宫","颐和园",
					"天安门广场","水立方","古北水镇天然温泉","恭王府","什刹海","古北口文化文物旅游区",
					"天坛公园","定陵","慕田峪长城","明十三陵","北京动物园","北京杜莎夫人蜡像馆",
					"八达岭长城缆车","北京海洋馆","恭王府大戏楼","泰山皮影戏",
					"京东石林峡","前门大街","圆明园","坡峰岭","天安门城楼","奥林匹克公园","张裕爱斐堡",
					"毛主席纪念堂","中国科学技术馆","八达岭野生动物园","北京大学","北海公园","古北之光温泉",
					"唐山湾月坨岛温泉","天津之眼摩天轮","月坨岛（月岛）",
					"段家大院精品温泉酒店","海河外滩公园","清华大学","烟袋斜街","金海胡风景区",
					"香山公园","万科石京龙滑雪场","云佛山度假村","京东大峡谷","什刹海酒吧街","凤凰岭",
				]
			}
		},
		methods:{
			handletouchmove(e){
//				this.width = (this.sight.length) * 2 + 'rem'
//				this.myScroll = new IScroll('.list-concent', {scrollX: true, scrollY: false });
//				this.$emit("scroll",$.proxy(this.handlescroll,this));
			},
			handlescroll(){
				console.log("sd")
				this.myScroll = new IScroll('.placesight', {scrollX: false, scrollY: true });
			},
			
			handleScroll(){
				console.log("ds")
			},
			handleScrollEnd(){
				
			},
			handleClickDown(){
				this.show = false
			},
			handleClickUp(){
				this.show = true
			}
		}
	}
</script>
<style scoped>
	.list-concent{
		position:absolute;
		/*top:.88rem;
		z-index:8;*/
		overflow: hidden;
		width:100%;
		height:.8rem;
		background:#e5e7e8;
	}
	.tagfilter-list{
		float: left;
		position: absolute;
		overflow: hidden;
		 z-index: 1; 
		width:90%;
		height:.8rem;
		padding:.08rem .12rem;	
		box-sizing: border-box;
	}
	.Tagfilter-inner{
		float: left;
		list-style: none;
		width:80%;
		height:.6rem;
		overflow: hidden;
		white-space: nowrap;
	}
	.sights{
		/*position:relative;*/
		padding: .12rem .26rem;
		background:#fff;
		font-size: .26rem;
		line-height:.26rem;
		border-radius:.04rem;
		margin:.15rem 0 0 .15rem;
		float:left;
		
	}
	.downright{
		float:right;
		margin-top:.1rem;
		margin-right:.1rem
	}
	.down{
		font-size:.6rem
	}
	.placesight{
		position:absolute;
		width:100%;
		z-index:2;
		background:#e5e7e8;
		border-bottom:1px solid #e0e0e0;
	}
	.title-con{
		line-height:.8rem;
	}
	.sight-title{
		z-index:2;
		line-height:.8rem;
		float:left;
		margin-top:.1rem;
		font-size:.32rem;
	}
	.choosemore{
		font-size:.28rem
	}
	.up{
		float:right;
		height:.9rem;
		width:.8rem;
		margin-right:.1rem;
		margin-top:.1rem;
		text-align:center;
		border-left:1px solid #e0e0e0;
	}
	.up-icon{
		font-size:.4rem;
	}
	.portrait-con{
		z-index:2;
		position:absolute;
		top:1rem;		
		height:5.84rem;
		width:6.16rem;
		padding:.08rem .12rem;
		background:#bbb;
		overflow:hidden;
	}
	.portrait-li{
		float:left;
		padding:.08rem .08rem;
		margin-top:.2rem;
		margin-right:.2rem;
		background:#fff;
	}
</style>