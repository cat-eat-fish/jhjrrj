<template>
  <div class="home">
    <MyHead></MyHead>
    <!-- banner -->
    <div class="wrap" id="wrap">
        <ul id="pic">
            <li v-for="(item,index) in bannerimgs" :key="index">
                <router-link :to="item.url">
                    <img :src="item.img" alt="">
                </router-link>
            </li>
        </ul>
        <ol id="list">
            <li :class="{on:index == 0}" v-for="(item,index) in mydata" :key="index">
                {{index+1}}
            </li>
        </ol>
    </div>
    <!-- <Carousel :opts='opts'></Carousel> -->

    
    <!-- 解决方案 -->
    <div class="case_main" style="display: none;">
        <div class="case">
            <div class="title">
                <h1>我们积累了各行业丰富的案例和经验</h1>
                <span> 
                    <a >全部</a> /
                    <a >网站设计</a> /
                    <a >移动APP</a> /
                    <a >软件界面</a> /
                    <a>互联网金融产品</a> /
                    <a>电子商务</a> /
                    <a>平面设计</a> /
                </span> 
            </div>
            <div class="case_con"> 
                <dl>
                    <dd style="background:url(/static/img/1-1604211551200-L.jpg) no-repeat center top; background-size:cover;"> <a href="/a/case/rjjm/17.html" title="微健智能跑步机应用"></a> </dd>
                </dl>
                <dl>
                    <dd style="background:url(/static/img/1-1604211550560-L.jpg) no-repeat center top; background-size:cover;"> <a href="/a/case/rjjm/16.html" title="米豆教育"></a> </dd>
                </dl>
                <dl>
                    <dd style="background:url(/static/img/1-1604211550350-L.jpg) no-repeat center top; background-size:cover;"> <a href="/a/case/rjjm/15.html" title="优品汇手机助手"></a> </dd>
                </dl>
                <dl>
                    <dd style="background:url(/static/img/1-1604211549540-L.jpg) no-repeat center top; background-size:cover;"> <a href="/a/case/app/14.html" title="Jackery app"></a> </dd>
                </dl>
                <dl>
                    <dd style="background:url(/static/img/1-1604211549300-L.jpg) no-repeat center top; background-size:cover;"> <a href="/a/case/app/13.html" title="我开始健身app"></a> </dd>
                </dl>
                <dl>
                    <dd style="background:url(/static/img/1-160421154R70-L.jpg) no-repeat center top; background-size:cover;"> <a href="/a/case/wzsj/12.html" title="iPin图片社区"></a> </dd>
                </dl>
                <dl>
                    <dd style="background:url(/static/img/1-160421154J50-L.jpg) no-repeat center top; background-size:cover;"> <a href="/a/case/wzsj/11.html" title="零担速配"></a> </dd>
                </dl>
                <dl>
                    <dd style="background:url(/static/img/1-160421154F90-L.jpg) no-repeat center top; background-size:cover;"> <a href="/a/case/wzsj/10.html" title="趣逛地图"></a> </dd>
                </dl>
                <dl>
                    <dd style="background:url(/static/img/1-1604211546360-L.jpg) no-repeat center top; background-size:cover;"> 
                        <a href="/a/case/wzsj/9.html" title="nicedesign插画集"></a> 
                    </dd>
                </dl>
            </div>
        </div>
    </div>
    <!-- 我们能为你做什么 -->
            <div class="service">
                <div class="wrap1">
                    <div class="mq-common-hd">
                    <h2>我们积累了互联网金融软件行业丰富的案例和经验 </h2>
                    <p>多年锤炼，金虎科技务实笃信，为企业精准定制互联网解决方案</p>
                    <!--<div class="mq-bottomline"></div>-->
                    <ul class="mq-serv-list">
                                    <li class="mq-media">
                                        <div class="mq-pull-left">
                                            <div class="icon-figure icon-figure-computer"></div>
                                        </div>
                                        <div class="mq-media-body">
                                            <div class="tit">互联网金融+</div>
                                            <div class="text">
                                                金融网贷系统/基金存管
                                                <br> 销售系统/供应链金融系统
                                                <br> 消费金融系统/众筹系统
                                                 <br> 股票配资系统/多级分销系统
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mq-media">
                                        <div class="mq-pull-left">
                                            <div class="icon-figure icon-figure-phone"></div>
                                        </div>
                                        <div class="mq-media-body">
                                            <div class="tit">移动应用研发+</div>
                                            <div class="text">
                                                基于移动端APP+微信，
                                                <br> 深度研发金融+电商
                                                <br> +社区系列产品
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mq-media">
                                        <div class="mq-pull-left">
                                            <div class="icon-figure icon-figure-circle"></div>
                                        </div>
                                        <div class="mq-media-body">
                                            <div class="tit">数字化营销+</div>
                                            <div class="text">
                                                品牌推广传播
                                                <br> 线上/线下
                                                <br> 微信公众号推广/SEO推广
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mq-media">
                                        <div class="mq-pull-left">
                                            <div class="icon-figure icon-figure-paint"></div>
                                        </div>
                                        <div class="mq-media-body">
                                            <div class="tit">高端定制+</div>
                                            <div class="text">
                                                全网品牌策划定制

                                                <br> 移动APP定制（Android/iOS）
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mq-media">
                                        <div class="mq-pull-left">
                                            <div class="icon-figure icon-figure-eye"></div>
                                        </div>
                                        <div class="mq-media-body">
                                            <div class="tit">UE/UI用户体验+</div>
                                            <div class="text">
                                                全案策划
                                                <br> 原型/思维导图设计
                                                <br> VI视觉设计
                                                <br> 界面交互设计
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mq-media">
                                        <div class="mq-pull-left">
                                            <div class="icon-figure icon-figure-brain"></div>
                                        </div>
                                        <div class="mq-media-body">
                                            <div class="tit">技术研发服务+</div>
                                            <div class="text">
                                                MVC三层分离模式
                                                <br> Asp.net/H5/VUE
                                                <br> Action/JSP-TagLib
                                                <br> MySql/SqlServer
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mq-media">
                                        <div class="mq-pull-left">
                                            <div class="icon-figure icon-figure-graphic"></div>
                                        </div>
                                        <div class="mq-media-body">
                                            <div class="tit">技术运营服务+</div>
                                            <div class="text">
                                                深度解析平台技术问题
                                                <br> 技术外包服务
                                                <br> 外派技术/设计驻场服务
                                                <br> 平台二次开发
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mq-media">
                                        <div class="mq-pull-left">
                                            <div class="icon-figure icon-figure-link"></div>
                                        </div>
                                        <div class="mq-media-body">
                                            <div class="tit">接口接入服务+</div>
                                            <div class="text">
                                                第三方支付接口服务
                                                <br> 银行与平台无缝对接服务
                                                <br> 解决支付宝/微支付等问题
                                                <br> 解决银联支付问题
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
            </div>
            <!--  -->
            <div class="mq-about-phtobg clearfix">
                <div class="mq-about-zy main  pt-45 clearfix">
                    <h2 class="mq-h2-new bule fs40">做好每位客户的项目是我们的第一准则</h2>
                    <center class="fs18 pt-30">企业传播语：互联网金融开发专家！
                        <br>愿景和使命：打造互联网高新技术企业，做互联网金融电商领域的综合服务商
                        <br>企业目标: 服务于国家互联网＋战略，服务于互联网金融普惠民众</center>
                </div>
                <div class="mq-about-minddl">
                    <ul class="main clearfix bule">
                        <li>
                            <span class="mq-li-01"></span>
                            <h2 class="fs20">准则</h2>
                            <p class="fs16">项目是我们的第一准则</p>
                        </li>
                        <li>
                            <span class="mq-li-02"></span>
                            <h2 class="fs20">感恩</h2>
                            <p class="fs16">感恩是为人之道</p>
                        </li>
                        <li>
                            <span class="mq-li-03"></span>
                            <h2 class="fs20">敬业</h2>
                            <p class="fs16">敬业是成功之基</p>
                        </li>
                        <li>
                            <span class="mq-li-04"></span>
                            <h2 class="fs20">诚信</h2>
                            <p class="fs16">诚信是立业之本</p>
                        </li>
                        <li>
                            <span class="mq-li-05"></span>
                            <h2 class="fs20">创新</h2>
                            <p class="fs16">创新是展业之源</p>
                        </li>
                    </ul>
                </div>
            </div>
                <!--  -->
                <div class="container main about article">
                <h3 align="center">因为有<span style="color:#f60;">你</span></h3>
                <h5 align="center">Because of you</h5>
                <p align="center">团队因为有你的优秀而更加优秀，我们的目标是一致的，就是让自己更加优秀，让团队更加卓越</p>
                <br>
                <br>
                <ul class="list line6">
                    <li class="unopacity"><img src="/static/img/553b0b8181ddc.gif"></li>
                    <li class="unopacity"><img src="/static/img/553b0b3021597.gif"></li>
                    <li class="unopacity"><img src="/static/img/553b0d565fce7.gif"></li>
                    <li class="unopacity"><img src="/static/img/553b0da39ec11.gif"></li>
                    <li class="unopacity"><img src="/static/img/553e11ff0a6c9.gif"></li>
                    <li class="unopacity"><img src="/static/img/554093ed3eb41.gif"></li>
                    <li class="unopacity"><img src="/static/img/55409407e8e30.gif"></li>
                    <li class="unopacity"><img src="/static/img/5540959c50e67.gif"></li>
                    <li class="unopacity"><img src="/static/img/5540942cbe6b6.gif"></li>
                    <li class="unopacity"><img src="/static/img/554094404d860.gif"></li>
                    <li class="unopacity"><img src="/static/img/554094586cfd9.gif"></li>
                    <li class="unopacity"><img src="/static/img/5540946ed1b79.gif"></li>
                    <li class="unopacity"><img src="/static/img/554094846e5c9.gif"></li>
                    <li class="unopacity"><img src="/static/img/5540949e308ee.gif"></li>
                    <li class="unopacity"><img src="/static/img/554094b68b746.gif"></li>
                    <li class="unopacity"><img src="/static/img/5540950b875c0.gif"></li>
                    <li class="unopacity"><img src="/static/img/554095255ff97.gif"></li>
                    <li class="unopacity"><img src="/static/img/5540954976e12.gif"></li>
                    <li class="unopacity"><img src="/static/img/55409569c615f.gif"></li>
                    <li class="unopacity"><img src="/static/img/554095814e72c.gif"></li>
                    <li class="unopacity"><img src="/static/img/554095b5b6842.gif"></li>
                    <li class="unopacity"><img src="/static/img/554095ce7e088.gif"></li>
                    <li class="unopacity"><img src="/static/img/554095eac6b78.gif"></li>
                    <li class="unopacity"><img src="/static/img/55409605da68f.gif"></li>
                    <li class="unopacity"><img src="/static/img/55409621a159b.gif"></li>
                    <li class="unopacity"><img src="/static/img/5540964455a61.gif"></li>
                    <li class="unopacity"><img src="/static/img/5540969565f95.jpg"></li>
                </ul>
            </div>
    <!-- 优质服务流程 -->
    <!-- <div class="main article">
        <h2 align="center"><a href="/fuwu/">优质的服务流程</a></h2>
        <h5 align="center">· quality of service processes ·</h5>
        <br>
        <ul class="flow">
            <li>
                <img src="/static/img/s11.png" class="s1">
                <img src="/static/img/s12.png" class="s2">
                <strong>需求沟通</strong>倾听客户需求，了解用户使用环境和操作流程
            </li>
            <li>
                <img src="/static/img/s21.png" class="s1">
                <img src="/static/img/s22.png" class="s2">
                <strong>交互设计</strong>头脑风景交互情景模拟，原型设计
            </li>
            <li>
                <img src="/static/img/s31.png" class="s1">
                <img src="/static/img/s32.png" class="s2">
                <strong>视觉创意</strong>色彩及平面元素设定，结构和布局规范确认
            </li>
            <li>
                <img src="/static/img/s41.png" class="s1">
                <img src="/static/img/s42.png" class="s2">
                <strong>技术开发</strong>移动应用数据对接与开发
            </li>
            <li>
                <img src="/static/img/s51.png" class="s1">
                <img src="/static/img/s52.png" class="s2">
                <strong>测试反馈</strong>修改调整，规范完善
            </li>
            <li>
                <img src="/static/img/s61.png" class="s1">
                <img src="/static/img/s62.png" class="s2">
                <strong>跟进服务</strong>后续维护，持续跟进
            </li>
        </ul>
    </div> -->
    
    
    <!-- 加入我们 -->
    <!-- <div class="layout">
        <p> <img src="/static/img/5549e0c95188b.jpg" class="img"> </p>
    </div> -->
    <!-- 合作伙伴 -->
    <!-- <div class="main">
        <h2 align="center" class="text-dark">合作伙伴</h2>
        <h5 align="center">· They choose ·</h5>
        <br>
        <br>
        <ul class="client">
            <li><img src="/static/img/5541ce5053e96.jpg" class="img"></li>
            <li><img src="/static/img/5541cf092be2b.jpg" class="img"></li>
            <li><img src="/static/img/5541cde8c8c03.jpg" class="img"></li>
            <li><img src="/static/img/5541cdc613f52.jpg" class="img"></li>
            <li><img src="/static/img/5541d13ab18b8.jpg" class="img"></li>
            <li><img src="/static/img/5541cd8c88bcc.jpg" class="img"></li>
            <li><img src="/static/img/553f1ed831c01.gif" class="img"></li>
            <li><img src="/static/img/553f1ec2d29eb.gif" class="img"></li>
            <li><img src="/static/img/553f1ea9cbcc5.gif" class="img"></li>
            <li><img src="/static/img/553f1e907b598.gif" class="img"></li>
            <li><img src="/static/img/553f1e7463bd3.gif" class="img"></li>
            <li><img src="/static/img/553f1e4de9352.gif" class="img"></li>
            <li><img src="/static/img/553f1e3064cbd.gif" class="img"></li>
            <li><img src="/static/img/553de06339f24.gif" class="img"></li>
            <li><img src="/static/img/553de04805478.gif" class="img"></li>
            <li><img src="/static/img/553de0303974c.gif" class="img"></li>
            <li><img src="/static/img/553ddfc564b3b.gif" class="img"></li>
            <li><img src="/static/img/553d9faa88b29.gif" class="img"></li>
            <li><img src="/static/img/553b627bd95e1.gif" class="img"></li>
            <li><img src="/static/img/553b622d9a9d0.gif" class="img"></li>
            <li><img src="/static/img/553b12de21de3.gif" class="img"></li>
            <li><img src="/static/img/553b1297d565f.gif" class="img"></li>
            <li><img src="/static/img/553b123bc7c4c.gif" class="img"></li>
            <li><img src="/static/img/553b62477ddd7.jpg" class="img"></li>
        </ul>
    </div> -->
    <MyFoot></MyFoot>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel"
