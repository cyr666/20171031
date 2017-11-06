<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<swiper-slide>
			<div id="category-container">
				<ul class="category-img-container">
					<li class="category-img-con">
						<img src="../../img/index/category-img1.png" class="category-img" />
						<p class="keywords">景点门票</p>
					</li>
					<li class="category-img-con">
						<img src="../../img/index/category-img2.png" class="category-img" />
						<p class="keywords">动植物园</p>
					</li>
					<li class="category-img-con">
						<img src="../../img/index/category-img3.png" class="category-img" />
						<p class="keywords">故宫</p>
					</li>
					<li class="category-img-con">
						<img src="../../img/index/category-img4.png" class="category-img" />
						<p class="keywords">一日游</p>
					</li>
					<li class="category-img-con">
						<img src="../../img/index/category-img5.png" class="category-img" />
						<p class="keywords">必游榜单</p>
					</li>
					<li class="category-img-con">
						<img src="../../img/index/category-img6.png" class="category-img" />
						<p class="keywords">秋色美</p>
					</li>
					<li class="category-img-con">
						<img src="../../img/index/category-img7.png" class="category-img" />
						<p class="keywords">游乐场</p>
					</li>
					<li class="category-img-con">
						<img src="../../img/index/category-img8.png" class="category-img" />
						<p class="keywords">泡温泉</p>
					</li>
				</ul>
			</div>
		</swiper-slide>
		<swiper-slide>
			<div id="category-container">
				<ul class="category-img-container">
					<li class="category-img-con">
						<img src="../../img/index/category-img9.png" class="category-img" />
						<p class="keywords">城市观光</p>
					</li>
					<li class="category-img-con">
						<img src="../../img/index/category-img10.png" class="category-img" />
						<p class="keywords">玻璃栈道</p>
					</li>
					<li class="category-img-con">
						<img src="../../img/index/category-img11.png" class="category-img" />
						<p class="keywords">名胜古迹</p>
					</li>
					<li class="category-img-con">
						<img src="../../img/index/category-img12.png" class="category-img" />
						<p class="keywords">周边游</p>
					</li>
					<li class="category-img-con">
						<img src="../../img/index/category-img13.png" class="category-img" />
						<p class="keywords">自然风光</p>
					</li>
					<li class="category-img-con">
						<img src="../../img/index/category-img14.png" class="category-img" />
						<p class="keywords">古水北镇</p>
					</li>
					<li class="category-img-con">
						<img src="../../img/index/category-img15.png" class="category-img" />
						<p class="keywords">景点讲解</p>
					</li>
					<li class="category-img-con">
						<img src="../../img/index/category-img16.png" class="category-img" />
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

		export default {
			data() {
				return {
					swiperOption: {
						direction: 'horizontal',
						autoHeight: true,
						pagination: '.swiper-pagination',
						observeParents: true
					}
				} 
			},

			components: {
				swiper,
				swiperSlide
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

	}
</style>