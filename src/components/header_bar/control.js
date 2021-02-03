export default {
  data () {
    return {
      barList: [
        {
          name: '首页',
          path: '/home',
          i: 'el-icon-house'
        },
        {
          name: 'echarts',
          path: '/echarts',
          i: 'el-icon-data-line'
        },
        {
          name: 'vuex',
          path: '/vuex',
          i: 'el-icon-data-line'
        }
      ],
      barIndex: 0,
    };
  },
  watch: {},
  computed: {},
  components: {},
  methods: {
    // 切换barIndex
    clickHandler(index, item) {
      if (this.barIndex === index) {
        return
      }
      this.barIndex = index;
      localStorage.setItem('barIndex', this.barIndex)
      this.$router.push({ path: item.path})
    }
  },
  beforeCreate () {
    /*
    * 实例初始化后，创建完成之前被调用
    */
    console.log ('1. beforeCreate');
  },
  created () {
    /*
    * 实例创建完成后被立即调用，这个时候还没有开始挂载 不能访问
    */
    console.log ('2. created');
  },
  beforeMount () {
    /*
    * 挂载开始之前调用，即将开始挂载
    */
    console.log ('3. beforeMount');
    
  },
  mounted () {
    /*
    * 实例挂载之后调用，但是并不是所有子组件也都一起挂载完成
    */
    console.log ('5. mounted');
    if (localStorage.getItem('barIndex')) {
      this.barIndex = Number(localStorage.getItem('barIndex'))
    }
  },
  beforeUpdate () {
    /*
    * 数据更新完成前调用，发生在虚拟DOM重新渲染和打补丁前，在这里进一步的更改状态，不会触发重新渲染
    */
    console.log ('6. beforeUpdate');
  },
  updated () {
    /*
    * 更改数据重新渲染虚拟DOM后调用
    */
    console.log ('8. updated');
  },
  beforeDestroy () {
    /*
    * 实例销毁之前调用，在这一步，实例仍然可用
    */
    console.log ('9. beforeDestroy');
  },
  destroyed () {
    console.log ('10. destroyed');
  }
};