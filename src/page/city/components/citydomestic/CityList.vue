<template>
	<div>
		<div class = "hotCity">
			<ul class = "hotCity-con">
				<li class = "hotCity-item" v-for = "item in hotCityInfo" :key = "item.id">
					{{item.city}}					
				</li>
			</ul>
		</div>
		<div class = "ChinaCity" v-for = "(item,key,index) in ChinaCityInfo" :key = "item.id">
			<div class = "ChinaCity-title" :ref ="key">{{key}}</div>
			<ul class = "ChinaCity-con">
				<li class = "ChinaCity-item" v-for = "city in item">{{city}}</li>				
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		computed:{
			hotCityInfo(){
				return this.$store.state.city.hotCityInfo
			},
			ChinaCityInfo(){
				return this.$store.state.city.ChinaCityInfo
			}
		},
		methods:{
			
		},
		mounted:function(){
			
		},
		updated:function(){
			var letter = this.$refs;
			for(var i in letter){
				this.$store.state.city.alphabet.push(letter[i][0].offsetTop) 
			}
//			console.log(this.$store.state.city.alphabet)
		}
	}
</script>

<style scoped>
	.hotCity{
		position:relative;
		width:5.7rem;
		height:4.8rem;
		padding:.04rem .5rem .26rem .2rem
	}
	.hotCity-con{
		width:5.7rem;
		height:4.8rem;
	}
	.hotCity-item{
		float:left;
		width:1.66rem;
		height:0.6rem;
		line-height:0.6rem;
		/*padding:.2rem .14rem 0 .1rem;*/
		margin-top:.2rem;
		margin-right:.2rem;
		border:1px solid #aaa;
		border-radius:.1rem;
		text-align:center;
	}
	.ChinaCity{
		/*position:relative;*/
	}
	.ChinaCity-title{
		width:100%;
		line-height: .54rem;
	    padding-left: .3rem;
	    color: #616161;
	    font-size: .26rem;
	    background:#e0e0e0;
	}
	.ChinaCity-item{
		line-height: .76rem;
	    padding-left: .2rem;
	    font-size: .28rem;
	    color: #212121;
	    border-top:1px solid #aaa;
	    border-bottom:1px solid #aaa;
	}
</style>