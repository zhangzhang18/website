<template>
  <div class="header">
    <div class="menu">
      <ul>
        <li>
          <a href="#">
            <router-link to="/">主页</router-link>
          </a>
        </li>
        <li>
          <a href="#product">
            <router-link to="/products">产品</router-link>
          </a>
        </li>
        <li>
          <a href="#news">
            <router-link to="/news">新闻</router-link>
          </a>
        </li>
        <li>
          <a href="#contact">
            <router-link to="/contact">联系</router-link>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.header {
  background-color: rgb(34, 34, 34);
  // position: fixed;
  // width: 100%;
  // top: 0;
  // z-index: 999;
  .menu {
    padding: 10px 160px;
    text-align: center;
    ul {
      li {
        display: inline-block;
        width: 20%;
        a {
          width: 100%;
          display: inline-block;
          color: white;
          text-decoration: none;
        }
      }
    }
  }
}
</style>