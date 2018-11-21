<template>
    <div class="news">
        <MyHead></MyHead>
            <!-- 1 -->
            <div class="about_box" style="background:url(/static/img/1433750465.jpg) no-repeat center top; background-size:cover;"></div>
            <!-- 2 -->
            <div class="news_module">
                <div class="left_side">
                <div class="tree_menu">
                <ul>
                    <li><router-link   to="/news"><i class="t2"></i>新闻动态</router-link></li>
                    <li><router-link class="active" to="/knowledge"><i class="t2"></i>产品知识</router-link></li>
                </ul>
                </div>

                <a href="/a/server/#templatemo4" class="green_bt"><span></span>
                
                </a> </div>

                <div class="right_side">
                    <div id="content"> 

                        <div class="news_list" v-for="(item,index) in nowlists" :key="index">
                            <div class="pic" :style="{backgroundImage:'url(' + item.img + ')'}" style="background-repeat: no-repeat;background-position center center; background-size:cover;"> 
                                <a href="javascript:;" @click="gonewspage(item)"></a> 
                            </div>
                            <ul>
                                <li>
                                    <h1>
                                        <a href="javascript:;" @click="gonewspage(item)">{{item.articletitle}}</a> 
                                    </h1>
                                </li>
                                <li>案例更新 {{item.addtime}}</li>
                                <li>{{item.view}} 人看过</li>
                                <!-- <li>{{ (item.text).replace(/ / , "").slice(0,80) }}<a href="javascript:;"  @click="gonewspage(item)">查看全文</a> </li> -->
                            </ul>
                        </div>

                        <!-- 页码 -->
                        <Page :alldate="this.page.oldlistsnum" :onedate="this.page.onedate" @pageprev="pageprev" @ievent ="ievent"></Page>
                    </div>
                </div>
            </div>
        <MyFoot></MyFoot>
    </div>
</template>
<script>
import MyHead from "@/components/myhead"
import MyFoot from "@/components/myfoot"
import Page from '@/components/page'
export default {
    components:{
        MyHead,MyFoot,Page
    },
  name: 'news',
  data() {
    return {
        page:{
            onedate:5,
            oldlistsnum:'',
        },
        nowlists:[],
        lists:[
            
        ]
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
      var that = this;
        var mycode = '85FA97B7763CA5622533F77E7B4BA26C';
        this.$axios.get(`http://admin.hdjrrj.com/home/index/new_list?mycode=${mycode}&aid=2`,)
            .then(function (res) {
                that.lists=res.data.data
                that.lists.addtime = res.data.data.forEach((item,index)=>{
                    item.addtime =  timestampToTime(item.addtime)
                })
                that.lists.text = res.data.data.text
                
                that.$route.query.page=undefined ? 1:that.$route.query.page;
                if(that.$route.query.page==1 || that.$route.query.page==undefined){
                    that.nowlists=that.lists.slice(that.$route.query.page*that.page.onedate-that.page.onedate,that.page.onedate);
                }else{
                    that.nowlists=that.lists.slice(that.$route.query.page*that.page.onedate-that.page.onedate,that.$route.query.page*that.page.onedate);
                }
                that.page.oldlistsnum=that.lists.length;
                var page=that.$route.query.page;
                if(page){
                    page=that.$route.query.page;
                }else{
                    page=1;
                }
            })
            .catch(function (error) {
                console.log(error)
        });
  },
  mounted(){
  },
  methods:{
      ievent(data){
        if(data==1){
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,this.page.onedate);
        }else{
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,data*this.page.onedate);
        }
        this.$router.push({path:'/news',query:{page:data}})
      },
      pageprev(data){
        if(data==1){
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,this.page.onedate);
        }else{
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,data*this.page.onedate);
        }
        this.$router.push({path:'/news',query:{page:data}})
      },

      gonewspage(item){
          this.$router.push(`/newspage?aid=${item.aid}&id=${item.Id}`);
      }
  },
}
</script>
<style scoped lang="scss">
    .news_module {
        width: 1200px;
        margin: 0 auto;
    }
    .left_side {
        width: 200px;
        float: left;
        .tree_menu {
            width: 100%;
            border-top: 1px solid #e6e6e6;
            margin-top: 50px;
            ul {
                line-height: 50px;
                li {
                    border-bottom: 1px solid #e6e6e6;
                    font-size: 14px;    
                    .active {
                        font-weight: bold;
                        color: red;
                    }
                    a {
                        color: #222;
                        display: block;
                        i {
                            background: #999 url(/static/img/common.png) no-repeat;
                            width: 16px;
                            height: 16px;
                            display: inline-block;
                            margin: 0 12px 0 20px;
                            vertical-align: -3px;
                        }
                    }
                }
            }
        }
    }
    .right_side {
        width: 940px;
        float: right;
        .news_list {
            width: 100%;
            margin: 50px auto;
            clear: both;
            overflow: hidden;
            padding-bottom: 50px;
            border-bottom: 1px dotted #c0c2c3;
            .pic {
                float: left;
                display: block;
                width: 270px;
                height: 180px;
            }
            ul {
                width: 620px;
                float: right;
                margin-right: 25px;
                text-align: left;
                color: #666;
                font-size: 14px;
                line-height: 24px;
                li {
                    margin-bottom: 7px;
                    h1 a {
                        font-size: 24px;
                        color: #222;
                        display: block;
                        margin-bottom: 5px;
                        font-weight: normal;
                    }
                }
                a {
                    color: #3aba55;
                }
            }
        }
    }
</style>
