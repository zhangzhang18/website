<template>
  <div class="product-img">
    <div class="detail img" v-show="showDetailFlag">{{productDetail.title}}</div>
    <div class="img" v-for="(product, i) in newProduct[newIndex]" :key="i" v-show="!showDetailFlag">
      <a>
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
export default {
  props: {
    index: {
      type: Number,
      default: ""
    },
    smallclass: {
      type: String,
      default: ""
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
      newProduct: [[]],
      newIndex: 0,
      showDetailFlag: false,
      productDetail: {}
    };
  },
  computed: {
    // 计算属性的 getter
    smallclasschange: function() {
      var smallclass = this.smallclass;
      console.info(smallclass);
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

            console.info(JSON.stringify(this.newProduct));
            // 若小分类下只有一个产品则进入详情页，否则展示小分类图片列表
            var flag = this.flag;
            if (category[sindex].product.length == 1) {
              // 展示商品详情
              this.showDetailFlag = true;
              this.productDetail = smallclassProduct[0];
              console.info("只有一个产品进入详情页");
            } else if (flag) {
              this.showDetailFlag = true;
              for (
                let pindex = 0;
                pindex < smallclassProduct.length;
                pindex++
              ) {
                const element = smallclassProduct[pindex];
                if (element.title == this.productname) {
                  this.productDetail = element;
                  console.info("展示详情页");
                }
              }
            } else {
              this.showDetailFlag = false;
              this.newIndex = 0;
              console.info("展示列表图");
            }
          }
        }
      }
      return "";
    }
  },
  mounted: function() {
    this.newIndex = this.index;
    var list = this.list;
    for (let index = 0; index < list.length; index++) {
      const category = list[index].products;
      var categoryArr = [];
      for (let index = 0; index < category.length; index++) {
        const product = category[index].product;
        for (let index = 0; index < product.length; index++) {
          categoryArr.push(product[index]);
        }
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