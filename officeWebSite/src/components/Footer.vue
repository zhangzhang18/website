<template>
  <div class="footer">
    <div class="menu">
      <ul>
        <li>
          <router-link to="/">
            <a href="#">主页</a>
          </router-link>
        </li>
        <li>
          <router-link to="/products/-1">
            <a href="#products/-1">产品</a>
          </router-link>
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
    <div class="contact-content">
      <p class="contact-title">Contact Us</p>
      <p class="contact-number">富乐达科技有限公司</p>
      <p class="contact-number">Unit D, 16/F, One Capital Place 18 Luard Road,Wanchai,Hong Kong</p>
      <p class="contact-number">Wechat:18004113729</p>
      <p class="contact-number">Contact:LEO / Call:+86-18004113729</p>
      <p class="contact-number">Email:fldtech@dingtalk.com</p>
    </div>
    <div class="copyright">
      <div class="copyright-content">
        <p>© 2020-2020,www.fldtech.jp</p>
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
          width: 100%;
          color: white;
          text-decoration: none;
          display: inline-block;
          line-height: 240%;
        }
        &:hover {
          color: white;
          height: 100%;
          background: #3773bd;
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