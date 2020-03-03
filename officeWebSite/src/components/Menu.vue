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
          <a href="#">产品</a>
        </li>
        <li>
          <a href="#">新闻</a>
        </li>
        <li>
          <a href="#">
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