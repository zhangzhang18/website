<template>
  <div class="contact">
    <div class="contact-img">
      <img src="@/assets/image/contact/contact.jpg" />
    </div>
    <div>
      <form class="form">
        <h1>
          Contact Form
          <span>Please fill all the texts in the fields.</span>
        </h1>
        <div class="company-name form-input">
          <label for="company-name">Company name:</label>
          <input name="company-name" type="text" />
        </div>
        <div class="country form-input">
          <label for="country">Country/Region:</label>
          <input name="country" type="text" />
        </div>
        <div class="name form-input">
          <label for="name">Name:</label>
          <input name="name" type="text" />
        </div>
        <div class="mobile form-input">
          <label for="mobile">Mobile:</label>
          <input name="mobile" type="text" />
        </div>
        <div class="email form-input">
          <label for="email">Email:</label>
          <input name="email" type="text" />
        </div>
        <div class="email-confirm form-input">
          <label for="mail-confirm">Email Confirm:</label>
          <input name="mail-confirm" type="text" />
        </div>
        <div class="message form-input">
          <label for="message">message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <div class="button form-input">
          <button type="submit">Send</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.form {
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
  background: #f7f7f7;
  padding: 25px 15px 25px 10px;
  font: 12px Georgia, "Times New Roman", Times, serif;
  color: #888;
  text-shadow: 1px 1px 1px #fff;
  border: 1px solid #e4e4e4;
  h1 {
    font-size: 25px;
    padding: 0px 0px 10px 40px;
    display: block;
    border-bottom: 1px solid #e4e4e4;
    margin: -10px -15px 30px -10px;
    color: #888;
    span {
      display: block;
      font-size: 11px;
    }
  }
  .form-input {
    display: flex;
    justify-content: center;

    label {
      float: left;
      width: 20%;
      text-align: right;
      padding-right: 10px;
      margin-top: 10px;
      color: #888;
    }
    input,
    textarea {
      margin-bottom: 16px;
      margin-right: 6px;
      margin-top: 2px;
      border: 1px solid #dadada;
      color: #888;
      height: 30px;
      outline: 0 none;
      padding: 3px 3px 3px 5px;
      width: 70%;
      font-size: 12px;
      line-height: 15px;
    }
    textarea {
      height: 100px;
    }
    button {
      background: #3773db;
      border: none;
      padding: 10px 25px 10px 25px;
      color: #fff;
      box-shadow: 1px 1px 5px #b6b6b6;
      border-radius: 3px;
      text-shadow: 1px 1px 1px #3773dc;
      cursor: pointer;
      margin: 0 100px;
    }
  }
}
.contact-img {
  text-align: center;
  margin-bottom: 50px;
  img {
    margin: 0 auto;
    display: block;
    height: 300px;
    object-fit: cover;
  }
}
</style>