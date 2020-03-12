<template>
  <div class="product">
    <Swiper></Swiper>
    <div class="content">
      <div class="title">
        <p>产品服务</p>
      </div>
      <div
        v-for="(category, indexone) in list"
        :key="indexone"
        class="product-category"
        v-show="(showIndex==-1||indexone==showIndex)&&(indexParam==-1||indexone==indexParam)"
      >
        <h2 class="category-title">{{category.category}}</h2>
        <div class="product-content">
          <div class="product-menu">
            <ul class="menu">
              <li v-for="(products, index) in category.products" :key="index">
                <div :class="index==0?'menu-category menu-first':'menu-category'">
                  <span @click="changeClass(products.name,indexone)">{{products.name}}</span>
                  <div v-if="products.product.length!=1">
                    <ul class="sub-menu">
                      <li
                        v-for="(product, index) in products.product"
                        :key="index"
                        @click="goProjectDetail(indexone,product)"
                      >{{product.title}}</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="product-img" v-show="!flag">
            <div class="img" v-for="(product, i) in newProductImgs[indexone]" :key="i">
              <a @click="goProjectDetail(indexone,product)">
                <img :src="product.mainImgUrl" />
                <p>{{product.title}}</p>
                <hr />
              </a>
            </div>
          </div>
          <div class="product-detail" v-show="flag">
            <div class="detail-top">
              <div class="img">
                <div class="main-img">
                  <div>
                    <img :src="showMainImgUrl" />
                  </div>
                  <div class="product-title">
                    <p>{{productDetail.title}}</p>
                  </div>
                </div>
                <div class="little-img">
                  <ul>
                    <li>
                      <img
                        :src="productDetail.mainImgUrl"
                        @click="getIndex(productDetail.mainImgUrl)"
                        style="width: 50px; height: 50px"
                      />
                    </li>
                    <li v-for="(secImg, seindex) in productDetail.secondaryImgs" :key="seindex">
                      <img
                        :src="secImg.imgUrl"
                        @click="getIndex(secImg.imgUrl)"
                        style="width: 50px; height: 50px"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="product-detail-desc">
              <div class="info">
                <p>商品信息</p>
              </div>
              <div v-for="(prop, propindex) in productDetail.propImgUrl" :key="propindex">
                <img :src="prop.imgUrl" />
              </div>
              <div class="page">
                <div
                  class="pre"
                  @click="goProjectDetail(indexone,preProductDetail)"
                >上一个：{{preProductDetail.title}}</div>
                <div
                  class="next"
                  @click="goProjectDetail(indexone,nextProductDetail)"
                >下一个：{{nextProductDetail.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const json = require("/static/products/products.json");
const images = require("/static/products/products");
import Swiper from "./../product/Swiper";
export default {
  components: {
    Swiper
  },
  data() {
    return {
      showButton: false,
      newProductImgs: [],
      pageProfucts: [],
      listFlag: true,
      smallClass: "", //小分类名
      productname: "", //产品名称
      showMainImgUrl: "",
      productDetail: {
        title: "",
        mainImgUrl: "",

        secondaryImgs: [
          {
            imgUrl: ""
          }
        ],
        propImgUrl: [
          {
            imgUrl: ""
          }
        ]
      },
      preProductDetail: {
        title: "",
        mainImgUrl: "",
        secondaryImgs: [
          {
            imgUrl: ""
          }
        ],
        propImgUrl: [
          {
            imgUrl: ""
          }
        ]
      },
      nextProductDetail: {
        title: "",
        mainImgUrl: "",
        secondaryImgs: [
          {
            imgUrl: ""
          }
        ],
        propImgUrl: [
          {
            imgUrl: ""
          }
        ]
      },
      flag: false, // 是否进入产品详情页
      list: json,
      indexParam: -1, //点击单个图片进入详情页
      showIndex: -1 //控制大类展示
    };
  },
  methods: {
    getIndex: function(imgUrl) {
      console.log(imgUrl);

      this.showMainImgUrl = imgUrl;

      console.info("productDetail", JSON.stringify(this.showMainImgUrl));
    },
    // goTop: function() {
    //   const that = this;
    //   let timer = setInterval(() => {
    //     let ispeed = Math.floor(-that.scrollTop / 5);
    //     document.documentElement.scrollTop = document.body.scrollTop =
    //       that.scrollTop + ispeed;
    //     if (that.scrollTop === 0) {
    //       clearInterval(timer);
    //     }
    //   }, 16);
    // },

    // // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    // scrollToTop() {
    //   const that = this;
    //   let scrollTop =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    //   that.scrollTop = scrollTop;
    //   if (that.scrollTop > 60) {
    //     that.btnFlag = true;
    //   } else {
    //     that.btnFlag = false;
    //   }
    // },
    goProjectDetail: function(index, productDetail) {
      if (productDetail.title != "无") {
        //console.info("productDetail", JSON.stringify(productDetail));
        this.indexParam = index;
        this.flag = true;
        this.productDetail = productDetail;
        this.showMainImgUrl = productDetail.mainImgUrl;

        this.getPageProduct(index, productDetail.title);
      }
    },
    getPageProduct: function(index, productName) {
      var categoryList = this.pageProfucts[index];
      //console.info("categoryList", JSON.stringify(categoryList));
      for (let i = 0; i < categoryList.length; i++) {
        const product = categoryList[i];
        if (product.title == productName) {
          console.log(" index:" + i);

          if (i == 0) {
            this.preProductDetail.title = "无";
          } else {
            var pre = categoryList[i - 1];
            this.preProductDetail = pre;
          }
          if (i == categoryList.length - 1) {
            this.nextProductDetail.title = "无";
          } else {
            var next = categoryList[i + 1];
            this.nextProductDetail = next;
          }
        }
      }
    },
    changeClass: function(smallClass, index) {
      // console.log("changeClass index:"+index);
      this.smallClass = smallClass;
      this.flag = false;
      this.indexParam = index;
      var products = this.changeClassContent(smallClass, index, true);
      //   this.newProductImgs[index] = [...products];
      this.$set(this.newProductImgs, index, products);
    },
    changeName: function(indexParam, smallClass, productname) {
      this.smallClass = smallClass;
      this.flag = true;
    },
    changeClassContent: function(smallClass, index, needShowDetail) {
      //console.info(smallClass);
      var categoryList = this.list;
      const products = categoryList[index].products;
      //console.info("categoryList", JSON.stringify(products));
      var categoryAllList = [];
      for (let pindex = 0; pindex < products.length; pindex++) {
        const product = products[pindex].product;
        if (smallClass !== "" && smallClass !== products[pindex].name) {
          continue;
        }
        if (smallClass !== "" && product.length == 1) {
          this.flag = true;
          this.productDetail = products[pindex].product[0];
        }
        // console.log(pindex + "," + products[pindex].name + "," + smallClass);
        //  console.info("product", JSON.stringify(product));
        for (let i = 0; i < product.length; i++) {
          categoryAllList.push(product[i]);
        }
      }
      return categoryAllList;
    }
  },
  watch: {
    // smallClass: function(newSmallClass, oldSmallClass) {
    //   //console.log("smallclass change");
    //   this.smallClass = newSmallClass;
    // }
  },
  mounted: function() {
    var categoryList = this.list;
    for (let cindex = 0; cindex < categoryList.length; cindex++) {
      const products = categoryList[cindex].products;
      this.newProductImgs.push(this.changeClassContent("", cindex, false));
      this.pageProfucts.push(this.changeClassContent("", cindex, false));
    }
    // console.info("newProducts", JSON.stringify(this.newProducts));
  }
};
</script>
<style lang="less" scoped>
a {
  cursor: pointer;
}
.product {
  text-align: center;
  .content {
    padding: 10px 160px;
    .title p {
      color: #3773dc;
      font-family: 微软雅黑;
      font-size: 30px;
    }
    .product-category {
      .category-title {
      }
      .product-content {
        padding: 0 50px;
        display: flex;
        p {
          color: #858585;
        }
        .product-menu {
          padding: 0 20px;
          .menu {
            width: 210px;
            text-align: left;
            list-style-type: none;
            margin: 0px auto 20px;
            display: inline-block;
            padding-left: 0px;
            .menu-category {
              background: #dedede;
              cursor: pointer;
              display: block;
              position: relative;
              border-bottom: 1px solid #ffffff;
              span {
                padding: 10px;
                color: #666;
                font-size: 14px;
                line-height: 270%;
              }
            }
            li.open {
              color: #b63b4d;
            }
            .sub-menu {
              list-style-type: none;
              background: #f6f6f6;
              font-size: 14px;
              line-height: 180%;
              padding-left: 0px;
              li {
                color: #8b8b8b;
                margin: 0;
                padding-left: 10px;
                a {
                  display: block;
                  text-decoration: none;
                  color: #4d4d4d;
                }
              }
            }
          }
        }
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
        .product-detail {
          width: 100%;
          .detail-top {
            .img {
              .main-img {
                display: flex;
                width: 100%;
                img {
                  width: 400px;
                  height: 400px;
                }
                .product-title {
                    width: 400px;
                  p {
                    height: 200px;
                    border-bottom: #eeeeee 1px solid;
                    color: #666666;
                    margin-left: 50px;
                    font-size: 22px;
                    line-height: 140%;
                    line-height: 140%;
                  }
                }
              }
              .little-img {
                ul {
                  padding: 0;
                  list-style-type: none;
                  display: flex;
                  li {
                  }
                }
              }
            }
          }
          .info {
            widows: 100%;
            p {
              float: left;
              color: #535353;
              padding: 0 18px;
              margin: 0;
              width: 80px;
              border-top: #048bcd 3px solid;
              z-index: 3;
              background-color: #fff;
              height: 52px;
              line-height: 43px;
            }
          }
          .product-detail-desc {
            overflow: hidden;
            border: #eeeeee 1px solid;
            margin-top: 8px;
            width: 100%;
            img {
              max-width: 100%;
              height: auto;
            }
          }
          .page {
            color: #444;
            font-size: 12px;
            text-align: left;
            width: 100%;
            .pre {
              padding: 5px 10px;
            }
            .next {
              padding: 5px 10px;
            }
          }
        }
      }
    }
  }
}
@media screen and(max-device-width:1200px) {
  .product {
    .content {
      padding: 10px;
    }
  }
}
</style>