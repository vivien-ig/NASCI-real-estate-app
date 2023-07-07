import React from "react";
import "./news.css";
import NewsPageComponent from "src/components/news-page-component/news-page-component";
import { v4 as uuidv4 } from "uuid";

const array = [1, 1, 1, 1];
const News = () => {
  return (
    <>
      <section className="news_page">
        <input type="text" name="" id="" />
        <br />
        <h2>News</h2>
        <div className="news_page_list">
          {array.map((el) => {
            return <NewsPageComponent key={uuidv4()} />;
          })}
        </div>
      </section>
      ;
    </>
  );
};

export default News;
