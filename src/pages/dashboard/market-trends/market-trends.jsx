import React from "react";
import "./market-trends.css";
import { SearchComp } from "src/components/search-comp/seacrch-comp";

const MarketTrends = () => (
  <div className="market-trends">
    <SearchComp placeholder="Search" />
    Market Trends Component
  </div>
);

export default MarketTrends;
