<template>
    <div class="myfoot">
            <div class="main">
                <!-- <div class="foot-about"> 
                    <strong>我们是谁</strong>  <br>
                    <br>
                    <p>{{info.name}} 是一家专注于手机APP应用软件开发外包服务公司,专业从事安卓，IOS手机应用软件外包APP定制开发，专注于购物商城，在线教育，金融理财，企业分销领域APP定制开发，咨询热线：{{info.phone}} <br>
                        <br>
                    </p>
                    <br>
                    <p align="right"><router-link to="/introduce">了解详情 →</router-link></p>
                    <br>
                </div>
                <div class="foot-case"> <strong>合作案列</strong>
                    <ul class="foot-img">
                        <li class="opacity"><router-link to=""><img src="/static/img/1-15062Z95933200.jpg" width="125" height="98"></router-link></li>
                        <li class="opacity"><router-link to=""><img src="/static/img/1-15062Z95FX02.jpg" width="125" height="98"></router-link></li>
                        <li class="opacity"><router-link to=""><img src="/static/img/1-15062Z95630343.jpg" width="125" height="98"></router-link></li>
                        <li class="opacity"><router-link to=""><img src="/static/img/1-15062Z95613559.jpg" width="125" height="98"></router-link></li>
                    </ul>
                    <br>
                </div> -->
                <div class="foot-contact"> 
                	<p>金虎金融软件科技有限公司</p>
                	<p>联系电话：彭 171-6946-1128（同微信）</p>
                	<p>公司地址：浙江省杭州市滨江区华业大厦12楼</p>
                	<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;广东省深圳市龙岗区吉信大厦26楼</p>
                	<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;湖北省武汉市硚口区宝丰时代大厦9楼</p>
                    <!--<strong>联系我们</strong>
                    <h4>{{info.name}} </h4>
                    <br>
                    <br>
                    <p>联系电话：{{info.phone}}（微信同号）</p>-->
                    <!-- <p><span><img src="/static/img/f1.png"></span> {{info.address}}</p>
                    <p><span><img src="/static/img/f2.png"></span> {{info.phone2}}</p>
                    <p><span><img src="/static/img/f3.png"></span> {{info.email}}</p> -->
                    <br>
                </div>
                <div class="foot-follow"> 
                	<div class="ewm">
                		<img src="/static/img/code.png"/>
                	</div>
                	<strong>时间就是金钱，赶紧联系我吧！</strong>
                	<!--<strong>关注我们</strong>
	                <!-- <p> <img src="/static/img/weixin.png" width="119" height="119" title="织梦高端手机软件科技公司网站源码 网络公司设计工作室网站模板" alt="织梦高端手机软件科技公司网站源码 网络公司设计工作室网站模板"> </p>
	                <p class="ewm"> 微信扫一扫<br>
	                    <img :src="info.ewm" alt="">    
	                </p>
	                <br>-->
                </div>
            </div>
    </div>
</template>
<script>
export default {
  name: 'myfoot',
  data() {
    return {
      info:{
          name:'',
          address:'',
          phone:'',
          phone2:'',
          email:'',
          ewm:'',
      }
    }
  },
  created(){
        var that = this;
        var mycode = '85FA97B7763CA5622533F77E7B4BA26C';
        this.$axios.get(`http://admin.jhjrrj.com/home/index/company_list?mycode=${mycode}`,)
            .then(function (res) {
                that.info.name = res.data.data[0].name;
                that.info.address = res.data.data[0].address;
                that.info.email = res.data.data[0].email;
                that.info.phone = res.data.data[0].tell1;
                that.info.phone2 = res.data.data[0].tell2;
                that.info.ewm = res.data.data[0].img1;
            })
            .catch(function (error) {
                console.log(error)
        });
    },
  methods:{

  }
}
</script>
<style scoped lang="scss">
.myfoot{
    width: 100%;
    background: #4a302a;
    color: #fff;
    padding: 20px 0 10px 0;
    overflow: hidden;
}
    .main{
        display: flex;
        justify-content: space-around;
    }
    .foot-about,.foot-case,.foot-contact,.foot-follow{
        width: 350px;
        strong {
            color: #fff;
            display: block;
            margin-bottom: 15px;
            font-size: 16px;
        }
        a {
            color: #a3b1bf;
        }
        .foot-img {
            list-style: none;
            width: 280px;
            li {
                display: inline-block;
                margin: 0 5px 5px 0;
            }
        }
    }
    .foot-contact{
    	p{
    		line-height: 38px;
    		font-size: 16px;
    		font-weight: 600;
    	}
    }
    .foot-about{
        margin-right: 60px;
    }
    .foot-follow {
        width: 250px;
        text-align: center;
        strong{
        	line-height: 50px;
        }
    }
    .ewm{width: 170px;height: 170px;overflow: hidden;margin: auto;}
    .ewm img{width: 100%}
</style>
