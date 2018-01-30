// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueTap from 'v-tap';
import router from './router'
import store from './vuex/store'
import * as filters from './filters/' // 自定义过滤器
import components from './components/' //加载公共组件
import { scrollRecord } from './lib/route-data/scroll-record'
import loadMore  from './directives/loadMore'
Vue.config.productionTip = false

/**
 * 引入flex.css
 * 引入所有样式
 * */
import 'flex.css'
import "./assets/css/reset.less"
import "./assets/css/tool.less"
import "./assets/css/icon.less"
import "./assets/css/public.less"
import "./assets/css/animation.less"
import "./assets/css/base.less"


/**
 * 使用vue-tap，解决移动端click事件延迟300ms
 * */
Vue.use(vueTap);

/**
 * 开启vueDebug模式
 * */
Vue.config.debug = true;

/**
 * 注册过滤器
 * */
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

/**
 * 全局引入自定义公共组件
 * 不用在页面中单个引入
 * */
Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()); //首字母大写
  Vue.component(`x${name}`, components[key])
})

/**
 * 需要记录滚动条位置的指令
 */
Vue.directive('scroll-record', scrollRecord);

/**
 * 需要记录滚动条位置的指令
 */
Vue.directive('load-more', loadMore);

/* eslint-disable no-new */
new Vue({
  el: 'app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
