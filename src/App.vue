<template>
  <div id="app">
    <header-bar/>
    <div class="app-main">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import HeaderBar from '../src/components/header_bar/index'

export default {
  name: 'App',
  components: {HeaderBar}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;

  /* margin-top: 60px; */
}

#app .app-main {
  width: 100vw;
  height: calc(100vh - 50px);
  padding: 15px 10px;
  box-sizing: border-box;
  background: #EEE;
}

/* 可以设置不同的进入和离开动画 */

/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

/* 滚动条设置 */

/* 滚动条凹槽的颜色，还可以设置边框属性 */
*::-webkit-scrollbar-track-piece {
  background-color:#f8f8f8;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

/* 滚动条的宽度 */
*::-webkit-scrollbar {
  width:9px;
}

/* 滚动条的设置 */
*::-webkit-scrollbar-thumb {
  background-color: rgba(98, 124, 131, 0.17);
  background-clip:padding-box;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

/* 滚动条鼠标移上去 */
*::-webkit-scrollbar-thumb:hover {
  background-color: rgba(98, 124, 131, 0.42);
}

</style>
