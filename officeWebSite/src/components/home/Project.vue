<template>
  <div class="projects">
    <div class="advantage">
      <div class="title">
        <p>业务优势</p>
      </div>
      <div class="content">
        <a href target="_blank" rel="about">
          <p>全球合作</p>
        </a>
        <a href target="_blank" rel="about">
          <p>定制加工</p>
        </a>
        <a href target="_blank" rel="about">
          <p>专业服务</p>
        </a>
      </div>
    </div>
    <div class="news">
      <div class="title">
        <p>新闻中心</p>
      </div>
      <div class="content">
        <div class="news-img">
          <img src="@/assets/image/home/news-01.jpg" />
        </div>
        <div class="news-article-list">
          <ul>
            <li>
              <p class="link-title">
                <a class="“article”" href>新闻链接跳转</a>
              </p>
            </li>
            <li>
              <p class="time">
                <span>2019-12-31</span>
              </p>
              <p class="link-title">
                <a class="“article”" href>新闻链接跳转</a>
              </p>
            </li>
            <li>
              <p class="time">
                <span>2019-12-31</span>
              </p>
              <p class="link-title">
                <a class="“article”" href>新闻链接跳转</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.projects {
  text-align: center;
  padding: 10px 160px;
  .title {
    color: rgb(26, 160, 230);
    font-family: 微软雅黑;
    font-size: 30px;
  }
  .advantage {
    .content a {
      margin: 0 15px;
      border: 1px solid rgba(240, 240, 240, 1);
      border-radius: 3px;
      display: inline-block;
      width: 30%;
      line-height: 138px;
    }
  }
  .news {
    .content {
      .news-img {
        img {
          padding: 8px;
          border: 1px solid rgb(240, 240, 240);
          height: 300px;
          object-fit: cover;
        }
      }
    }
    .news-article-list {
      ul {
        padding: 0 205px;
        li:nth-child(1) {
          p {
            a {
              font-size: 18px;
              color: #048bcd;
            }
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
          }
        }
        p {
          margin: 0;
          padding: 5px;
        }
        li {
          list-style-type: none;
          display: flex;
          .time {
            span {
              color: #9f9f9f;
              padding-right: 5px;
              font-size: 12px;
            }
          }
          .link-title {
            a {
              font-size: 14px;
              color: #777676;
            }
          }
        }
      }
    }
  }
}
</style>