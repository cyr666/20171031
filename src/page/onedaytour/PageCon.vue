<template>
	<div class="pageCon">
		<div class="pagination">
			<a href="#" class="prevPage">上一页</a>
			<span class="page-num">1 / 2</span>
			<a href="#" class="nextPage">下一页</a>
		</div>
		<div class="page-text">去哪儿门票</div>
	</div>
</template>

<script>
	
</script>

<style>
	.pageCon {
		color: #00afc7;
		text-align: center;
	}
	.pagination {
		height: .7rem;
		line-height: .7rem;
	}
	.prevPage, .nextPage {
		display: inline-block;
		width: 1.4rem;
		border: .02rem solid #00afc7;
		background: #fff;
		color: #00afc7;
		line-height: .6rem;
		border-radius: .06rem;
	}
	.page-num {
		color: #212121;
		line-height: .6rem;
		padding: 0 .3rem;
	}
	.page-text {
		padding-top: .2rem;
		line-height: .3rem;
		font-size: .3rem;
	}
</style>
