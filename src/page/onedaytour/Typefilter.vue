<template>
	<div class="typefilter-outer">
		<ul class="typefilter">
			<li class="typefilter-item">
				<div class="typefilter-icon iconfont icon-leimupinleifenleileibie--"></div>
				<div class="typefilter-name">全部分类</div>
			</li>
			<li class="typefilter-item">
				<div class="typefilter-icon iconfont icon-shaixuan"></div>
				<div class="typefilter-name">筛选</div>
			</li>
			<li class="typefilter-item">
				<div class="typefilter-icon iconfont icon-paixu"></div>
				<div class="typefilter-name">推荐排序</div>
			</li>
		</ul>
		<div class="typefilter-container">
			<ul class="typelist typelist-center">
				<li class="typelist-item">推荐排序</li>
				<li class="typelist-item">销量最高</li>
				<li class="typelist-item">价格最高</li>
				<li class="typelist-item">价格最低</li>
				<li class="typelist-item">热门评论</li>
				<li class="typelist-item">本周最热</li>
			</ul>
		</div>
		<div class="typefilter-container">
			<div class="typefilter-column">
				<div class="typefilter-side">
					<ul class="typelist">
						<li class="typelist-item">目的地</li>
						<li class="typelist-item">出发地</li>
					</ul>
				</div>
				<div class="typefilter-content">
					<ul class="typelist">
						<li class="typelist-item">全部目的地</li>
						<li class="typelist-item">北京</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="typefilter-container">
			<div class="typefilter-column">
				<div class="typefilter-side">
					<ul class="typelist">
						<li class="typelist-item">
							全部分类
							<span class="typelist-item-num">19</span>
						</li>
						<li class="typelist-item">
							一日游
							<span class="typelist-item-num">16</span>
						</li>
						<li class="typelist-item">
							文化古迹
							<span class="typelist-item-num">1</span>
						</li>
						<li class="typelist-item">
							展馆
							<span class="typelist-item-num">1</span>
						</li>
						<li class="typelist-item">
							城市观光
							<span class="typelist-item-num">1</span>
						</li>
					</ul>
				</div>
				<div class="typefilter-content">
					<ul class="typelist">
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	.typefilter-outer {
		display: none;
		position: fixed;
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,.8);
	}
	.typefilter {
		display: flex;
		width: 100%;
		text-align: center;
	}
	.typefilter-item {
		flex: 1;
		padding: .08rem .1rem 0;
		color: #fff;
	}
	.typefilter-icon {
		display: inline-block;
		position: relative;
		height: .32rem;
		font-size: .32rem;
		vertical-align: top;
	}
	.typefilter-name {
		overflow: hidden;
		height: .4rem;
		font-size: .24rem;
		line-height: .4rem;
	}

	.typefilter-container {
		overflow: hidden;
		position: absolute;
		display: none;
		bottom: .8rem;
		left: 0;
		width: 100%;
		background: #fff;
		color: #212121;
		font-size: .28em;
		line-height: 1;
		background: #f4f5f6;
	}
	.typelist-item {
		padding: .24rem .1rem;
		font-size: .28rem;
		line-height: .4rem;
	}
	.typefilter-column {
		display: flex;
		width: 100%;
		height: 5.28rem;
	}
	.typefilter-side {
		flex: 1;
		overflow: hidden;
	}
	.typelist-item {
		position: relative;
		padding-right: .72rem;
		padding-left: .2rem;
	}
	.typelist-item-num {
		position: absolute;
		top: 50%;
		right: .2rem;
		margin-top: -.2rem;
		width: .72rem;
		color: #616161;
		font-size: .24rem;
		line-height: .4rem;
		text-align: right;
	}
</style>
