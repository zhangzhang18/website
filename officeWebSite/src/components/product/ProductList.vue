<template>
  <div class="product-img">
    <div class="img" v-for="(product, i) in newProducts" :key="i">
      <a @click="goProjectDetail(product.title)">
        <img :src="product.mainImgUrl" />
        <p>{{product.title}}</p>
      </a>
    </div>
  </div>
</template>
<script>
const images = require("/static/products/products");
export default {
  props: {
    smallClass: {
      type: String,
      default: ""
    },
    products: {
      type: Array,
      default: ""
    }
  },
  data() {
    return {
      newProducts: []
    };
  },
  mounted: function() {
    var products = this.products;
    for (let index = 0; index < products.length; index++) {
      const product = products[index].product;
      for (let sindex = 0; sindex < product.length; sindex++) {
        this.newProducts.push(product[sindex]);
      }
    }
   // console.info("newProducts", JSON.stringify(this.newProducts));
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