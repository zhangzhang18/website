<template>
  <div class="home">
    <Top></Top>
    <Menu></Menu>
    <Swiper></Swiper>
    <Footer></Footer>
  </div>
</template>

<script>
import Top from "./Top";
import Menu from "./Menu";
import Footer from "./Footer";
import Swiper from "./home/Swiper";
export default {
  name: "Home",
  components: {
    Top,
    Menu,
    Footer,
    Swiper
  },
  data() {
    return {
      msg: "首页"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-top: 6px;
  padding-bottom: 6px;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
</style>
