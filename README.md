# vue-init-2020
## 2020/05/30 增加

#### 1. vue-cli版本 @vue/cli 4.4.1

#### 2. 初始化并配置vue.config文件

## 2020/06/04 增加

### 1. html模板pug
装完直接可以使用，不需要配置
`
npm i -D pug-plain-loader pug
`
### 2. css模板stylus
装完直接使用，不需要配置
`
npm i -D stylus stylus-loader
`
### 3. 配置路由
#### 3-1. 安装路由
`
npm i -S vue-router
`
#### 3-2. 在router文件夹中新建index.js文件，然后写入
```
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

export default router

```
#### 3-2. 在mian.js中导入

```
import router from './router';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

### 4. 配置vuex
#### 4-1. 安装
`
npm i -S vuex
`

#### 4-2. 在store文件夹下新建index.js文件,并写入

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

```

#### 4-3. 在main.js中导入

```
import store from './store'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
```

### 5. 增加element ui 库
#### 5-1. 安装包
`
npm i element-ui -S
`
#### 5-2. 在pluglins文件夹中新建index.js文件，然后写入
```
import Vue from 'vue';
// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```
#### 5-3.在mian.js中导入
```
// 插件相关
import './pluglins/index'
```

### 6. 配置axios
#### 6-1. 安装
`
npm i -S axios
`

#### 6-2. 在utils文件夹中新建httpTool.js文件，并写入
建立axios类，方便重复调用
```
import axios from "axios";
import webConfig from "./webConfig";

class HttpAxios {
  constructor () {
  }
  
  axiosGet(url, params) {
    // 设置token
    // axios.defaults.headers.common["Authorization"] = "token " + localStorage.getItem("token");
    
    // 配置接口地址
    url = webConfig.apiPath + url;
  
    // 返回一个promise的get请求
    return axios
      .get(url, params)
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(ERR => {
        // alert(ERR);
        console.log("接口报错", ERR);
      });
  }
  
  axiosPost(url, params) {
    // 设置token
    // axios.defaults.headers.common["Authorization"] = "token " + localStorage.getItem("token");
  
    // 配置接口地址
    url = webConfig.apiPath + url;
  
    // 返回一个promise的post请求
    return axios
      .post(url, params)
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(ERR => {
        // alert(ERR);
        console.log("接口报错", ERR);
      });
  }
}

export default new HttpAxios()

```

#### 6-3. 在utils文件夹中新建webConfig.js，并写入
配置接口地址
```
let api;
console.log("process.env.NODE_ENV", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  // 生产环境api接口地址
  api = {
    apiURL: "/",
    publicPath: "/",
    apiPath: "/",
    staticPath: "/"
  };
} else if (process.env.NODE_ENV === "development") {
  // 开发环境
  api = {
    apiURL: "/",
    publicPath: "/",
    apiPath: "/",
    staticPath: "/"
  };
}

const config = {
  api: api,
  publicPath: api.publicPath,
  staticPath: api.staticPath,
  apiPath: api.apiPath
};

export default config;

```

#### 6-4.在main.js导入，并绑定到原型链
```
// 绑定axios到Vue原型链
import HttpAxios from './utils/httpTool'
Vue.prototype.$Http = HttpAxios
```
> dependencies(运行依赖)
也就是我们项目运行上线还会使用的插件 比如webpack axios vant Element UI框架

> devDependencies(开发依赖)
也就是帮助开发的插件 比如babel live-server lodash loader类似的

## 2020/06/06 增加
### 1. 增加vw布局
#### 1-1. 安装包

```
npm install postcss-px-to-viewport -D
```

#### 1-2. 在vue.config.js配置
```
css: {
    extract: IS_PROD,
    sourceMap: false,
    loaderOptions: {
      scss: {
        // 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀
        // 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
        prependData: `
          @import "@scss/variables.scss";
          @import "@scss/mixins.scss";
          @import "@scss/function.scss";
          $src: "${process.env.VUE_APP_BASE_API}";
          `
      },
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px",	// 需要转换的单位，默认为"px"
            viewportWidth: 1920,   // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
            // viewportHeight:667,// 视窗的高度，对应的是我们设计稿的高度
            unitPrecision: 3,		// 单位转换后保留的精度
            propList: [		// 能转化为vw的属性列表
              "*"
            ],
            viewportUnit: "vw",		// 希望使用的视口单位
            fontViewportUnit: "vw",		// 字体使用的视口单位
            selectorBlackList: [],	// 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
            minPixelValue: 1,		// 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: false,		// 媒体查询里的单位是否需要转换单位
            replace: true,		// 是否直接更换属性值，而不添加备用属性
            exclude: /(\/|\\)(node_modules)(\/|\\)/,		// 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
          })
        ]
      }
    }
  },
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
