<template>
  <div class="top">
    <div class="top-content">
      <div class="top-company">
        <img class="logo-img" src="../assets/image/logo.png" />
        <div class="company-name">富乐达科技</div>
      </div>
      <div class="top-contact">
        <div class="contact-call">CALL US</div>
        <div class="contact-number">123-123</div>
      </div>
      <div class="top-language">
        <button class="change-language-btn">语言</button>
        <div class="change-language-content">
          <a href="#">中文</a>
          <a href="#">英语</a>
          <a href="#">日语</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.top {
  .top-content {
    padding: 10px 160px;
    display: flex;
    .top-company {
      margin-left: 10px;
      width: 70%;
      display: flex;
      .company-name {
        margin: 10px;
        display: inline-block;
      }
    }
    .top-contact {
      width: 20%;
      padding: 10px;
      .contact-call {
        font-size: 26px;
      }
    }
    .top-language {
      width: 10%;
      padding: 10px;
      position: relative;
      display: inline-block;
      .change-language-btn {
        background-color: #499fe0;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
      }
      .change-language-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }
        a:hover {
          background-color: #f1f1f1;
        }
      }
    }
    .top-language:hover {
      .change-language-btn {
        background-color:  #499fc0;
      }
      .change-language-content {
        display: block;
      }
    }
  }
}
</style>