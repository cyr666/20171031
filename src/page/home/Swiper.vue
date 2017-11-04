<template>
	<swiper :options="swiperOption"  ref="mySwiper">
	    <swiper-slide>
	    	<div class = "swiper-img-con">
		    	<img class="swipe-img" 
		    		src="http://img1.qunarzz.com/piao/fusion/1710/f5/57137c621d75ba02.jpg_640x200_b984ddf7.jpg" 
		    		alt="去哪儿门票" style="opacity: 1;"/>
	    	</div>
	    </swiper-slide>
	    <swiper-slide>
	    	<div class = "swiper-img-con">
		    	<img class="swipe-img" 
		    		src="http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg" 
		    		alt="去哪儿门票" style="opacity: 1;"/>
	    	</div>
	    </swiper-slide>
	    <swiper-slide>
	    	<div class = "swiper-img-con">
		    	<img class="swipe-img" 
		    		src="http://img1.qunarzz.com/piao/fusion/1609/f3/52a119dbed871902.jpg_640x200_b4573df8.jpg" 
		    		alt="去哪儿门票" style="opacity: 1;"/>
		    </div>
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
