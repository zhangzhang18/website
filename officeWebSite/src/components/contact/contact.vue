<template>
  <div class="contact">
    <div class="contact-img">
      <img src="@/assets/image/contact/contact.jpg" />
    </div>

    <ul>
      <li v-for="{error,i} in errors" :key="i">{{ error }}</li>
    </ul>

    <div>
      <div class="form">
        <h1>
          Contact Form
          <span>Please fill all the texts in the fields.</span>
        </h1>
        <div class="company-name form-input">
          <label for="companyName">Company name:</label>
          <input name="companyName" v-model="companyName" type="text" />
        </div>
        <div class="country form-input">
          <label for="country">Country/Region:</label>
          <input name="country" v-model="country" type="text" />
        </div>
        <div class="name form-input">
          <label for="name">Name:</label>
          <input name="name" v-model="name" type="text" />
        </div>
        <div class="mobile form-input">
          <label for="mobile">Mobile:</label>
          <input name="mobile" v-model="mobile" type="text" />
        </div>
        <div class="email form-input">
          <label for="email">Email:</label>
          <input name="email" v-model="email" type="text" />
        </div>
        <div class="email-confirm form-input">
          <label for="mailConfirm">Email Confirm:</label>
          <input name="mailConfirm" v-model="mailConfirm" type="text" />
        </div>
        <div class="message form-input">
          <label for="message">message:</label>
          <textarea id="message" v-model="message" name="message"></textarea>
        </div>
        <div class="button form-input">
          <button class="submit" @click="submit()">Submit</button>
          <button type="reset" @click="reset()" class="reset">Reset</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      errors: "",
      companyName: "",
      country: "",
      name: "",
      mobile: "",
      email: "",
      mailConfirm: "",
      message: ""
    };
  },
  methods: {
    reset: function() {
      this.companyName = "";
      this.country = "";
      this.name = "";
      this.mobile = "";
      this.email = "";
      this.mailConfirm = "";
      this.message = "";
    },
    submit: function() {
      if (this.checkForm()) {
        let data = {
          companyName: this.companyName,
          country: this.country,
          name: this.name,
          mobile: this.mobile,
          email: this.email,
          message: this.message
        };
        axios
          .post("http://47.52.233.25:8080/message/add", {
            companyName: this.companyName,
            country: this.country,
            name: this.name,
            mobile: this.mobile,
            email: this.email,
            message: this.message
          })
          .then(res => {
            if (res.status == 200) {
              alert("ntm success");
            }
          });
      }
    },
    checkForm: function() {
      this.errors = "";
      if (!this.companyName) {
        this.errors = "CompanyName required.";
        alert(this.errors);
        return false;
      }
      if (!this.country) {
        this.errors = "Country required.";
        alert(this.errors);
        return false;
      }
      if (!this.name) {
        this.errors = "Name required.";
        alert(this.errors);
        return false;
      }
      if (!this.mobile) {
        this.errors = "Mobile required.";
        alert(this.errors);
        return false;
      }
      if (!this.email) {
        this.errors = "Email required.";
        alert(this.errors);
        return false;
      }
      if (!this.validEmail(this.email)) {
        this.errors = "Email check error.";
        alert(this.errors);
        return false;
      }

      if (this.email != this.mailConfirm) {
        this.errors = "mailConfirm.";
        alert(this.errors);
        return false;
      }
      if (!this.message) {
        this.errors = "Message required.";
        alert(this.errors);
        return false;
      }
      return true;
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
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
      font-size: 16px;
    }
    .reset {
      background: #e27575;
      text-shadow: 1px 1px 1px #e2757b;
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
    width: 100%;
    object-fit: cover;
  }
}
</style>