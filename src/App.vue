<template>
  <div class='app'>
    <keep-alive>
      <transition :name="slideName" mode="out-in">
        <router-view></router-view>
      </transition>
    </keep-alive>
    <tab></tab>
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
import Tab from './components/tab'
export default {
  data() {
    return {
      slideName: 'slide-left'
    }
  },
  components: {
    Tab
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length

      const toIndex = to.meta.index
      const fromIndex = from.meta.index
      console.log(toIndex, fromIndex)
      if (toIndex !== undefined && fromIndex !== undefined) {
        console.log('in')
        this.slideName = toIndex < fromIndex ? 'slide-right' : 'slide-left'
        return
      } else {
        console.log('out')
        this.slideName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
      }
    }
  }
}
</script>
