<template>
  <div class="scroll">
    <a-carousel autoplay="true" effect="fade">
      <div class="swiper-slide">
        <img class="banner-img" :src="imgUrls[0]" />
      </div>
      <div class="swiper-slide">
        <img class="banner-img" :src="imgUrls[1]" />
      </div>
    </a-carousel>
  </div>
</template>

<script>
// import { Carousel } from "antd";
// import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {},
  data() {
    return {
      imgUrls: []
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    //可以使用swiper这个对象去使用swiper官网中的那些方法
    // console.log("this is current swiper instance object", this.swiper);
    var lan = this.$i18n.locale;
    this.imgUrls.push("/static/swiper/swiper-" + lan + "-01.jpg");
    this.imgUrls.push("/static/swiper/swiper-" + lan + "-02.jpg");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
.ant-carousel .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel .slick-slide h3 {
  color: #fff;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.swiper-slide {
  height: 600px;
  position: relative;
  width: 100%;
  img {
    position: relative;
    content: "";
    // object-fit: cover;
    width: 100%;
    height: 600px;
    display: block;
    z-index: 10;
  }
  .banner-text {
    vertical-align: middle;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 11;
    padding: 150px 0;
    text-align: center;
    color: #3773db;
    font-size: 50px;
    height: 600px;
  }
}
</style>