/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import "./map.css";
import { Wrapper } from "@googlemaps/react-wrapper";
import { createRoot } from "react-dom/client";
import { InfoWindow } from "@react-google-maps/api";
import MapInfoWindow from "src/components/map-info-window/map-info-window";

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
      version="beta"
      libraries={["marker"]}
    >
      <CustomMap />
    </Wrapper>
  );
};

function CustomMap() {
  const [map, setMap] = useState();
  const [activeMarker, setActiveMarker] = useState(null);
  const handleSetActiveMarker = (data) => {
    setActiveMarker(data);
  };

  const ref = useRef();

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions));
  }, []);
  return (
    <>
      <div ref={ref} id="map" style={{ width: "75vw", height: "80vh" }} />
      {map ? (
        markers.map((marker, index) => (
          <div key={index}>
            <MarkerComp
              setActiveMarker={handleSetActiveMarker}
              marker={marker}
              map={map}
            />
            {activeMarker === marker && map && (
              <>
                {/* <InfoWindow
                  map={{ map }}
                  position={activeMarker.position}
                  onCloseClick={() => setActiveMarker(null)}
                >
                  <div>This is the info window {marker.content}</div>
                </InfoWindow> */}
              </>
            )}
          </div>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

function MarkerComp({ map, marker, setActiveMarker }) {
  const markerRef = useRef();
  const rootRef = useRef();
  const setActiveMarkerClick = () => {
    setActiveMarker(marker);
  };

  useEffect(() => {
    let markerContainer = document.createElement("div");
    if (!rootRef.current || !markerRef.current) {
      rootRef.current = createRoot(markerContainer);
      markerRef.current = new window.google.maps.marker.AdvancedMarkerView({
        position: marker.position,
        content: markerContainer,
      });
    }

    markerRef.current.map = map;
    markerRef.current.position = marker.position;
    markerRef.current.addEventListener("gmp-click", () => {
      setActiveMarkerClick();
    });

    // This updates the marker if there are changes in the MAP
    rootRef.current.render(
      <>
        <MapInfoWindow />
      </>
    );
  }, [map, marker.position]);
  // return <></>;
}

export default Map;

// import React, { useState } from "react";
// import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
// import { useLoadScript } from "@react-google-maps/api";
// import MapInfoWindow from "src/components/map-info-window/map-info-window";

// const markers = [
//   {
//     id: 1,
//     name: "Chicago, Illinois",
//     position: { lat: 41.881832, lng: -87.623177 },
//   },
//   {
//     id: 2,
//     name: "Denver, Colorado",
//     position: { lat: 39.739235, lng: -104.99025 },
//   },
//   {
//     id: 3,
//     name: "Los Angeles, California",
//     position: { lat: 34.052235, lng: -118.243683 },
//   },
//   {
//     id: 4,
//     name: "New York, New York",
//     position: { lat: 40.712776, lng: -74.005974 },
//   },
// ];

// function Map() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyDmr1m2zCqB51zDouYGK6pDkQq42u52XFo", // Add your API key
//   });
//   const [activeMarker, setActiveMarker] = useState(null);

//   const handleActiveMarker = (marker) => {
//     if (marker === activeMarker) {
//       return;
//     }
//     setActiveMarker(marker);
//   };

//   const handleOnLoad = (map) => {
//     const bounds = new window.google.maps.LatLngBounds();
//     markers.forEach(({ position }) => bounds.extend(position));
//     map.fitBounds(bounds);
//   };

//   return isLoaded ? (
//     <GoogleMap
//       onLoad={handleOnLoad}
//       onClick={() => setActiveMarker(null)}
//       mapContainerStyle={{ width: "75vw", height: "80vh" }}
//     >
//       {markers.map(({ id, name, position }) => (
//         <Marker
//           key={id}
//           position={position}
//           onClick={() => handleActiveMarker(id)}
//         >
//           {activeMarker === id ? (
//             <InfoWindow
//               options={{
//                 maxWidth: 200,
//                 pixelOffset: { width: 0, height: -30 },
//                 zIndex: 1000,
//               }}
//               onCloseClick={() => setActiveMarker(null)}
//             >
//               <MapInfoWindow />
//             </InfoWindow>
//           ) : null}
//         </Marker>
//       ))}
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// }

// export default Map;
