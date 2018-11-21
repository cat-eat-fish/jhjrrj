<template>
  <div class="index">
      <MyHead></MyHead>
      <div class="bar">
          <img :src="'./static/img/800.jpg'" alt="" width="100%" height="180px">
          <div class="imgtext">
              <span>和达专业股票配资平台搭建</span>
              <span>暴利！ 赚钱！ 安全</span>
          </div>
      </div>
    <div class="bar">
            <div class="borBox" id="experienceBox">
                <dl id="textBox" >
                    <h2 class="bigtit" style="font-size:25px;text-align:center;margin:28px 0;">股市连续上涨，股民热情高涨，配资需求旺盛</h2>
					<div class="con">
                        <p class="title">
                            和达股票配资软件产品亮点：
                        </p>
                        <ul>
                            <li>
                                <p class="text">1、可对接任意一家券商实盘账户</p>
                            </li>
                            <li>
                                <p class="text">2、在线开户、在线配资、交易买卖股票、在线出入金功能</p>
                            </li>
                            <li>
                                <p class="text">3、五级独立管理后台、三级代理功能</p>
                            </li>
                            <li>
                                <p class="text">4、系统自带风控管理系统、持仓管理系统、CRM财务管理系统</p>
                            </li>
                            <li>
                                <p class="text">5、PC电脑交易端、安卓交易端、苹果交易端</p>
                            </li>
                            <li>
                                <p class="text">6、PC端、APP端、微信公众号内出入金、股票交易、信息推送功能</p>
                            </li>
                            <li>
                                <p class="text">7、权限功能自由模块化</p>
                            </li>
                        </ul>
                        <p class="title">
                            为什么要选择股票配资项目：
                        </p>
                        <ul>
                            <li>
                                <p class="text">股票配资项目：市场大、易操作、高利润、零风险 </p>
                            </li>
                            <li>
                                <p class="text">市场大：2015年6月场内场外配资规模达到3万亿，开通两融必须账号资金达到50万，而资金五十万以下的客户同样存有巨大的市场需求未被开发。  </p>
                            </li>
                            <li>
                                <p class="text">易操作：客户在自己账户内申请配资合约，资金毫秒到账，无繁琐审核程序。  </p>
                            </li>
                            <li>
                                <p class="text">高利润：月息3%，日息2.7‰，交易佣金1.5‰，赚小额放贷的钱也赚了证券交易手续费。</p>
                            </li>
                            <li>
                                <p class="text">零风险：客户保证金亏损至30%时系统自动平仓，不会伤害金主资金，资金在金主账户内，盈利部分归客户所有，但亏损扣除客户保证金。</p>
                            </li>
                        </ul>
                        <p class="title">
                            和达股票配资软件原理：
                        </p>
                        <ul>
                            <li>
                                <p class="text">按照恒生homes分仓系统原生开发，系统将金主母账户适配多个子账户，客户申请配资合约生成独立子账户进行股票交易。</p>
                            </li>
                        </ul>
                        <p class="title">
                            和达股票配资软件平台特色：
                        </p>
                        <ul>
                            <li>
                                <p class="text">1)互联网平台运营配资业务，提升公司形象，高效开展全国配资市场；</p>
                            </li>
                            <li>
                                <p class="text">2)线上配资申请、加仓减仓业务申请，方便、灵活、及时；</p>
                            </li>
                            <li>
                                <p class="text">3)自动计利息/收利息，系统管理业务，清晰的资金数据；</p>
                            </li>
                            <li>
                                <p class="text">4)免费体验、盈利分成、按天配资、按月配资等多种灵活的配资方案；</p>
                            </li>
                            <li>
                                <p class="text">5)实时自动风控/补仓/平仓、自动计利息/扣利息；</p>
                            </li>
                            <li>
                                <p class="text">6)Level2行情，在线实盘极速交易；</p>
                            </li>
                            <li>
                                <p class="text">7)买入限制设置：单票仓位控制、可实时更新限买股（st、跌停股、重大利空消息股等）。</p>
                            </li>
                        </ul>
                        <p class="title">
                            和达股票配资软件优势：
                        </p>
                        <ul>
                            <li>
                                <p class="text">1. 毫秒交易，实盘对接：子账户买入卖出交易，在母账户实现毫秒交易，没有任何延迟。</p>
                            </li>
                            <li>
                                <p class="text">2.多级管理，按日返利：软件专为营销团队开发，有老板、总监、经理、代理、客户5个管理后台，非常适合营销团队做客户开发、客户追踪、业绩管理和发放，可以做到销售团队日结，更好激励员工和开发全国市场。</p>
                            </li>
                            <li>
                                <p class="text">3.系统成熟，构架迅速：软件系统成熟，两周内可完成平台所有架构，即可上线运营。目前全国已架构多家平台。程序化操作，避免了线下配资人工盯盘操作不及时问题。</p>
                            </li>
                        </ul>
                    </div>
                </dl>

                <div class="ruleText">
                   
                </div>
            </div>
        </div>
    <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from "@/components/myhead"
import MyFoot from "@/components/myfoot"
export default {
    components:{
        MyHead,MyFoot
    },
    name: 'index',
    data () {
        return {
            
        }
    },
    createrd(){
        console.log(1)
    },
    methods:{
        
    },
}
</script>
<style scoped lang="scss">
.bigtit{
    font-size: 24px;
    color: #000;
    font-weight: bold
}
    .bar {
        width: 1000px;
        margin: 10px auto;
        position: relative;
        .imgtext{
            font-size: 38px;
            color: #fff;
            span:nth-of-type(1){
                width: 100%;
                display: block;
                position: absolute;
                font-size: 20px;
                top: 22%;
                left: 18%;
            }
            span:nth-of-type(2){
                display: block;
                position: absolute;
                top: 40%;
                left: 42%;
            }
        }
        #experienceBox {
            padding: 12px 30px;
            #textBox {
                width: 686px;
                margin: 0 auto;
                p.title:nth-child(1){
                    margin: 0;
                }
                p.title{
                    font-size: 16px;
                    font-weight: bold;
                    color: red;
                    margin-top: 20px;
                }
                li{
                    list-style: none;
                    color: #333;
                    margin-left: 24px;
                    margin-top: 10px;
                    
                    p{
                        line-height: 22px;
                    }
                }
            }
        }
        .borBox {
            display: block;
            margin-top: 15px;
            background-color: #fbfbfb;
        }
    }
</style>
