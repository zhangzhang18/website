<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="less">
body {
  display: block;
  margin: 0;
}
a {
  text-decoration: none;
}
a:link {
  color: black;
} /* 未访问链接*/
a:visited {
  color: black;
} /* 已访问链接 */
a:hover {
  color: black;
} /* 鼠标移动到链接上 */
a:active {
  color: black;
} /* 鼠标点击时 */
</style>