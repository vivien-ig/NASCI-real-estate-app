import React from "react";
import "./news.css";
import NewsPageComponent from "src/components/news-page-component/news-page-component";
import { v4 as uuidv4 } from "uuid";
import { SearchComp } from "src/components/search-comp/seacrch-comp";

const array = [1, 1, 1, 1];
const News = () => {
  document.title = "News";

  return (
    <>
      <section className="news_page">
        <SearchComp title="Search" placeholder="Search news" />
        <br />
        <h2>News</h2>
        <div className="news_page_list">
          {array.map((el) => {
            return (
              <NewsPageComponent
                detail="/dashboard/news/another"
                key={uuidv4()}
              />
            );
          })}
        </div>
      </section>
      ;
    </>
  );
};

export default News;
