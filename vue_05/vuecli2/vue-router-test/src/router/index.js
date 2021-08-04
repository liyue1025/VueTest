import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'

// 1、安装插件
Vue.use(VueRouter);

// 2、创建路由对象
const router = new VueRouter({
  // history 模式
  mode: 'history',
  // 配置路径和组件之间的映射关系
  routes: [{
    // 配置默认路由
    path: '/',
    // 重定向到 home
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/about',
    component: About
  }, {
    // 动态路由
    path : '/user/:userId',
    component : User
  }],
});

// 3、将router对象传入vue实例中
export default router;
