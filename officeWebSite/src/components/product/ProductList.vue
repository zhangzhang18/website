<template>
    <div class="product-img">
      <div class="img" v-for="(product, i) in newProduct[index]" :key="i">
        <a>
          <img :src="product.mainImgUrl" />
          <p>{{product.title}}</p>
        </a>
      </div>
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
    }
  },
  data() {
    return {
      list: json,
      newProduct: [[]]
    };
  },
  mounted: function() {
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