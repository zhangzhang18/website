<template>
  <div class="top">
    <div class="top-content">
      <div class="top-company">
        <img class="logo-img" src="@/assets/image/logo.png" />
        <div class="company-name">
          <img src="@/assets/image/home/name-01.png" />
        </div>
      </div>
      <div class="top-contact">
        <div class="contact-content">
          <div class="contact-img">
            <img src="@/assets/image/contact/phone.png" />
          </div>
          <div class="contact-call">
            <strong>CALL US</strong>
            <div class="contact-number">+86-18004113729</div>
          </div>
        </div>
        <div class="contact-content">
          <div class="contact-img">
            <img src="@/assets/image/contact/email.png" />
          </div>
          <div class="contact-call">
            <strong>EMAIL US</strong>
            <div class="contact-number">fldtech@dingtalk.com</div>
          </div>
        </div>
      </div>
      <div class="top-language">
        <button class="change-language-btn">语言</button>
        <div class="change-language-content">
          <a href="#">中文</a>
          <a href="#">English</a>
          <a href="#">Japanese</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.top {
  .top-content {
    display: flex;
    padding: 10px 160px;
    .top-company {
      margin: auto 0;
      width: 60%;
      display: flex;
      .logo-img {
        width: 80px;
        height: 80px;
      }
      .company-name {
        margin: auto 0;
        display: inline-block;
        img {
          width: 170px;
        }
      }
    }
    .top-contact {
      width: 42%;
      display: flex;
      .contact-content {
        display: flex;
        padding: 10px;
        .contact-img {
          margin: auto;
          img {
            width: 25px;
            height: 25px;
          }
        }

        .contact-call {
          color: #e27575;
          padding: 5px;
          strong {
            font: 14px Georgia, "Times New Roman", Times, serif;
          }
          .contact-number {
            color: rgb(67, 67, 67);
            white-space: nowrap;
            font-size: 14px;
          }
        }
      }
    }
    .top-language {
      position: relative;
      display: inline-block;
      z-index: 998;
      margin: auto;
      font-size: 14px;
      .change-language-btn {
        white-space: nowrap;
        background-color: #3773db;
        color: white;

        border: none;
        cursor: pointer;
        height: 32px;
      }
      .change-language-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        a {
          color: black;
          padding: 6px 8px;
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
        background-color: #3773bd;
      }
      .change-language-content {
        display: block;
      }
    }
  }
}
</style>