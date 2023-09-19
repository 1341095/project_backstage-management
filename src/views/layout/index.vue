<template>
  <div class="layout">
    <!-- 左侧导航 -->
    <div class="menu">
      <!-- 父亲变量iscollapse传递给子组件 -->
      <Menu :isCollapse="isCollapse"></Menu>
    </div>

    <!-- 右侧内容 -->
    <!-- 动态绑定一个class，如果isCollapse为true时small生效 -->
    <div class="content" :class="{small:isCollapse}">
      <Content @changeShow="changeShow" :isCollapse="isCollapse"></Content>
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
  },
  // 两个兄弟组件之间要进行数据交互，用父亲传递
  data () {
    return {
      isCollapse: false // 是否折叠？false为不折叠
    }
  },
  methods: {
    changeShow () {
      this.isCollapse = !this.isCollapse
    }
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
        padding-left:200px;
        // background-color: pink;
    }
    .small{
        padding-left: 64px;
    }
}
</style>
