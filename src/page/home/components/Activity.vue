<template>
	<div class="activity">
		<ul class="listitem-con">
			<li class="listentrance-item listentrance-item-right">
				<span>
					<span class="listentrance-item-location iconfont icon-weibiaoti-"></span>
				</span>
				<span class="listentrance-item-details">定位失败</span>
			</li>
			<li class="listentrance-item listentrance-item-left">
				<span class="listentrance-item-location iconfont icon-icondesign-"></span>
				<span class="listentrance-item-details">5折泡温泉</span>
				
			</li>
		</ul>
		<ul class="activity-con">
			<li class="activity-item activity-item-right">
				<img src="../img/index/activity-img01.png">
			</li>
			<li class="activity-item activity-item-left">
				<img src="../img/index/activity-img02.png">
			</li>
		</ul>
	</div>
</template>

<script>
	
</script>

<style scoped>
	
	.listitem-con{
		border-top:0.01rem solid #eee;
		margin-top:0.02rem;
		width:100%;
		position:relative;
	}
	.listentrance-item-right{
		border-right:0.01rem solid #eee;
	}
	.listentrance-item{
		float:left;
	    height: .98rem;
	    width:49.5%;
	    font-size: .28rem;
	    color: #212121;
	    line-height: .98rem;
	    text-align: center;
	    position: relative;
	}
	.listentrance-item-location{
		position:absolute
	}
	.listentrance-item-details{
		display: inline-block;
		width:1.40rem;
		margin-left:.32rem;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
	}

	.activity-con{
		clear: both;
		width:100%;
		background-color:#fff;
		border-top:0.3rem solid #eee;
	}
	.activity-item{
		width:49.5%;
		height: 1.4rem;
		float:left;
	}
	.activity-item-right{
		border-right:0.01rem solid #eee;
	}
	.activity-item>img{
		display:block;
		width:3.2rem;
		height:100%;
		margin:0 auto;
	}
	
</style>

