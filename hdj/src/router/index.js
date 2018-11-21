import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'                              //首页
import Home from '@/page/home'                                //首页

import Allocation from '@/page/allocation'                    //股票配资
import Strategy from '@/page/strategy'                        //股票买点
import Treasure from '@/page/treasure'                        //一元夺宝

import AddedService from '@/page/addedService'                //增值服务
import SaleService from '@/page/saleService'                  //售后服务

import News from '@/page/news'                                //新闻动态
import NewsPage from '@/page/newspage'                        //新闻详情页
import Knowledge from '@/page/knowledge'                      //动态知识

import Introduce from '@/page/introduce'                      //公司介绍
import Contact from '@/page/contact'                          //联系我们



import No404 from '@/page/no404'                          //404

// import A from '@/page/a'                          //测试
// import B from '@/page/b'                          //测试

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base:'hengda',
  routes: [
    // 首页
    // {
    //   path: '/',
    //   name: 'index',
    //   component: Index,
    //   meta: {
    //     keepAlive: true // 需要被缓存
    //   }
    // },
    // 首页
    {
      path: '/',
      name: 'home',
      component: Home,
      // meta: {
      //   keepAlive: true // 需要被缓存
      //  }
    },
    // 股票配资
    {
      path: '/allocation',
      name: 'allocation',
      component: Allocation,
    },
    // 股票买点
    {
      path: '/strategy',
      name: 'strategy',
      component: Strategy,
    },
    // 一元夺宝
    {
      path: '/treasure',
      name: 'treasure',
      component: Treasure,
    },
    
    
    // 增值服务
    {
      path: '/addedService',
      name: 'addedService',
      component: AddedService,
    },
    // 售后服务
    {
      path: '/saleService',
      name: 'saleService',
      component: SaleService,
    },
    {
      path: '/dynamic',
      redirect:'/news',
      name:'news',
      component: News,
    },
    // 新闻动态
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    // 新闻详情页
    {
      path: '/newspage',
      name: 'newspage',
      component: NewsPage,
    },
    // 动态知识
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge,
    },


    // 公司介绍
    {
      path: '/introduce',
      name: 'introduce',
      component: Introduce,
    },
    // 联系我们
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '*',
      name: 'no404',
      component: No404
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
