<template>
  <div class="product-detail">
    {{index}}
    {{smallclass}}
    {{productname}}
    {{productIndex}}
    {{smallclassIndex}}
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
    productIndex: {
      type: Number,
      default: -1
    },
    smallclassIndex: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      list: json,
      originList: json
    };
  },
  mounted: function() {}
};
</script>
<style lang="less" scoped>
</style>