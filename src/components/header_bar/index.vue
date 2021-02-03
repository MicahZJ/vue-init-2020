<template lang="pug">
  div#header-bar-wrapper
    div.bar-box
      li.bar-content(v-for="(item, index) in barList"
                    :key="index"
                    :class=`{'active': index === barIndex}`
                    @click="clickHandler(index, item)")
        span.bar-text(:class=`{'active': index === barIndex}`) {{item.name}}
        //span.bar-space
</template>

<script src="./control.js"></script>

<style scoped lang="stylus" src="./style.styl"/>