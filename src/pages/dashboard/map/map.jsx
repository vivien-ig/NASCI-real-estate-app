/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import "./map.css";
import { Wrapper } from "@googlemaps/react-wrapper";
import { createRoot } from "react-dom/client";
import { InfoWindow } from "@react-google-maps/api";
import MapMarker from "src/components/map-marker/mapmarker";
const mapOptions = {
  mapId: process.env.REACT_APP_GOOGLE_MAPS_ID,
  center: { lat: 51.505, lng: -0.09 },
  zoom: 10,
  // disableDefaultUI: true,
};

const markers = [
  {
    id: 1,
    position: { lat: 51.505, lng: -0.09 },
    content: "<h3>Marker 1</h3><p>This is Marker 1.</p>",
  },
  {
    id: 2,
    position: { lat: 51.6, lng: -0.2 },
    content: "<h3>Marker 2</h3><p>This is Marker 2.</p>",
  },
  {
    id: 3,
    position: { lat: 51.5, lng: -0.1 },
    content: "<h3>Marker 1</h3><p>This is Marker 1.</p>",
  },
  {
    id: 4,
    position: { lat: 51.6, lng: -0.2 },
    content: "<h3>Marker 2</h3><p>This is Marker 2.</p>",
  },
];
const Map = () => {
  document.title = "Maps";

  return (
    <Wrapper
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      version="beta "
      libraries={["marker"]}
    >
      <CustomMap />
    </Wrapper>
  );
};

function CustomMap() {
  const [map, setMap] = useState();
  const ref = useRef();

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions));
  }, []);
  return (
    <>
      <div ref={ref} id="map" style={{ width: "60vw", height: "70vh" }} />
      {markers.map((marker, index) => (
        <div key={index}>
          <MarkerComp position={marker.position} map={map} />
        </div>
      ))}
    </>
  );
}

function MarkerComp({ map, position }) {
  const markerRef = useRef();
  const rootRef = useRef();

  let markerContainer = document.createElement("div");
  useEffect(() => {
    if (!rootRef.current) {
      rootRef.current = createRoot(markerContainer);
      markerRef.current = new window.google.maps.marker.AdvancedMarkerView({
        position: position,
        content: markerContainer,
      });
    }
  }, []);
  useEffect(() => {
    rootRef.current.render([
      <>
        <MapMarker />
      </>,
    ]);

    markerRef.current.map = map;
    markerRef.current.position = position;
  }, [map]);
}

export default Map;
