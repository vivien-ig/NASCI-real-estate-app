import React from "react";
import "./market-trends.css";
import { SearchComp } from "src/components/search-comp/seacrch-comp";

const MarketTrends = () => (
  <div className="market-trends">
    <SearchComp placeholder="Search" />
    <span>General Analytics</span> <strong>Market Trends Component</strong>
  </div>
);

export default MarketTrends;
