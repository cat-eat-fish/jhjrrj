<template>
    <div class="addedService">
        <MyHead></MyHead>
            <!-- Swiper -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="/static/img/img-text.png" alt="">
                    </div>
                    <div class="swiper-slide s2">
                        <!-- 我们能为你做什么 -->
                        <div class="service">
                            <div class="wrap">
                                <div class="mq-common-hd">
                                <h2>我们能为您解决什么 </h2>
                                <p>五年锤炼，稻穗务实笃信，为企业精准定制互联网解决方案</p>
                                <div class="mq-bottomline"></div>
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
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
            <keep-alive include="myfoot">
                <MyFoot></MyFoot>
            </keep-alive>
    </div>
</template>
<script>
import Swiper from 'swiper'; 
import MyHead from "@/components/myhead"
import MyFoot from "@/components/myfoot"
export default {
    components:{
        MyHead,MyFoot
    },
  name: 'addedService',
  data() {
    return {
    }
  },
  created(){

  },
  methods:{

  },
  mounted(){
      var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
</script>
<style scoped lang="scss">
    .addedService,.swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #333;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .s2{
        width: 100%;
        background-color: #fff;
    }
    .service {
        position: relative;
        top: -280px;
        .wrap {
            width: 1200px;
            margin: auto;
        }
        .mq-common-hd {
            text-align: center;
            position: relative;
            h2 {
                color: #2e2e2e;
                font: 40px/1.5 "Microsoft Yahei";
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
        position: absolute;
        left: 0;
        top: 100%;
        transition: all .5s;
        font-size: 14px;
        text-align: left;
        li:hover{
            border-color: #ccc;
        }
        li {
            float: left;
            border: 1px solid transparent;
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
</style>
