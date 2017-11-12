<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<swiper-slide>
			<div id="category-container">
				<ul class="category-img-container">
					<li class="category-img-con" v-for="item in iconswiperInfo" :key="item.id">
						<router-link :to="item.link">
							<div>
								<img :src="item.imgUrl" class="category-img" :onerror="defaultImg" />
								<p class="keywords">{{item.keywords}}</p>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</swiper-slide>
		<swiper-slide>
			<div id="category-container">
				<ul class="category-img-container">
					<li class="category-img-con" v-for="item in iconswiperInfoSecond" :key="item.id">
						<router-link :to="item.link">
							<div>
								<img :src="item.imgUrl" class="category-img" :onerror="defaultImg" />
								<p class="keywords">{{item.keywords}}</p>
							</div>
						</router-link>
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
//		props: ["iconswiperInfo", "iconswiperInfoSecond"],
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
		computed:{
			iconswiperInfo(){
				return this.$store.state.home.iconswiperInfo;
			},
			iconswiperInfoSecond(){
				return this.$store.state.home.iconswiperInfoSecond;
			},
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
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>