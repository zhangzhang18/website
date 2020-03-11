<template>
  <div class="product-img">
    {{listFlag}}
    <ProductDetail
      :index="index"
      :smallclass="smallclass"
      :smallclassIndex="smallclassIndex"
      :productIndex="productIndex"
      :productname="productname"
      :productDetail="productDetail"
      v-show="showDetailFlag||flag"
    ></ProductDetail>

    <div
      class="img"
      v-for="(product, i) in newProduct[newIndex]"
      :key="i"
      v-show="!showDetailFlag||showList||listFlag"
    >
      <a @click="goProjectDetail(product.title)">
        <img :src="product.mainImgUrl" />
        <p>{{product.title}}</p>
      </a>
    </div>
    {{smallclasschange}}
  </div>
</template>
<script>
const json = require("/static/products/products.json");
const images = require("/static/products/products");
import ProductDetail from "./../product/ProductDetail.vue";
export default {
  components: {
    ProductDetail
  },
  props: {
    index: {
      type: Number,
      default: ""
    },
    smallclass: {
      type: String,
      default: ""
    },
    listFlag: {
      type: Boolean,
      default: true
    },
    productname: {
      type: String,
      default: ""
    },
    flag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      list: json,
      originList: json,
      newProduct: [[]], //图片根据大类index展示
      newIndex: 0, //newProduct重新复制后使用
      showList: true,
      showDetailFlag: false, //只有一个产品进入详情页
      productDetail: {}, //要展示的产品
      //跳转详情页参数
      smallclassIndex: 0,
      productIndex: 0,
      productTitle: ""
    };
  },
  methods: {
    goProjectDetail: function(productName) {
      console.log(productName);
      this.productTitle = productName;
      this.showDetailFlag = true;
      this.showList = false;
    }
  },
  computed: {
    // 计算属性的 getter
    smallclasschange: function() {
      console.log(
        "smallclasschange" +
          ",flag:" +
          this.flag +
          "，showList:" +
          this.showList +
          ",showDetailFlag:" +
          this.showDetailFlag
      );
      var smallclass = this.smallclass;
      // console.info(smallclass);
      var list = this.list;
      // 查询小分类数据哪个大类
      var categoryIndex = 0;
      for (let index = 0; index < list.length; index++) {
        const category = list[index].products;
        for (let sindex = 0; sindex < category.length; sindex++) {
          const smallclassName = category[sindex].name;
          //console.info("smallclass", JSON.stringify(category[sindex]));
          if (smallclassName == smallclass) {
            categoryIndex = index;
            this.newProduct = [];
            var smallclassProduct = category[sindex].product;
            this.newProduct.push(smallclassProduct);
            this.smallclassIndex = sindex;
            // 若小分类下只有一个产品则进入详情页，否则展示小分类图片列表
            var flag = this.flag;
            if (category[sindex].product.length == 1) {
              // 展示商品详情
              this.showDetailFlag = true;
              this.showList = false;
              this.productDetail = smallclassProduct[0];
              this.productTitle = this.productDetail.title;
              this.productIndex = 0;

              // console.info("只有一个产品进入详情页");
            } else if (flag) {
              this.showDetailFlag = true;
              this.showList = false;
              for (
                let pindex = 0;
                pindex < smallclassProduct.length;
                pindex++
              ) {
                const element = smallclassProduct[pindex];
                if (element.title == this.productname) {
                  this.productDetail = element;
                  this.productTitle = this.productDetail.title;
                  this.productIndex = pindex;
                  // console.info("展示详情页");
                }
              }
            } else {
              this.showDetailFlag = false;
              this.newIndex = 0;
              this.showList = true;
              //  console.info("展示列表图");
            }
          }
        }
      }
      return "";
    }
  },
  mounted: function() {

    var list = this.list;
      for (let index = 0; index < category.length; index++) {
        const product = category[index].product;
        for (let index = 0; index < product.length; index++) {
          categoryArr.push(product[index]);
        }
    
      this.newProduct.push(categoryArr);
    }
  }
};
</script>
<style lang="less" scoped>
.product-img {
  padding-right: 50px;
  text-align: center;
  margin-bottom: 50px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .img {
    width: 21%;
    margin: 2% 2%;
    height: 0;
    padding-bottom: 21%;
    position: relative;
    margin-bottom: 50px;
    img {
      // padding: 0 20px;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    p {
      position: absolute;
      bottom: -50px;
      width: 100%;
      text-align: center;
      line-height: 50px;
      height: 50px;
      margin: 0;
    }
  }
}
</style>