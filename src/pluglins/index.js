import Vue from 'vue';
// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// echarts_page
import ECharts from 'vue-echarts'
import "echarts/lib/chart/line"; // 线图
import "echarts/lib/chart/bar"; // 柱图
import "echarts/lib/chart/pie"; // 柱图
import "echarts/lib/chart/map"; // 柱图
import "echarts/lib/chart/scatter"; // 柱图
import "echarts/lib/chart/effectScatter"; // 柱图
import "echarts/lib/chart/gauge"; // 柱图
import 'echarts/lib/component/polar'
import 'echarts/lib/component/legend' // 图例
import 'echarts/lib/component/tooltip' //提示框
Vue.component('chart', ECharts)
