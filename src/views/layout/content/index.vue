<template>
  <div>
    <!-- 顶部 -->
    <div class="header">
    <div class="open">
      <!-- v-if判断是true才会显示，现在默认是false展开 -->
      <span v-if="!isCollapse" class="iconfont icon-right-indent" @click="changeMenu"></span>
      <span v-else class="iconfont icon-left-indent" @click="changeMenu"></span>
    </div>
  </div>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    changeMenu () {
      this.$emit('changeShow')
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  height: 50px;
  background: #1e78bf;
  color: #fff;
  line-height: 50px;
  .open{
    flex: 1;

    .iconfont {
      font-size: 22px;
      cursor: pointer;
    }
  }
}
</style>
