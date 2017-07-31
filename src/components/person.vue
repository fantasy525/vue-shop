<template>
  <div class=''>
    个人中心
    <router-link to="/person/info">info</router-link>
    <keep-alive>
      <transition name="slide-left">
        <router-view></router-view>
      </transition>
    </keep-alive>
  
  </div>
</template>
<style scoped lang='stylus' rel='stylesheet/stylus'>
    .slide-left-enter-active,.slide-left-leave-active
    transition: all .2s
  .slide-left-enter
    transform : translate3d(100%,0,0)
  .slide-left-leave-to
    transform : translate3d(-100%,0,0)
  .slide-right-enter-active,.slide-right-leave-active
    transition: all .2s
  .slide-right-enter
    transform : translate3d(-100%,0,0)
  .slide-right-leave-to
    transform : translate3d(100%,0,0)
</style>
<script type='text/ecmascript-6'>
export default {}
</script>
