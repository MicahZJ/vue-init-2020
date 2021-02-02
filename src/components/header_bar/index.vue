<template lang="pug">
  div#header-bar-wrapper
    div.bar-box
      li.bar-content(v-for="(item, index) in barList"
                    :key="index"
                    @click="clickHandler(index, item)")
        i(:class="[item.i]")
        span.bar-text(:class=`{'active': index === barIndex}`) {{item.name}}
        span.bar-space
</template>

<script src="./control.js"></script>

<style scoped lang="stylus" src="./style.styl"/>