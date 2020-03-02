<template>
  <div class="header">
    <div class="menu">
      <ul>
        <li>
          <a href="#home">主页</a>
        </li>
        <li>
          <a href="#product">产品</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">联系</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.header {
  background-color: rgb(34, 34, 34);
  .menu {
    padding: 10px 160px;
    text-align: center;
    ul {
      li {
        width: 20%;
        display: inline-block;
        a {
          color: white;
          text-decoration: none;
          display: inline-block;
        }
      }
    }
  }
}
</style>