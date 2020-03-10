<template>
  <div class="introduction">
    <div class="introduction-content">
      <div class="introduction-title">
        <p>企业介绍</p>
      </div>
      <div class="introduction-text">
        <p>富乐达科技有限公司以「客户第一」、「品質第一」为经营理念，我们为合作伙伴提供高品质产品服务，为成为半导体行业高价值服务商而不断努力。</p>
        <p>我们与全球知名半导体厂商合作提供全面的硅片（Silicon Wafer）解决方案，从调试级硅片（Dummy Wafer）,测试级硅片（Test Wafer），到产品级硅片（Prime Wafer），以及特殊硅片氧化硅片（Oxide）、氮化硅片(Si3N4)、镀铝硅片、镀铜硅片、SOI Wafer、MEMS Glass、定制超厚、超平硅片等，尺寸覆盖50mm-300mm,并可提供半导体硅片单面/双面抛光、减薄、切割、MEMS等加工和定制服务。</p>
        <p>半导体领域以外我公司还可以提供太阳能以及氮化硅领域的产品。常规产品、特殊规格产品以及定制产品本公司都可以为您提供满意服务。</p>
      </div>
    </div>
    <div class="introduction-img">
      <img src="@/assets/image/home/company.jpg" />
    </div>
  </div>
</template>
<style lang="less" scoped>
.introduction {
  display: flex;
  text-align: left;
  padding: 10px 160px;
  line-height: 16.79px;
  background-color: #f6f6f6;
  .introduction-content {
    padding: 10px;
    font-family: 微软雅黑;
    .introduction-title {
      color: rgb(67, 67, 67);
      line-height: 42px;
      font-size: 30px;
    }
    .introduction-text {
      color: rgb(102, 102, 102);
      line-height: 200%;
      font-size: 16px;
    }
  }
  .introduction-img {
    margin: auto;
    img {
      margin: auto 0;
      width: 500px;
      height: 386px;
      object-fit: cover;
    }
  }
}
@media screen and(max-device-width:1200px) {
  .introduction {
    padding: 20px;
    display: block;
    .introduction-img img {
      width: 100%;
      height: auto;
    }
  }
}
</style>