import React from "react";
import "./news-detail.css";
import NewsImg from "./new-img.png";

const NewsNewsDetail = () => (
  <div className="news-detail">
    <h2>News</h2>
    <br />
    <img src={NewsImg} alt="home" />
    <br />
    <span>
      Jan 09, 2023 <span>by Real Agent</span>
    </span>
    <br />
    <p>
      The real estate market is booming as home sales reach an all-time high.
      The demand for homes is skyrocketing as low interest rates and a strong
      economy drive buyers to the market. This has led to a shortage of
      available homes and bidding wars for those that are listed. <br /> <br />
      According to the National Association of Realtors, existing home sales
      rose by 20% in the last quarter, with the median home price increasing by
      14%. This is the strongest quarter for home sales since 2006 and the
      highest median price on record. <br /> <br />
      The shortage of available homes is also driving up prices. With fewer
      homes on the market, buyers are willing to pay more to secure a property.
      This has led to a surge in new construction, as builders try to keep up
      with demand. <br /> <br />
      The strong economy is also playing a role in the market boom. With
      unemployment at record lows and consumer confidence high, more people are
      in a position to buy homes. Additionally, low interest rates make it more
      affordable for buyers to finance a home purchase. <br /> <br />
      The market boom is not just limited to a specific region or type of home.
      Sales are up across the country and in all price ranges. This includes
      both single-family homes and condos. <br /> <br />
      However, the market boom has its downside too. Rising prices and bidding
      wars are making it harder for first-time buyers and low-income buyers to
      enter the market. Additionally, the shortage of available homes is also
      making it difficult for renters to find affordable housing. <br /> <br />
      Despite these challenges, the real estate market is expected to continue
      its strong performance in the coming months. Experts predict that home
      sales will remain at record levels and prices will continue to rise.{" "}
      <br /> <br />
      Overall, the real estate market is currently experiencing a boom, with
      home sales reaching an all-time high. Low interest rates, a strong
      economy, and a shortage of available homes are driving the market.
      However, rising prices and bidding wars are making it harder for some
      buyers to enter the market. <br /> <br />
    </p>
  </div>
);

NewsNewsDetail.propTypes = {};

NewsNewsDetail.defaultProps = {};

export default NewsNewsDetail;
