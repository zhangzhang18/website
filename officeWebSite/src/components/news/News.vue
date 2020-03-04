<template>
  <div class="news">
    <div class="news-img">
      <img src="@/assets/image/news/news-01.jpg" />
    </div>
    <div class="content">
      <div class="title">
        <p>新闻中心</p>
      </div>
      <div class="article-list">
        <ul>
          <li>
            <div class="news-time">
              <span class="day">03</span>
              <span class="date">2020-03</span>
            </div>
            <div class="news-title">新闻标题</div>
          </li>
          <li>
            <div class="news-time">
              <span class="day">03</span>
              <span class="date">2020-03</span>
            </div>
            <div class="news-title">新闻标题</div>
          </li>
          <li>
            <div class="news-time">
              <span class="day">03</span>
              <span class="date">2020-03</span>
            </div>
            <div class="news-title">新闻标题</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
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
    .article-list {
      padding: 10px 160px;
      text-align: left;
      ul {
        list-style-type: none;
        li {
          color: #4d4d4d;
          padding: 20px;
          border-bottom: 1px dotted #dbd4cd;
          display: flex;
          .news-time {
            background: #3773dc;
            width: 60px;
            height: 60px;
            text-align: center;
            .day {
              line-height: 41px;
              color: #fff;
              font-size: 24px;
            }
            .date {
              color: #fff;
              font-size: 12px;
              display: block;
            }
          }
          .news-title{
            padding: 0 10px;
          }
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