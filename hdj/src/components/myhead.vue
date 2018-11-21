<template>
    <div class="myhead">
        <div class="main">
            <div class="naver">
                <!-- <p><img src="/static/img/tel.jpg"></p> -->
                <div class="logo">
                    <router-link to="/" title="">
                        <img style="width:100%" src="/static/img/jhlogo.png" alt="金虎金融软件">
                        <!-- <span class="imgspan">
                            <img class="logoimg" src="/static/img/favicon.ico">
                        </span>
                        <span class="logotxt">和达金融软件</span> -->
                    </router-link>
                </div>
                <ul class="onav">
                    <li @click="active=item.id" class="drop" :class="{active:active==index}" v-for="(item,index) in lis" :key="index">
                        <router-link class="navlink"  :to="item.to">
                             {{item.text}}
                        </router-link>
                        <div v-if="index ==99" class="navhide">
                            <ul>
                                <li v-for="(item1,index1) in item.content" :key="index1">
                                    <router-link :to="item1.to">
                                        <span class="text">{{item1.text}}</span>
                                        <img :src="item1.src" />
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'myhead',
  data() {
    return {
        lis:[
            {id:0,to:'/',text:'首页',content:[]},
            {id:0,to:'/allocation',text:'股票配资系统',content:[]},
            // {id:1,to:'/allocation',text:'产品案例',content:[
            //     {id:0,text:'股票配资',to:'/allocation',src:"/static/img/b2.png"},
            //     {id:1,text:'点买策略',to:'/strategy',src:"/static/img/b2.png"},
            //     {id:2,text:'一元夺宝',to:'/treasure',src:"/static/img/b2.png"},
            // ]},
            {id:2,to:'/saleService',text:'售后服务',content:[]},
            // {id:3,to:'/introduce',text:'公司介绍',content:[]},
            {id:4,to:'/contact',text:'联系我们',content:[]},
            {id:5,to:'',text:'Tel: 171-6946-1128',content:[]},
            // {id:4,to:'/introduce',text:'关于我们',content:[
            //     {id:0,text:'公司介绍',to:'/introduce',src:"/static/img/b2.png"},
            //     {id:1,text:'联系我们',to:'/contact',src:"/static/img/b2.png"},
            // ]},
        ],
        active:-1,
    }
  },
  created(){

  },
  methods:{

  }
}
</script>
<style scoped lang="scss">
    .myhead{
        width: 100%;
        height: 100px;
        background: #4a302a;
    }
    .logo a{
        width: 28%;
        float: left;
    }
    .logotxt{
        display: inline-block;
        font-family: 'sffmdt','Microsoft YaHei';
        // font-awesome:'sffmdt','Microsoft YaHei';
        line-height: 100px;
    }
    .router-link-active{
        display: block;
        width: 100%;
        height: 100px;
        line-height: 100px;
        overflow: hidden;
        position: relative
        
    }
    input{}
    .logo{
        padding: 0;
    }
    .imgspan{
        width: 80px;
        height: 50px;
        display: inline-block;
        position: relative;
        overflow: hidden;
        top: 20px;
    }
    .onav{
        position: relative;
    }
    .onav li:last-child{
    	background: url(/static/img/ipone.png) no-repeat left center;
    	background-size: 18px 18px;
    }
    .onav li:last-child a{
    	color: rgb(255,195,28);
    	margin-left: 10px;
    	font-weight: bold;
    }
    .drop:hover .navhide{
        display: block;
        background: #fff;
    }
    //隐藏的nav
    .navhide{
        display: none;
        z-index: 10;
        position: absolute;
        width: 1000px;
        height: 150px;
        bottom: -150px;
        background: #000;
        left: -240px;
        ul{
            height: 100%;
            display: flex;
            margin: 0 auto;
            background: #fff;
            width: 100%;
            justify-content: center;
            position: relative absolute;
            li{
                width: 110px;
                margin: 0 50px;
                height: 110px;
                text-align: center;
                a{
                    line-height: 110px;
                    width: 110px;
                    height: 110px;
                    display: block;
                    margin: 20px 0;
                    color: #333;
                    border-radius: 50%;
                    border: 1px solid red;
                    position: relative;
                    span{
                        z-index: 0;
                        display: block;
                        width: 100%;
                        height: 100；
                    }
                    img{
                        z-index: 10;
                        display: none;
                        border-radius: 50%;
                        position: absolute;
                        top: -1px;
                        left: -1px;
                    }
                }
                a:hover img{
                    display: block;
                }
            }
        }
    }
    .logoimg{
        width: 110px;;
        position: absolute;
        top: -22px;
        left: -20px;
        height: 110px;
        display: inline-block;
    }
    .logotxt{
        font-family: 'sffmdt','Microsoft YaHei';
        //  font-awesome:'sffmdt','Microsoft YaHei';
        left: 110px;
        display: block;
        line-height: 100px;
        margin: -100px 0px 0 86px;
        font-size: 38px;
    }
    ul{
        padding-left: 0px;
        float: right;
        width: 72%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        li{
            width: 20%;
            text-align: center;
            line-height: 100px;
            a{
                display: block;
                font-size: 16px;
                color: #fff;
            }
        }
    }
    .naver p img {
        width: 150px;
    }
    
</style>
