import Doughnut from '@/components/charts/Doughnut'
import Point from '@/components/charts/Point'
import LineChart from '@/components/charts/Line'
import Map from '@/components/charts/Map'
import Bar from '@/components/charts/Bar'
import Pie from '@/components/charts/Pie'
import Gauge from '@/components/charts/Gauge'
import DoubleLine from '@/components/charts/DoubleLine'

export default {
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  components: {
    Doughnut,
    Point,
    Map,
    LineChart,
    Bar,
    Pie,
    Gauge,
    DoubleLine
  },
  beforeCreate () {
    /*
     * 实例初始化后，创建完成之前被调用
     */
  },
  created () {
    /*
     * 实例创建完成后被立即调用，这个时候还没有开始挂载 不能访问
     */
  },
  beforeMount () {
    /*
     * 挂载开始之前调用，即将开始挂载
     */
  },
  mounted () {
    /*
     * 实例挂载之后调用，但是并不是所有子组件也都一起挂载完成
     */
  },
  beforeUpdate () {
    /*
     * 数据更新完成前调用，发生在虚拟DOM重新渲染和打补丁前，在这里进一步的更改状态，不会触发重新渲染
     */
  },
  updated () {
    /*
     * 更改数据重新渲染虚拟DOM后调用
     */
  },
  beforeDestroy () {
    /*
     * 实例销毁之前调用，在这一步，实例仍然可用
     */
  },
  destroyed () {
    /*
     * 实例销毁
     */
  }
}