import "@/components/Carousel.css"
import MyHead from "@/components/myhead"
import MyFoot from "@/components/myfoot"
export default {
    components:{
        MyHead,MyFoot,Carousel
    },
    name: 'home',
    data () {
        return {
            ceshi:'123',
            bannerimgs:[],
            // opts:{
            //     imgData:[],
            //     time:5000,
            // },
            ceshi:'',
            mydata:[],
        }
    },
    created(){
        var that = this;
        var mycode = '85FA97B7763CA5622533F77E7B4BA26C';
        this.$axios.get("http://admin.hdjrrj.com/home/index/banner_list?mycode="+mycode,)
            .then(function (res) {
                var mydata = [];
                for(var i = 0;i<res.data.data.length;i++){
                    mydata[i] = i;
                }
                that.mydata = mydata
                that.bannerimgs = res.data.data;
                // var myarr = [];
                
                // for(var i = 0;i<res.data.data.length;i++){
                //     myarr[i] = {href:res.data.data[i].url,src:res.data.data[i].img}
                // }
                // that.opts.imgData =myarr
            })
            .catch(function (error) {
                console.log(error)
        });
        
    },
    mounted(){
        var wrap = document.getElementById('wrap'),
         pic = document.getElementById('pic'),
         list = document.getElementById('list').getElementsByTagName('li'),
         index = 0,
         timer = null;
     // 若果有在等待的定时器，则清掉
     if (timer) {
         clearInterval(timer);
         timer = null;
     }
     // 自动切换
     timer = setInterval(autoPlay, 3000);

     // 定义并调用自动播放函数
     function autoPlay() {
         index++;
         if (index >= list.length) {
             index = 0;
         }
         changeImg(index);
     }
     // 定义图片切换函数
     function changeImg(curIndex) {
         for (var j = 0; j < list.length; j++) {
             list[j].className = "";
         }
         // 改变当前显示索引
         list[curIndex].className = "on";
         pic.style.marginTop = -546 * curIndex + "px";
         index = curIndex;
     }

     // 鼠标划过整个容器时停止自动播放
     wrap.onmouseover = function() {
         clearInterval(timer);
     }

     // 鼠标离开整个容器时继续播放至下一张
     wrap.onmouseout = function() {
         timer = setInterval(autoPlay, 3000);
     }

     // 遍历所有数字导航实现划过切换至对应的图片
     for (var i = 0; i < list.length; i++) {
         list[i].id = i;
         list[i].onmouseover = function() {
             clearInterval(timer);
             changeImg(this.id);
         }
     }
    },
    methods:{
        
    },
}
</script>
<style scoped lang="scss">

