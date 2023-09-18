<template>
  <div class="layout">
    <!-- 左侧导航 -->
    <div class="menu">
      <Menu></Menu>
    </div>

    <!-- 右侧内容 -->
    <div class="content">
      <Content></Content>
    </div>
  </div>
</template>

<script>
// 导入导航和内容组件
import Menu from './menu/index.vue'
import Content from './content/index.vue'
export default {
  // 局部注册组件
  components: {
    Menu,
    Content
  }

}
</script>

<style lang="less" scoped>
.layout{
    .menu{  // 左侧导航
        background: #112f50;
        position: fixed;  // 固定定位在右边
        left:0;
        top:0;
        bottom:0;
    }
    .content{
        padding-left:100px;
        // background-color: pink;
    }
    .small{
        padding-left: 64px;
    }
}
</style>
