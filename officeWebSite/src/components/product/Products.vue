<template>
  <div class="product">
    <Swiper></Swiper>
    <div class="content">
      <div class="title">
        <p>产品服务</p>
      </div>
      <div v-for="(category, indexone) in list" :key="indexone" class="product-category">
        <p>{{category.category}}</p>
        <div class="product-content">
          <div class="product-menu">
            <ul class="menu">
              <li v-for="(products, index) in category.products" :key="index">
                <div :class="index==0?'menu-category menu-first':'menu-category'">
                  <span @click="changeClass(products.name)">{{products.name}}</span>
                  <div v-if="products.product.length!=1">
                    <ul class="sub-menu">
                      <li
                        v-for="(product, index) in products.product"
                        :key="index"
                        @click="changeName(product.title)"
                      >{{product.title}}</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <ProductList
            :index="indexone+1"
            :smallclass="smallclass"
            :productname="productname"
            :flag="flag"
          ></ProductList>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const json = require("/static/products/products.json");
const images = require("/static/products/products");
import Swiper from "./../product/Swiper";
import ProductList from "./../product/ProductList.vue";
export default {
  components: {
    Swiper,
    ProductList
  },
  data() {
    return {
      smallclass: "",
      productname: "",
      flag: false,
      list: json,
      newProduct: [[]]
    };
  },
  methods: {
    changeClass: function(smallclass) {
      this.smallclass = smallclass;
      this.flag = false;
    },
    changeName: function(productname) {
      this.productname = productname;
      this.flag = true;
    }
  },
};
</script>
<style lang="less" scoped>
a {
  cursor: pointer;
}
.product {
  text-align: center;
  .content {
    padding: 10px 160px;
    .title p {
      color: #3773dc;
      font-family: 微软雅黑;
      font-size: 30px;
    }
    .product-category {
      .product-content {
        padding: 0 50px;
        display: flex;
        p {
          color: #858585;
        }
        .product-menu {
          padding: 0 20px;
          .menu {
            width: 210px;
            text-align: left;
            list-style-type: none;
            margin: 0px auto 20px;
            display: inline-block;
            padding-left: 0px;
            .menu-category {
              background: #dedede;
              cursor: pointer;
              display: block;
              position: relative;
              border-bottom: 1px solid #ffffff;
              span {
                padding: 10px;
                color: #666;
                font-size: 14px;
                line-height: 270%;
              }
            }
            li.open {
              color: #b63b4d;
            }
            .sub-menu {
              list-style-type: none;
              background: #f6f6f6;
              font-size: 14px;
              line-height: 180%;
              padding-left: 0px;
              li {
                color: #8b8b8b;
                margin: 0;
                padding-left: 10px;
                a {
                  display: block;
                  text-decoration: none;
                  color: #4d4d4d;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>