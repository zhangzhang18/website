<template>
  <div class="header">
    <div class="menu">
      <ul>
        <li>
          <router-link to="/">
            <a href="#">主页</a>
          </router-link>
        </li>
        <li class="change">
          <router-link to="/products/-1">
            <a href="#products/-1" class="change-btn">产品</a>
          </router-link>
          <div class="change-category">
            <router-link to="/products/0">
              <a href="#">半导体产品</a>
            </router-link>
            <router-link to="/products/1">
              <a href="#">太阳能产品</a>
            </router-link>
            <router-link to="/products/2">
              <a href="#">氮化硅陶瓷产品</a>
            </router-link>
          </div>
        </li>
        <li>
          <router-link to="/news">
            <a href="#news">新闻</a>
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            <a href="#contact">联系</a>
          </router-link>
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
    padding: 0 160px;
    text-align: center;
    ul {
      margin: 0;
      li {
        display: inline-block;
        position: relative;
        line-height: 80px;
        height: 80px;
        width: 20%;
        font-size: 20px;
        &:hover {
          color: white;
          height: 100%;
          background: #3773bd;
        }
        a {
          width: 100%;
          height: 100%;
          display: inline-block;
          color: white;
          text-decoration: none;
        }
      }
      .change {
        .change-category {
          z-index: 998;
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          width: 100%;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          a {
            font-size: 14px;
            color: black;
            width: 100%;
            text-decoration: none;
            display: block;
          }
          a:hover {
            background-color: #f1f1f1;
          }
        }
      }
      .change:hover {
        background-color: #3773bd;
        .change-category {
          display: block;
        }
      }
    }
  }
}
</style>