<template>
	<div class="tour-listbox">
		<div class="scroller-top">
			<div id="wrapper">
				<div id="scroller">
					<ul class="tour-list">
						<li v-for="place in places" class="tour-place">{{place}}</li>
					</ul>
				</div>	
			</div>	
			<div class = " down iconfont icon-down" @click = "handleClickDown">
			</div>
		</div>	
		<div class="scroller-bottom" v-show="show">
			<div class = "title-con">
					<h3 class = "sight-title">游玩景点<span class = "choosemore">(可多选)</span></h3>
					<div class = "up" @click = "handleClickUp">
						<span class = "up-icon iconfont icon-up"></span>
					</div>
			</div>
			<div id="wrapper-con" >				
				<div id="scroller-con">
					<ul class="tour-list-con">
						<li v-for="place in places" class="tour-place-con">{{place}}</li>
					</ul>
				</div>	
			</div>
		</div>		
	</div>
</template>

<script>
require("../../utils/iscroll-probe.js");
export default {
	data(){

		return {
			show:false,
			places:["八达岭长城","古北水镇","故宫","司马台长城","鸟巢","颐和园","天安门广场","水立方","古北水镇天然温泉","什刹海","恭王府","定陵","古北口文化文物旅游区","天坛公园","明十三陵","北京动物园","慕田峪长城","北京杜莎夫人蜡像馆","泰山皮影戏","八达岭长城缆车","北京海洋馆","恭王府大戏楼","京东石林峡","前门大街","圆明园","坡峰岭","天安门城楼","奥林匹克公园","张裕爱斐堡","毛主席纪念堂","中国科学技术馆","八达岭野生动物园","北京大学","北海公园","南山滑雪场","古北之光温泉","天漠","段家大院精品温泉酒店","清华大学","烟袋斜街","金海湖风景区","香山公园","万科石京龙滑雪场","云佛山度假村","京东大峡谷","什刹海酒吧街","凤凰岭","功夫剧《什刹海》","北京天文馆","古北水镇大酒店"]
		}
	},

	mounted () {
		this.myScroll1 = new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: true });
		this.myScroll = new IScroll('#wrapper-con', { mouseWheel: true});
		
		
	},
	updated(){
		this.myScroll.refresh();
		this.myScroll1.refresh();
	},

 	methods : {
 		handleClickDown(){
			this.show = true;
		},
		handleClickUp(){
			this.show = false;
		}
 	}
}

</script>

<style scoped>
	.tour-listbox{
		position: relative;
		z-index:8
	}
	.scroller-bottom{
		top: 0rem;
		width: 100%;
		height: 100%;
		position: absolute;
		background: #e5e7e8;
		z-index: 99999999;
	}
	.scroller-top{
		width: 100%;
		height: 100%;
		position: relative;
	}
	 #wrapper{
		background: #e5e7e8;
		overflow: hidden;
		height: 0.8rem;
		width: 100%;
		position: absolute;
	}
	#scroller{
		height:.8rem;
		position: absolute;
		width:100rem;
	}

	
	.tour-list{
		height:.8rem;
	}
	.tour-place{
		padding: .12rem .26rem;
		background:#fff;
		font-size: .26rem;
		line-height:.26rem;
		border-radius:.04rem;
		margin:.15rem 0 0 .15rem;
		float:left;
	 	} 
 	
	.down{	
		right:0rem;	
		width:1rem;
		height: .8rem;
		position: absolute;	
		font-size:.6rem;
		text-align: center;
		padding-left: .2rem;
		background:#e5e7e8;
	}
	#wrapper-con{
		background: #e5e7e8;
		height: 8rem;
		width: 100%;
		position: absolute;
		overflow: hidden;
	}
	#scroller-con{
		height: 14rem;
		width: 100%;
		position: absolute;
		
	}
	.title-con{
		height:.8rem;
		background:  #e5e7e8;
	}
	.sight-title{
		z-index:2;
		line-height:.6rem;
		float:left;
		margin-top:.1rem;
		font-size:.32rem;
	}
	.choosemore{
		font-size:.28rem
	}
	.up{
		float:right;
		height:.6rem;
		width:.8rem;
		margin-right:.1rem;
		margin-top:.2rem;
		text-align:center;
		border-left:1px solid #e0e0e0;
	}
	.up-icon{
		font-size:.4rem;
	}
	.tour-place-con{
		padding: .12rem .26rem;
		background:#fff;
		font-size: .26rem;
		line-height:.26rem;
		border-radius:.04rem;
		margin:.15rem 0 0 .15rem;
		display: inline-block;
 	}
 	.tour-list-con{
		height: 7rem;
		width: 100%;
 	}
</style>