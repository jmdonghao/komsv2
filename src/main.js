// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'  /* 这里是引入vue文件 */
import App from './App'  /* 这里是引入同目录下的App.vue模块 */
import router from './router'   /* 这里是引入vue的路由 */
import VueResource from 'vue-resource' /* 注册vue-source   vue-resource是一个通过XMLHttpRequest或者JSONP技术实现异步加载服务端数据的插件*/

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',/* 定义作用范围就是index.html里的id为app的范围内 */
  router, /* 引入路由 */
  components: { App }, /* 给Vue实例初始一个App组件作为template 相当于默认组件 */
  template: '<App/>'/* 注册引入的组件App.vue */
})
