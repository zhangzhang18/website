<template>
  <div class="footer">
    <div class="menu">
      <ul>
        <li>
          <a href="#">
            <router-link to="/">主页</router-link>
          </a>
        </li>
        <li>
          <a href="#product">
            <router-link to="/news">产品</router-link>
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
    <div class="contact-content">
      <p class="contact-title">Contact Us</p>
      <p class="contact-number">Tel : +86-123123123 / Cell : +86-123123123</p>
      <p class="contact-number">Email : 123123@11.com</p>
    </div>
    <div class="copyright">
      <div class="copyright-content">
        <p>© 2020-2020,www.fldtech.jp,All rights reserved 浙ICP备1231号-1 版权所有：国际贸易有限公司</p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
p {
  padding: 0;
  margin: 0;
}
.footer {
  background-color: rgb(43, 43, 43);
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  .menu {
    ul {
      border-bottom: 1px solid #5a5a5a;
      li {
        width: 20%;
        display: inline-block;
        a {
          color: white;
          text-decoration: none;
          display: inline-block;
          line-height: 240%;
        }
      }
    }
  }
  .contact-content {
    font-family: 微软雅黑;
    .contact-title {
      color: rgb(204, 204, 204);
      line-height: 240%;
      font-size: 16px;
    }
    .contact-number {
      margin: 0;
      line-height: 175%;
      font-size: 14px;
      color: rgb(153, 153, 153);
    }
  }
  .copyright {
    background-color: rgb(34, 34, 34);
    .copyright-content {
      margin: 0;
      padding: 0;
      vertical-align: middle;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      line-height: 60px;
      color: rgb(153, 153, 153);
    }
  }
}
</style>