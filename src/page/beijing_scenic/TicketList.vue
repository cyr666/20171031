<template>
	<div class="ticketlist">
		<div class="ticket-title">
			<p class="allclass" @click="show = !show,shows = false" :class="[show==false ? black : green]">{{classtitle}}</p>
			<p class="sortways" @click="shows = !shows,show = false" :class="[shows==false ? black : green]">{{sorttitle}}</p>
		</div>
		<transition name="ac">
			<div id="ac-iscroll" v-if="show">
				<div id="wrapper">
					<div id="scroller">
						<ul id="list">
							<li v-if="showLoading">正在加载</li>
							<li class="click" @click="classtitle='全部分类'">
								<img class="ac-icon" src="https://img1.qunarzz.com/piao/fusion/1509/9d/0ee9e4808773f.png" />
								<p class="ac-bigname">全部分类</p>	
							</li>
							<li @click="ok=true" v-for="item in bigitem" :key="item.id">
								<img class="ac-icon" :src="item.imgUrl" />
								<p class="ac-bigname">{{item.bigname}}</p>
								<div id="ac-kind-iscroll" v-show="ok">
									<div id="wrapper">
										<div id="scroller">
											<ul id="list">
												<li v-for="itemsmall in item"  @click="classtitle=itemsmall">{{itemsmall}}</li>												
											</ul>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</transition>
		<transition name="sw">
			<div id="sw-iscroll" v-if="shows">
				<div id="wrapper">
					<div id="scroller">
						<ul id="list">
							<li id="loadNotice" style="display: none;">松开加载</li>
							<li @click="sorttitle='推荐排序'">推荐排序</li>
							<li @click="sorttitle='离我最近'">离我最近</li>
							<li class="click" @click="sorttitle='人气最高'">人气最高</li>
						</ul>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	require('../../utils/iscroll-probe.js');
	export default {
		data() {
			return {
				show: false,
				shows: false,
				black: "black",
				green: "green",
				ok: false,
				showLoading: false,
				classtitle: '全部分类',
				sorttitle: '人气最高'
			}
		},
		computed: {
			bigitem() {
				return this.$store.state.beijing_scenic.bigitem;
			}
		},
		mounted() {
	    	this.myScroll = new IScroll('#wrapper', { probeType: 2,mouseWheel: true });
	    	this.myScroll.on("scroll", () => {
	    		// console.log(this.myScroll.y);
	    		// console.log(-this.bigitem.length * 90 -150);
	    		if (this.myScroll.y < (-this.bigitem.length * 90) + 150) {
	    			this.showLoading = true;
	    			this.$store.commit("refreshInfo");
	    		}
	    		if (this.myScroll.y > 50) {
	    			this.showLoading = true;
	    			this.$store.commit("refreshInfo");
	    		}

	    	})
	    },

	    updated(){
	    	setTimeout(() => { 
	    		this.showLoading = false;
	    		this.myScroll.refresh();
	    	}, 500)
	    }
	
	}
</script>

<style>
	.ticket-title{
		padding: .08rem 0;
		border-bottom: .02rem solid #ccc;
		overflow: hidden;
		font-size: .32rem;
	}
	.allclass{
		height: .88rem;
		text-align: center;
		line-height: .88rem;
		width: 49.6%;
		float: left;
		border-right: .02rem solid #ccc;
	}
	.allclass::after {
		content: "\0020";
		position: absolute;		
		top: .48rem;
		margin-left: .1rem;
		height: 0;
		width: 0;
		height: 0;
		border: .1rem solid transparent;
		border-top: .1rem solid #000;
	}
	.sortways::after {
		content: "\0020";
		position: absolute;		
		top: .48rem;
		margin-left: .1rem;
		height: 0;
		width: 0;
		height: 0;
		border: .1rem solid transparent;
		border-top: .1rem solid #000;
	}
	.sortways{
		height: .88rem;
		text-align: center;
		line-height: .88rem;
		width: 50%;
		float: left;
	}
	#ac-iscroll{
		position: absolute;
		height: 5rem;
		width: 100%;
		overflow: auto;
	}
	#sw-iscroll{
		position: absolute;
		height: 2.5rem;
		width: 100%;
		overflow: hidden;
	}
	#ac-kind-iscroll{
		position: absolute;
		width: 100%;
		height: 5rem;
		overflow: auto;
		background: #ddd;
		left: 100%;
		top: 0;
	}
	#wrapper {
		position: absolute;
		z-index: 1;
		top: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #fff;
		/*overflow: hidden;*/
	}
	#ac-iscroll #wrapper{
		width: 50%;
	}
	#ac-kind-iscroll #wrapper{
		width: 100%;
	}
	#ac-kind-iscroll #scroller li{
		background: #ddd;
	}
	#scroller {
		position: absolute;
		z-index: 1;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		width: 100%;
		-webkit-transform: translateZ(0);
		-moz-transform: translateZ(0);
		-ms-transform: translateZ(0);
		-o-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-text-size-adjust: none;
		-moz-text-size-adjust: none;
		-ms-text-size-adjust: none;
		-o-text-size-adjust: none;
		text-size-adjust: none;
	}
	
	#scroller ul {
		list-style: none;
		padding: 0;
		margin: 0;
		width: 100%;
		text-align: left;
	}
	
	#scroller li {
		padding: 0 10px;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #fff;
		background-color: #fff;
		font-size: 14px;
	}
	#scroller .click{
		background-color: #ddd;
	}
	.ac-enter-active, .ac-leave-active {
	    transition: opacity 
	}
	.ac-enter, .ac-leave-to {
	    opacity: 0
	}
	.sw-enter-active, .sw-leave-active {
	    transition: opacity 
	}
	.sw-enter, .sw-leave-to {
	    opacity: 0
	}
	.black{
		color: black;
	}
	.black::after {
		content: "\0020";
		position: absolute;		
		top: 1.36rem;
		margin-left: .1rem;
		height: 0;
		width: 0;
		height: 0;
		border: .1rem solid transparent;
		border-top: .1rem solid #000;
	}
	.green{
		color: green;
	}
	.green::after {
		content: "\0020";
		position: absolute;		
		top: 1.26rem;
		margin-left: .1rem;
		height: 0;
		width: 0;
		height: 0;
		border: .1rem solid transparent;
		border-bottom: .1rem solid green;
	}
	.ac-icon{
		float: left;
		width: .32rem;
		height: .32rem;
		margin-top: .24rem;
	}
	.ac-bigname{
		float: left;
		margin-left: .1rem;
	}
</style>