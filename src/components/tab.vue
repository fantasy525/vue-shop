<template>
  <div class='tab flex align-center justify-center'>
    <router-link class="item" tag="div" to="/index">
      <i class="tab-icon index"></i>
      <p class="tab-txt">首页</p>
    </router-link>
     <router-link class="item" tag="div" to="/sort">
      <i class="tab-icon sort"></i>
      <p class="tab-txt">分类</p>
    </router-link>
     <router-link class="item" tag="div" to="/shopcar">
      <i class="tab-icon shopcar"></i>
      <p class="tab-txt">购物车</p>
    </router-link>
     <router-link class="item" tag="div" to="/person">
      <i class="tab-icon person"></i>
      <p class="tab-txt">个人中心</p>
    </router-link>
  </div>
</template>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import "~assets/stylus/comm.styl"
  @import "~assets/stylus/mixin.styl"
  .tab
    position:fixed
    bottom:0
    width:100%
    .item
      flex:1
      text-align:center
      &.router-link-active
          .index
            bg-image('../assets/img/footer01')
          .sort
            bg-image('../assets/img/footer02')
          .shopcar
            bg-image('../assets/img/footer03')
          .person
            bg-image('../assets/img/footer04')
    .tab-icon
      width:60px
      height:60px
      display:inline-block
      &.index
        background:url('../assets/img/footer001.png')
        background-size:100% 100%
      &.sort
        background:url('../assets/img/footer002.png')
        background-size:100% 100%
      &.shopcar
        background:url('../assets/img/footer003.png')
        background-size:100% 100%
      &.person
        background:url('../assets/img/footer004.png')
        background-size:100% 100%
    .tab-txt
      font-size:26px;/*px*/
      text-align:center
</style>
<script type='text/ecmascript-6'>
export default {}
</script>
