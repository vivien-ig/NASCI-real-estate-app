import React from "react";
import "./watchlist.css";
import { SearchComp } from "src/components/search-comp/seacrch-comp";

const Watchlist = () => (
  <div className="watchlist_page">
    <SearchComp placeholder="Search Address keywords" />
    Watchlist Component
  </div>
);

export default Watchlist;
