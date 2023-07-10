/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import "./mapComp.css";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const MapComp = () => {
  const containerStyle = {
    width: "70vw",
    height: "55vh",
    marginLeft: "1.5vw",
    marginTop: "1.5vw",
    position: "relative",
  };
  const mapStyles = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#a2daf2" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#e8e8e8" }],
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    // Add more style rules as needed
  ];

  const center = { lat: 9.082, lng: 8.6753 };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="mapComp">
      <GoogleMap
        mapContainerStyle={containerStyle}
        // styles={mapStyles}
        center={center}
        zoom={6.5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default MapComp;
