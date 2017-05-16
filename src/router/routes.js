/**
 * 定义（路由）组件。
 * 从其他文件 引入 进来
 * 使用下面这种方式来加载组件,而不用import ，是因为 这样可以实现路由懒加载,分js打包,按需加载
 * 在build后 会有多个小js 文件
 * */

// 引入首页路由
const home = resolve => require(['./../views/homePage/home'], resolve);
const test1 = resolve => require(['./../views/homePage/test1'], resolve);


// 引入会员卡路由
const vip = resolve => require(['../views/vipPage/vip'], resolve);

// 引入我的路由
const my = resolve => require(['./../views/myPage/my'], resolve);



/**
 * 我的红包列表
 * @type {{path: string, component: Function, children: *[]}}
 */
export const pageRoutes = [
    /**
     * 首页
     * */
    {
        path: '/home',
        name : 'home',
        component: home,
    },
    {
        path: '/home/test1',
        name : 'test1',
        component: test1,
    },
    /**
     * 会员卡
     * */
    {
        path: '/vip',
        name : 'vip',
        component: vip
    },
    /**
     * 我的
     * */
    {
        path: '/my',
        name : 'my',
        component: my,
    },
]
