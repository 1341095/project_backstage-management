day1 9.18
## 布局
两个单独的页面：layout布局文件夹和login登录文件夹
布局layout里分两大部分，左侧的导航menu，右侧的内容content，content和menu注册在layout里

在layout/index.vue中，先导入注册两个组件，然后写css样式

## 导航
在layout/menu/index.vue中，从element-ui里复制导航样式然后调整


day2 9.19
## 菜单折叠
v-bind:指令主要用于响应式的更新html属性，v-on@指令是注册点击事件
先在content理加两个折叠图标，当菜单折叠时显示向右的图标，展开时显示向左的图标。给两个图标注册点击事件@click="changeMenu"，changeMenu函数中申请父亲layout文件中的changeShow的值，在layout文件中监视到changeShow变化后调用本文件的changeShow函数，改变isCollapse布尔值然后更新到两个组件中。mune组件中通过接收的isCollapse值判断导航是否折叠，content组件中用v-if和v-else区分显示哪个图标。同时给layout文件中的content里动态绑定一个small属性，isCollapse为true时small生效