//  轮播图
.wrap {
    min-height: 546px;
	height:auto;
	width:100%;
	// margin:60px auto;
	position:relative;
	overflow:hidden;
}
.wrap ul {
    width: 100%;
    position:absolute;
    height: 100%;
}
.wrap ul li {
    width: 100%;
	height:100%;
}
.wrap ol {
	position:absolute;
	right:5px;
	bottom:10px;
}
.wrap img{
    width: 100%;
    // height:100%;
    display: block;
}
.wrap ol li {
	height:20px;
	width:20px;
	background:#ddd;
	border:1px solid #969591;
	border-radius:50%;
	margin-left:5px;
	color:#959490;
	float:left;
	text-align:center;
	cursor:pointer;
}
.wrap ol .on {
	background:#8F9E9E;
	color:#fff;
}

    .article{
        clear: both;
        overflow: hidden;
    }
    .flow {
        padding: 0;
        list-style: none;
        height: 240px;
        display: flex;
        justify-content: center;
        li {
            width: 150px;
            height: 150px;
            margin: 10px;
            text-align: center;
            font-size: 14px;
            position: relative;
            img {
                margin-bottom: 10px;
                position: absolute;
                top: 20px;
                left: 20px;
            }
            .s1:hover{
                display: none;
            }
            .s1:hover~.s2{
                display: inline;
            }
            .s2{
                display: none;
            }
        }
        strong {
            display: block;
            font-size: 16px;
            color: #000;
            margin-top: 150px
        }
    }
    .client {
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        li{
            width: 200px;
            border: solid 1px #ddd;
            margin: -1px 0 0 -1px;
            img{
                opacity: 0.4;
                transition: all 0.5s;
                filter: grayscale(100%);
            }
        }
        li:hover img{
            opacity: 1;
            filter: grayscale(0);
        }
    }
    // 解决方案
    .case_main {
        width: 100%;
        overflow: hidden;
    }
    .case {
        width: 1230px;
        margin: 0 auto;
        margin-top: 70px;
        .title {
            width: 100%;
            text-align: center;
            h1 {
                font-size: 28px;
                color: #333;
                line-height: 35px;
                margin: 15px 0;
            }
            span {
                font-size: 16px;
                color: #666;
                a {
                    margin: 0 5px;
                    color: #666;
                    -moz-transition: all 0.3s ease-in-out;
                    -webkit-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                }
            }
        }
    }
    .case_con {
        clear: both;
        overflow: hidden;
        margin-top: 40px;
        dl {
            width: 380px;
            margin: 15px;
            float: left;
            dd {
                height: 220px;
                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .service {
        position: relative;
        height: 530px;
        padding-top: 50px;
        .wrap {
            width: 1200px;
            margin: auto;
        }
        .mq-common-hd {
            text-align: center;
            position: relative;
            h2 {
                color: rgb(255,195,35);
                font: 30px/1.5 "Microsoft Yahei";
                font-weight: bold;
            }
            p {
                line-height: 2;
                font-size: 18px;
                color: #6f6f6f;
            }
            .mq-bottomline {
                position: absolute;
                height: 2px;
                background-color: #ffc323;
                width: 168px;
                left: 50%;
                top: 60px;
                margin-left: -84px;
                transform: rotateY(80deg);
            }
        }
    }

    .mq-serv-list {
        opacity: 1;
        filter: alpha(opacity=100);
        margin-left: -10px;
        // position: absolute;
        left: 0;
        top: 100%;
        transition: all .5s;
        font-size: 14px;
        text-align: left;
        li {
            float: left;
            border: 1px solid #ccc;
            margin-left: 10px;
            margin-bottom: 20px;
            padding: 38px 0px;
            width: 292px;
            height: 180px;
            display: list-item;
            transition: all .3s;
            .mq-pull-left {
                float: left;
                margin-right: 10px;
                .icon-figure {
                    display: block;
                    float: left;
                    width: 92px;
                    height: 80px;
                    background-repeat: no-repeat;
                    background-position: center top;
                }
                .icon-figure-computer {
                    background-image: url(/static/img/icon-computer-green.png);
                }
                .icon-figure-phone {
                    background-image: url(/static/img/icon-phone-green.png);
                }
                .icon-figure-circle{
                    background-image: url(/static/img/icon-circle-green.png);
                }
                .icon-figure-paint{
                    background-image: url(/static/img/icon-paint-green.png);
                }
                .icon-figure-eye{
                    background-image: url(/static/img/icon-eye-green.png);
                }
                .icon-figure-brain{
                    background-image: url(/static/img/icon-brain-green.png);
                }
                .icon-figure-graphic {
                    background-image: url(/static/img/icon-graphic-green.png);
                }
                .icon-figure-link {
                    background-image: url(/static/img/icon-link-green.png);
                }
            }
            .mq-media-body {
                overflow: hidden;
            }
        }
    }
    .main{
        width: 1200px;
        margin: 0 auto;
        padding-top: 45px;
    }
    .mq-h2-new {
        text-align: center;
        color: #00caee;
        font-size: 40px;
    }
    .pt-30{
        padding-top: 30px;
        font-size: 18px;
        color: #7a7a7a;
    }
    .mq-about-minddl{
        background: #545b5c;
        min-height: 205px;
        padding: 40px 0;
        margin: 50px auto;
        text-align: center;
        ul {
            color: #00caee;
            width: 1200px;
            margin: 0 auto;
            li{
                float: left;
                list-style: none;
                line-height: 2em;
                width: 20%;
                span{
                    display: inline-block;
                    margin: 0 auto;
                    width: 100%;
                    height: 135px;
                }
                span.mq-li-01{
                    background: url(/static/img/img11.png) no-repeat center center;
                }
                span.mq-li-01:hover{
                    background: url(/static/img/img1.png) no-repeat center center;
                }
                span.mq-li-02{
                    background: url(/static/img/img22.png) no-repeat center center;
                }
                span.mq-li-02:hover{
                    background: url(/static/img/img2.png) no-repeat center center;
                }
                span.mq-li-03{
                    background: url(/static/img/img33.png) no-repeat center center;
                }
                span.mq-li-03:hover{
                    background: url(/static/img/img3.png) no-repeat center center;
                }
                span.mq-li-04 {
                    background: url(/static/img/img44.png) no-repeat center center;
                }
                span.mq-li-04:hover{
                    background: url(/static/img/img4.png) no-repeat center center;
                }
                span.mq-li-05 {
                    background: url(/static/img/img55.png) no-repeat center center;
                }
                span.mq-li-05:hover{
                    background: url(/static/img/img5.png) no-repeat center center;
                }
                h2{
                    font-size: 20px;
                    color: #00caee;
                }
            }
        }
    }
    .list.line6{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        li {
            text-align: center;
            img {
                border: solid 10px #f1f1f1;
                border-radius: 100%;
                width: 155px;
                margin: 5px;
                height: 152px;
            } 
        } 
    }
    .wrap1{width: 100%}
    .mq-common-hd{width: 100%}
    ul.mq-serv-list{width: 1230px;margin: 0 auto;}
    #pic{
    	li{
    		a{
    			img{
    				height: 100%;
    			}
    		}
    	}
    }
</style>
