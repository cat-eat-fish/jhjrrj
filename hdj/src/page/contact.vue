<template>
    <div class="contact">
        <MyHead></MyHead>
            <div class="layout"> <img src="/static/img/contact.jpg" class="img"> </div>
            <div class="layout contact banner-bg">
                <div class="main800">
                    <!--<img src="/static/img/contact-1.jpg" class="img">-->
                </div>
            </div>
            <div class="container contact article">
                <ul class="list line2">
                    <li>
                        <div>                                                        
                            <img class="img" src="../../static/img/contact-2.png">
                        </div>
                        <div>
                        	<p>金虎金融软件科技有限公司</p>
		                	<p>联系电话：彭 171-6946-1128（同微信）</p>
		                	<p>公司地址：浙江省杭州市滨江区华业大厦12楼</p>
		                	<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;广东省深圳市龙岗区吉信大厦26楼</p>
		                	<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;湖北省武汉市硚口区宝丰时代大厦9楼</p>
                        </div>
                        <!--<br>
                        <div>
                            <img class="sz" src="/static/img/contact-3.jpg">
                            <div class="lianxi">
                                <strong class="title">{{info.name}}</strong>
                                <p>
                                    服务电话：{{info.phone}}</p>
                                <p>
                                    地址：{{info.address}}</p>
                                <p>
                                    <!-- 邮箱 ：{{info.email}}
                                </p>
                            </div>
                        </div>-->
                    </li>
                </ul>
            </div>
            <!--百度地图容器-->
            <div id="baiduMap"></div>
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
  name: 'contact',
  data() {
    return {
        info:{
          name:'',
          address:'',
          phone:'',
          phone2:'',
          email:'',

      },
        CityInfo: {
            longitude: 114.31,  //经度
            latitude:30.52      //维度
        },
    }
  },
  created(){
        var that = this;
        var mycode = '85FA97B7763CA5622533F77E7B4BA26C';
        this.$axios.get(`http://admin.hdjrrj.com/home/index/company_list?mycode=${mycode}`,)
            .then(function (res) {
                that.info.name = res.data.data[0].name;
                that.info.address = res.data.data[0].address;
                that.info.email = res.data.data[0].email;
                that.info.phone = res.data.data[0].tell1;
                that.info.phone2 = res.data.data[0].tell2;
            })
            .catch(function (error) {
                console.log(error)
        });
    },
   mounted(){
      this.initBaiduMap()
  },
  
  methods: {
    initBaiduMap() {
      let that = this
      let script = document.createElement("script")
      script.src = "http://api.map.baidu.com/api?v=2.0&ak=zishHhU993mnCRDS3zncmazHuZkIRfti&callback=createMap"
      document.head.appendChild(script)
      window.createMap = () => {
        //创建Map实例
        var map = new BMap.Map("baiduMap"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(this.CityInfo.longitude, this.CityInfo.latitude), 11); // 创建点坐标,初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.addControl(new BMap.ScaleControl({
            anchor: BMAP_ANCHOR_BOTTOM_LEFT
        }));
        map.addControl(new BMap.NavigationControl({
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT
        }));
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        map.enableInertialDragging(); //两秒后开启惯性拖拽
      }
    },
  },
}
</script>
<style scoped lang="scss">
    .img {
        display: block;
        max-width: 100%;
        height: auto;
    }
    .contact.banner-bg {
        background: #2f4250;
        img{
            margin: 0 auto;
        }
    }
    .container {
        width: 1200px;
        padding: 50px 0;
        margin: 0 auto;
        font-size: 16px;
    }
    .sz {
        float: left;
        width: 170px;
    }
    .lianxi {
        float: left;
        width: 400px;
        font-size: 12px;
        .title {
            color: #333;
            font-size: 20px;    
            margin-bottom: 10px;
            display: inline-block
        }
        p {
            text-indent: 0;
            line-height: 20px;
            margin: 0;
            font-size: 14px;
        }
    }

    #baiduMap{
        width: 66%;
        height: 500px;
        margin: 20px auto;
    }
    .list{
		li{
			overflow: hidden;
			div{
				width: 50%;
				float: left;
				p{
					line-height: 38px;
		    		font-size: 16px;
		    		font-weight: 600;
				}
			}
		}
    }
</style>
