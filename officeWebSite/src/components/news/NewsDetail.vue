<template>
  <div class="news">
    <div class="news-img">
      <img src="@/assets/image/news/news-01.jpg" />
    </div>
    <div class="content">
      <div class="title">
        <p>新闻中心</p>
      </div>
      <div class="article-detail">
        <div class="article-title">{{news.title}}</div>
        <div class="article-source">
          <span>作者：{{news.from}}</span>
          <span>发布时间：{{news.releaseTime}}</span>
        </div>
        <br />
        <br />
        <div class="article-content">{{news.content}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      news: []
    };
  },
  mounted: function() {
    var language = "Chinese";
    axios
      .get(
        `http://47.52.233.25:8080/news/get/single?id=${this.$route.params.id}&language=${language}`
      )
      .then(res => {
        this.news = res.data.result;
      });
  }
};
</script>
<style lang="less" scoped>
.news {
  text-align: center;
  .content {
    padding: 10px 160px;
    .title p {
      color: #3773dc;
      font-family: 微软雅黑;
      font-size: 30px;
    }
    .article-detail {
      padding: 10px 160px;
      text-align: left;
      .article-title {
        font-size: 18px;
        color: #434343;
        text-align: center;
      }
      .article-source {
        padding: 10px 0 15px;
        text-align: center;
        margin: 0;
        border-bottom: solid 1px #e5e5e5;
        span {
          padding: 0 15px;
          font-size: 12px;
          color: #5a5a5a;
        }
      }
    }
  }
  .news-img {
    text-align: center;
    margin-bottom: 50px;
    img {
      margin: 0 auto;
      display: block;
      height: 300px;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>