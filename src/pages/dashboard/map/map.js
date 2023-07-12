/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./map.css";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    width: "75vw",
    height: "75vh",
  };

  const center = { lat: 37.7749, lng: -122.4194 };
  const { isLoaded } = useJsApiLoader({
    libraries: ["places"],
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  // eslint-disable-next-line no-unused-vars
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
    <div className="map">
      <Autocomplete>
        <input type="text" />
      </Autocomplete>
      <div className="map-element">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6.5}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            streetViewControl: false,
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Map;
