<template>
  <div class="scroll">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="banner-img-box">
          <img class="banner-img" src="@/assets/image/banner/banner-01.png" />
          <div class="banner-text">
            <p>
              <strong>高品质半导体产品服务商</strong>
            </p>
            <p>
              <strong>致力于全面的半导体硅片解决方案</strong>
            </p>
            <p>
              <span>
                <strong>一站式</strong>
              </span>
              <span>
                <strong>全球化</strong>
              </span>
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner-img-box">
          <img class="banner-img" src="@/assets/image/banner/banner-03.jpeg" />
          <div class="banner-text">
            <p>
              <strong>拓展太阳能以及氮化硅等新领域产品</strong>
            </p>
            <p>
              <strong>提供现货产品，定制加工服务</strong>
            </p>
            <p>
              <span>
                <strong>高效</strong>
              </span>
              <span>
                <strong>专业</strong>
              </span>
              <span>
                <strong>便利</strong>
              </span>
            </p>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "HelloWorld",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        // 设置轮播
        effect: "fade",
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        // grabCursor : true,
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function() {
            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          }
        },
        //左右点击
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      swiperSlides: [1, 2, 3, 4]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    //可以使用swiper这个对象去使用swiper官网中的那些方法
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(0, 0, false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
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
  img {
    position: relative;
    content: "";
    height: 100%;
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
    padding-top: 50px;
    text-align: center;
    color: #3773db;
    font-size: 50px;
    height: 600px;
  }
}
</style>