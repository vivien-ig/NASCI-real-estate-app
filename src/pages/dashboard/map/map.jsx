import React from "react";
import MapComp from "src/components/map/map";

export default function Map() {
  document.title = "Maps";

  return (
    <>
      <h3>Map</h3>
      <br />
      <MapComp />
    </>
  );
}
