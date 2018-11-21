<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      
    }
  },
 
}
</script>

<style>
    html,body,#app { width:100%; height:100%;} /*这行设置能实现单层满屏显示*/
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .main,.view{
        width: 1200px;
        margin: 0 auto;
    }
    @media screen and (max-width: 1200px) {
	    #app {
	        width: 1200px;
	    }
	}
</style>
