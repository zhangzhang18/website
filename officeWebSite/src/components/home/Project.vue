<template>
  <div class="projects">
    <div class="advantage">
      <div class="title">
        <p>业务优势</p>
      </div>
      <div class="content">
        <div class="detail">
          <a href target="_blank" rel="about">
            <img src="@/assets/image/home/global.png" />
            <p>全球合作</p>
          </a>
        </div>
        <div class="detail">
          <a href target="_blank" rel="about">
            <img src="@/assets/image/home/customize.png" />
            <p>定制加工</p>
          </a>
        </div>
        <div class="detail">
          <a href target="_blank" rel="about">
            <img src="@/assets/image/home/profession.png" />
            <p>专业服务</p>
          </a>
        </div>
      </div>
    </div>
    <div class="news">
      <div class="title">
        <p>新闻中心</p>
      </div>
      <div class="content">
        <div class="news-img">
          <img src="@/assets/image/home/news.jpg" />
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
    color: #3773dc;
    font-family: 微软雅黑;
    font-size: 30px;
  }
  .advantage {
    .content {
      text-align: center;
      width: 100%;
      display: flex;
      .detail {
        border: 1px solid rgba(240, 240, 240, 1);
        border-radius: 3px;
        margin: 0 auto;
        a {
          display: flex;
          text-align: center;
          padding: 50px;
          img {
            width: 80px;
            height: 80px;
          }
          p {
            margin: auto;
            padding: 0px 10px;
            vertical-align: middle;
            line-height: 140%;
          }
        }
      }
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
      padding: 10px 160px;
      text-align: left;
      ul {
        margin: 0 auto;
        white-space:nowrap;
        width: 531px;
        li:nth-child(1) {
          p {
            a {
              font-size: 18px;
              color: #3773dc;
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