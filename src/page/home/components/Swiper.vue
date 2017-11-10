<template>
	<swiper :options="swiperOption"  ref="mySwiper">		
	    <swiper-slide v-for = "item in swiperInfo" :key = 'item.id'>
	    	<router-link :to = "item.link">
		    	<div class = "swiper-img-con">
			    	<img class="swipe-img" 
			    		:src="item.imgUrl" 
			    		alt="去哪儿门票" style="opacity: 1;"/>
		    	</div>
	    	</router-link>
	    </swiper-slide>		
		<div class="swiper-pagination"  slot="pagination"></div>
  	</swiper>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	export default {
    	data() {	
      		return {    
          		swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
			        autoplay: 3000,
			        direction: 'horizontal', 
			        autoHeight: true,
			        pagination: '.swiper-pagination',      
			        observeParents: true,                           
        		}
      		}
    	},
	    components: {
		    swiper,
		    swiperSlide
	  	},
    
	    computed: {
	      	swiper() {
	        	return this.$refs.mySwiper.swiper
	      	},
	      	swiperInfo(){
	      		return this.$store.state.home.swiperInfo;
	      	}
	    }
	}
</script>

<style>
	.swiper-img-con{
		overflow: hidden;
		width:100%;
		height:0;
		padding-bottom:31.25%;
	}
	.swipe-img{
		width:100%
	}
</style>
