<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<swiper-slide>
			<div id="category-container">
				<ul class="category-img-container">
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" class="category-img" :onerror="defaultImg" />
						<p class="keywords">景点门票</p>
					</li>
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png" class="category-img" />
						<p class="keywords">动植物园</p>
					</li>
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png" class="category-img" />
						<p class="keywords">故宫</p>
					</li>
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png" class="category-img" @click="toOneDayTour" />
						<p class="keywords">一日游</p>
					</li>
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png" class="category-img" />
						<p class="keywords">必游榜单</p>
					</li>
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png" class="category-img" />
						<p class="keywords">秋色美</p>
					</li>
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png" class="category-img" />
						<p class="keywords">游乐场</p>
					</li>
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png" class="category-img" />
						<p class="keywords">泡温泉</p>
					</li>
				</ul>
			</div>
		</swiper-slide>
		<swiper-slide>
			<div id="category-container">
				<ul class="category-img-container">
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/29/c16cd064d85d8502.png" class="category-img" />
						<p class="keywords">城市观光</p>
					</li>
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png" class="category-img" />
						<p class="keywords">玻璃栈道</p>
					</li>
					<li class="category-img-con">
						<img src="https://img1.qunarzz.com/piao/fusion/1602/f2/71eb19f77e3f21f7.png" class="category-img" />
						<p class="keywords">名胜古迹</p>
					</li>
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png" class="category-img" />
						<p class="keywords">周边游</p>
					</li>
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" class="category-img" />
						<p class="keywords">自然风光</p>
					</li>
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/ea/8cb1dce519375d02.png" class="category-img" />
						<p class="keywords">古水北镇</p>
					</li>
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1707/34/9285073fde1eb702.png" class="category-img" />
						<p class="keywords">景点讲解</p>
					</li>
					<li class="category-img-con">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png" class="category-img" />
						<p class="keywords">全部</p>
					</li>
				</ul>
			</div>
		</swiper-slide>
		<div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import OneDayTour from "../../onedaytour/OneDayTour"

	export default {
		data() {
			return {
				swiperOption: {
					direction: 'horizontal',
					autoHeight: true,
					pagination: '.swiper-pagination',
					observeParents: true
				},
				defaultImg: 'this.src="' + require('../../img/index/iconswiperbackground.jpg') + '"'
			}
		},

		components: {
			swiper,
			swiperSlide,
			"onedaytour": OneDayTour
		},
		
		methods: {
			toOneDayTour: function() {
				this.$router.push({path: '/onedaytour'})
			}
		}
	}
</script>

<style scoped>
	#category-container {
		/*让高度自动变为宽度的31.25%,只能用padding实现*/
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom:3.8rem;
	}
	.category-img-con {
		float: left;
		width: 25%;
		padding-top: .3rem;
		text-align: center;
	}
	.category-img {
		width: .66rem;
		height: .66rem;
	}
	.keywords {
		padding: .2rem 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>