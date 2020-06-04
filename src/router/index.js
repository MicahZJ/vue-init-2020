import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index';

// 懒加载组件
// const Home = () => import("./views/Home/index");
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     // 当前组件需要登录权限
//     if (localStorage.getItem("token")) {
//       // 有权限
//       if (to.path === "/login") {
//         //登录状态下 访问login.vue页面 会跳到homepage.vue
//         next({ path: "/homepage" });
//       } else {
//         next();
//       }
//     } else {
//       // 没有权限 ,访问任何页面。都会进入到 登录页
//       console.log("进入1");
//       if (to.path === "/login") {
//         // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
//         console.log("进入2");
//         next();
//       } else {
//         // 否则 跳转到登录页面
//         console.log("进入3");
//         next({ path: "/" });
//       }
//     }
//   } else {
//     // 不需要
//     next();
//   }
// });

export default router
