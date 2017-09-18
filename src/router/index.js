import Vue from 'vue'
import Router from 'vue-router'
import {pageRoutes} from './routes'
// 基础路由 有底部导航栏的入口
import App from './../App'
import login from './../views/login.vue'
/**
 * 定义（路由）组件。
 * 从其他文件 引入 进来
 * 使用下面这种方式来加载组件,而不用import ，是因为 这样可以实现路由懒加载,分js打包,按需加载
 * 在build后 会有多个小js 文件
 * */



Vue.use(Router);

/**
 * 定义路由 routes` 配置
 */
const routes = [
  {
    path: '/',
    name : 'index',
    components: {
        default : App,
        view1:login
    },
    redirect: '/home',
    children : pageRoutes
  },
];

export default new Router({
  routes
})
