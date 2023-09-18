<template>
  <div>
    <!-- 顶部 -->
    <Header></Header>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>

</style>
