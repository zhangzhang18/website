<template>
  <div class="product-img">
    {{smallclasschange}}
    <div class="detail img" v-if="flag"></div>
    <div class="img" v-for="(product, i) in newProduct[index]" :key="i" v-else>
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
    },
    smallclass: {
      type: String,
      default: ""
    },
    name: {
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
      newProduct: [[]]
    };
  },
  computed: {
    // 计算属性的 getter
    smallclasschange: function() {
      var smallclass = this.smallclass;
      var index = this.index;
      var originList = this.originList;
      console.log(index);
      console.log(JSON.stringify(originList));
      var categoryList = this.originList[index];

      console.log(JSON.stringify(categoryList));

      // `this` 指向 vm 实例
      return smallclass;
    }
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