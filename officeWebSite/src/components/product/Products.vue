<template>
  <div class="product">
    <Swiper></Swiper>
    <div class="content">
      <div class="title">
        <p>产品服务{{smallclasschange}}</p>
      </div>
      <div
        v-for="(category, indexone) in list"
        :key="indexone"
        class="product-category"
        v-show="(showIndex==-1||indexone==showIndex)&&(indexParam==-1||indexone==indexParam)"
      >
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
                        @click="changeName(indexone,products.name,product.title)"
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
            :listFlag="listFlag"
            v-on:click.native="goProjectDetail(indexone)"
            v-show="!flag"
          ></ProductList>
          <ProductDetail
            :index="indexone+1"
            :smallclass="smallclass"
            :productname="productname"
            v-show="flag"
          ></ProductDetail>
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
import ProductDetail from "./../product/ProductDetail.vue";
export default {
  components: {
    Swiper,
    ProductList,
    ProductDetail
  },
  data() {
    return {
      listFlag: true,
      smallclass: "", //小分类名
      productname: "", //产品名称
      flag: false, // 是否进入产品详情页
      list: json,
      indexParam: -1, //点击单个图片进入详情页
      showIndex: -1 //控制大类展示
    };
  },
  methods: {
    goProjectDetail: function(index) {
      // console.log(index);
      this.indexParam = index;
    },
    changeClass: function(smallclass) {
      console.log("changeClass");
      this.smallclass = smallclass;
      this.flag = false;
      this.listFlag = true;
    },
    changeName: function(indexParam, smallclass, productname) {
      this.smallclass = smallclass;
      this.productname = productname;
      this.indexParam = indexParam;
      this.flag = true;
      this.listFlag = false;
    }
  },
  computed: {
    // 计算属性的 getter
    smallclasschange: function() {
      var smallclass = this.smallclass;
      var list = this.list;
      // 查询小分类数据哪个大类
      for (let index = 0; index < list.length; index++) {
        const category = list[index].products;
        const bigIndex = index;
        for (let sindex = 0; sindex < category.length; sindex++) {
          const smallclassName = category[sindex].name;
          if (smallclassName == smallclass) {
            // 控制大类展示
            this.showIndex = bigIndex;
          }
        }
      }
      return "";
    }
  }
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