<template>
  <div class="footer">
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
    <div class="contact-content">
      <p class="contact-title">Contact Us</p>
      <p class="contact-number">Tel : +86-123123123 / Cell : +86-123123123</p>
      <p class="contact-number">Email : 123123@11.com</p>
    </div>
    <div class="copyright">
      <p class="copyright-content">© 2020-2020,www.lalal.com,All rights reserved 浙ICP备1231号-1 版权所有：国际贸易有限公司</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer {
  background-color: rgb(43, 43, 43);
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  .menu {
    padding: 10px 160px;
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
      vertical-align: middle;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      line-height: 60px;
      color: rgb(153, 153, 153);
    }
  }
}
</style>