<template>
    <div class="newspage">
        <MyHead></MyHead>
            <div class="news_con_banner" style="background:url(/static/img/1434885685.jpg) no-repeat center top;background-size:cover;">
                <h1>{{title}}</h1>
            </div>
            <div class="news_con_top">
                <div class="con">
                    <ul>
                    <li><strong>案例更新 {{time}} </strong> <span>分享新闻到： 
                        <!-- 微博分享 -->
                        <a href="javascript:void((function(s,d,e){try{}catch(e){}var f='http://v.t.sina.com.cn/share/share.php?',u=d.location.href,p=['url=',e(u),'&amp;title=',e(d.title),'&amp;appkey=2924220432'].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent));">
                            <i class="iconfont icon-weibo"></i>
                        </a> 
                        <!-- 微信分享 -->
                        <!-- <a href="javascript:void(0)" class="weixin1">
                            <i class="iconfont icon-weixin"></i>
                        </a> -->
                        </span>
                        </li>
                    </ul>
                    <a href="javascript:;" @click="myreturn" class="more">&lt;返回列表</a> 
                </div>
            </div>

            <div class="news_con" v-html="content">
            </div>
            <a href="javascript:;" @click="myreturn"  class="allnews">返回列表</a>
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
  name: 'newspage',
  data() {
    return {
        title:'',
        time:'',
        content:'',

    }
  },
  created(){
      function timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() < 10 ? '0'+date.getDate()+ `   ` : date.getDate()+ `   `;
        var h = date.getHours() < 10 ? '0'+date.getHours()+ ':' : date.getHours() + ':';
        var m = date.getMinutes() < 10 ? '0'+date.getMinutes()+ ':' : date.getMinutes()+ ':';
        var s = date.getSeconds();
        s = s < 10 ? '0'+s : s;
        return Y+M+D+h+m+s;
    }
      let aid = this.$route.query.aid
      let id = this.$route.query.id
      var that = this;
      var mycode = '85FA97B7763CA5622533F77E7B4BA26C';
      this.$axios.get(`http://admin.hdjrrj.com/home/index/detail?mycode=${mycode}&aid=${aid}&id=${id}`,)
        .then(function (res) {
                that.title = res.data.data[0].articletitle;
                that.time = timestampToTime(res.data.data[0].addtime);
                that.content = ((((res.data.data[0].text).replace(/\&lt;/g, "<")).replace(/\&gt;/g, ">")).replace(/\&quot;/g, '"')).replace(/src="?/gi,'src="http://admin.hdjrrj.com') 
            })
            .catch(function (error) {
                console.log(error)
        });


        this.$axios.get(`http://admin.hdjrrj.com/home/index/add_new_view?mycode=${mycode}&id=${id}`,)
        .then(function(res){
            console.log(res)
        })
        .catch(function (error) {
                console.log(error)
        });
  },
  methods:{
      myreturn(){
          this.$router.go(-1)
      },
      
  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
    .news_con_banner {
        width: 100%;
        overflow: hidden;
        text-align: center;
        height: 440px;
        h1 {
            font-size: 36px;
            line-height: 50px;
            color: #fff;
            margin-top: 230px;
        }
    }

    .news_con_top {
        width: 100%;
        border-bottom: 1px solid #e9e9e9;
        color: #3b3b3b;
        font-size: 14px;
        text-align: center;
        line-height: 59px;
        overflow: hidden;
        .con {
            width: 800px;
            margin: 0 auto;
        }
        ul {
            float: left;
            line-height: 30px;
            margin-top: 15px;
        }
        a.more {
            float: right;
            color: #2b2b2b;
        }
    }

    .news_con {
        width: 800px;
        margin: 0 auto;
        overflow: hidden;
        background-color: #fff;
        padding: 0 10px;
    }
    .news_con {
        padding-top: 30px;
    }

    .news_box {
        width: 100%;
        border-top: 1px solid #e9e9e9;
        overflow: hidden;
        margin-top: 30px;
        padding-top: 40px;
        padding-bottom: 100px;
        h1 {
            font-size: 24px;
            line-height: 40px;
            text-align: center;
        }
    }
    .news_box_list {
        width: 1000px;
        margin: 0 auto;
        line-height: 24px;
        overflow: hidden; 
        dl {
            width: 270px;
            float: left;
            color: #2a2a2a;
            margin: 30px 63px 0 0;
            h2 a {
                font-size: 16px;
                color: #000;
            }
            a.bt {
                color: #24b727;
            }
            dd {
                margin-bottom: 5px;
                width: 270px;
                height: 180px;
                a {
                    width: 100%;
                    display: block;
                    height: 100%;
                }
            }
        }
    }
    a.allnews {
        background: #24b727;
        width: 160px;
        height: 40px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        display: block;
        margin: 0 auto;
        clear: both;
        line-height: 40px;
        margin-top: 40px;
        -moz-transition: all 0.3s ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
</style>
