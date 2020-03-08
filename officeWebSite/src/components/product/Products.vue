<template>
  <div class="product-category"></div>
</template>
<script>
const json = require("/static/products/products.json");
export default {
  data() {
    return {
     list:json,
    };
  },
  created: function() {
    console.log(this.list);
  }
};
</script>
<style lang="less" scoped></style>