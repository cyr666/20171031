<template>
    <div class="search-page">
        <header class="header">
            <router-link to="./">
                <div class="header-left iconfont icon-fanhui"></div>
            </router-link>
            
            <div class="header-con">
                <input type="text" class="header-search-input" placeholder="输入城市或景点">
            </div>
            <div class="header-right">
                    <span class="header-city">搜索</span>
            </div>
        </header>
        <div v-if="historysType" class="search-history">
            <div class="history-header">
                搜索历史
                <span class="search-delete" @click="handleDeleteClick">清除</span>
            </div>
            <div class="history-body">
                    <span v-for="item in historys" class="history-item">{{item}}</span>
            </div>
        </div>
        <div class="search-con">
            <div class="search-con-title">
                <span class="search-con-title-left">热门搜索</span>
                <span class="search-con-title-right" @click="handleCutClick">换一换</span>
            </div>
            <div class="search-con-list">
                <div class="search-con-list-beautyspot-iconbox">
                    <div class="search-con-list-beautyspot-icon">
                        <img src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png" alt="" style="width: .3rem; height: .3rem;">
                    </div>
                    
                    <div class="search-con-list-beautyspot-option" :style="{top: spotTop + 'rem'}">
                        <span v-for="spot in spots" class="search-con-list-beautyspot-item" @click="handleClick" >{{spot}}</span>
                    </div>
                </div>    
                
                <div class="search-con-list-city-box" style="height: .9rem;">
                    <div class="search-con-list-city-iconbox">
                        <div class="search-con-list-city-icon">
                            <img src="http://img1.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png" alt="" style="width: .3rem; height: .3rem;">
                        </div>
                    </div> 
                    <div class="search-con-list-city-option" :style="{top: cityTop + 'rem'}">
                        <span v-for="city in citys" class="search-con-list-city-item" @click="handleClick">{{city}}</span>
                    </div>
                </div>
            </div>
            <div class="search-near-beautyspot">
                <div class="search-near-btn">搜索身边的景点</div>
            </div>
        </div>
    </div>
    
</template>

<script>
	export default {
        data(){
            return {
                spotTop: 0,
                spots:["宋城千古情","故宫","香山公园","天门狐仙","张家界大峡谷","鼓浪屿往返轮渡","鼓浪屿","颐和园","婺源","上海迪士尼乐园","北京欢乐谷","八达岭长城","雍和宫","恭王府","天坛公园","华山","玉龙雪山","西岭雪山滑雪场","乌镇西栅","慈城古镇","古北水镇","都江宴","泰山","圆明园","成都欢乐谷","武汉欢乐谷","沪沽湖","常州环球动漫嬉戏谷","深圳欢乐谷","凤凰山海港乐园"],
                cityTop:0,
                citys: ["广东","三亚","上海","杭州","厦门","重庆","成都","天津","昆明","大连","桂林","桂林","清远","杭州","惠州","福州"],
                historys:[],
                historysType:false,
                widths: 0
            }
        },
        methods:{
            handleCutClick() {
                this.spotTop -= 1.71;
                if (this.spotTop == -8.55){
                    this.spotTop = 0;
                };
                this.cityTop -= 0.85;
                if (this.cityTop == -3.4){
                    this.cityTop = 0;
                }
            },
            handleClick(e){
                var history = e.target.innerHTML;
                if(this.historys.indexOf(history) == -1){
                    this.historys.unshift(history);
                    this.historysType =true;
                    this.widths += e.target.offsetWidth;
                }
            },
            handleDeleteClick(){
                this.historys.splice(0);
                this.historysType = false;
            }
        }
    }
</script>

<style scoped>
    .history-header{
        height: .64rem;
        line-height: .64rem;
        padding: 0 .2rem;
        background-color: #f0f5f6;
        border-bottom:1px solid #dce5e7;
    }
    .history-body{
        width:100%;
        overflow-y: hidden;
        background-color: #fff;
        border-bottom: 1px solid #dce5e7;
    }
   
    .history-item{
        font-size: .26rem;
        line-height: .6rem;
        padding: 0 .15rem;
        border: 1px solid #c9cccd;
        border-radius: 3px;
        margin: .2rem;
        float: left;
    }
    .search-delete{
        float: right;
        font-size: .26rem;
        color: #00afc7;
    }
    .search-page{
        background: #f5f5f5;
    }
    .header{
        height: .8rem;
        background: #00bcd4;
        overflow:hidden;
    }
    .header-left {
        float: left;
        width: .4rem;
        padding: 0 .2rem;
        line-height: .88rem;
        font-size: .4rem;
        color: #fff;
    }
    .header-con {
        width: 4.62rem;
        height: .6rem;
        position: absolute;
        left: .8rem;
        right: 1.36rem;
        top: .10rem;
        line-height: .6rem;
        background: #fff;
        border-radius: .06rem;
        text-indent: .2rem;
        color: #ccc;   
    }
    .header-search-input{
        font-family: "微软雅黑";
        width: 3.82rem;
        height: .5rem;
        border: none;
    }   
    .header-right {
        float: right;
        width: 1.28rem;
        line-height: .88rem;
        text-align: center;
        color: #fff;
        text-indent:.3rem;
    }
    .search-con{
        height: .64rem;
        line-height: .64rem;
        background: #f0f5f6;
        font-size: .26rem;
        color: #888;
        border-top: 1px solid #dce5e7;
       
    }
    .search-con-title{
        padding: 0 .2rem;
    }
    .search-con-title-right{
        float: right;
        color: #00afc7;
    }
    .search-con-list-beautyspot-box{
        width: 100%;
        position: relative;
        border-top: 1px solid #dce5e7;
        top:1.44rem;
    }
    .search-con-list-beautyspot-iconbox{
        overflow: hidden;
        height: 1.8rem; 
        position: relative;
    }
    .search-con-list-beautyspot-icon{   
        width: .72rem; 
        height: 1.26rem;
        line-height: 1.26rem;
        text-align: center;
        border-right: 1px solid #dce5e7;
        position: absolute;
        top: 15%;  
    }
    .search-con-list-beautyspot-option{
        width: 5.68rem;
        position: absolute;
        right: 0;
        top:0;
    }
    
    .search-con-list-beautyspot-item{
        padding: 0 .3rem;
        float:left;
        height: .36rem;
        line-height: .36rem;
        text-align: center;
        margin:.25rem 0;
        border-right: 1px dashed #c9cccd;
        color: #333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .search-con-list-city-box{
        position: relative;
        overflow: hidden;
    }
    .search-con-list-city-item{
        display: inline-block;
        width: 1.3rem; 
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: .36rem;
        line-height: .36rem;
        float: left;      
        border-right: 1px dashed #c9cccd;
        color: #333;
        margin: .25rem 0;
    }
    .search-con-list-city-iconbox{
        width: .72rem; 
        height: .9rem; 
        text-align: center;
        position: relative;
    }
    .search-con-list-city-icon{
        width: .72rem; 
        border-right: 1px solid #dce5e7;
        position: absolute;
        top: 12%; 
    }
    .search-con-list-city-option{
        width: 5.66rem;
        position: absolute;
        right: 0;
    }
    .search-near-beautyspot{
        border-top: 1px solid #dce5e7;
        padding: .2rem;
    }
    .search-near-btn{
        height: .72rem;
        line-height: .72rem;
        text-align: center;
        font-size: .26rem;
        color: #333;
        border: 1px solid #dde1e3;
        border-radius: 2px;
    }
</style>
