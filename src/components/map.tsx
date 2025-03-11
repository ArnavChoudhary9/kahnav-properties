/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client'

import { useState, useEffect } from "react";
import Button from "@/components/Button";

// Map component Component from library
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { setDefaults, fromLatLng, OutputFormat } from "react-geocode";

// Map's styling
const defaultMapContainerStyle = {
  width: '100%',
  height: '60vh',
  borderRadius: '15px 15px 0px 15px',
};

// Center Coordinates
const defaultMapCenter = {
  lat: 27.630537,
  lng: 75.157411
}

// Default zoom level, can be adjusted
const defaultMapZoom = 18

// Sikar Bounds
const sikarBounds = {
  north: 27.680537,
  south: 27.537537,
  east: 75.257411,
  west: 75.057411
};

// Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'satellite',
  streetViewControl: false,
  restriction: {
    latLngBounds: sikarBounds,
    strictBounds: true,
  }
};

setDefaults({
  key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
  language: "en",
  region: "in",
  outputFormat: OutputFormat.JSON,
});

const UpdateAddress = (lat: number, lng: number): void => {
  fromLatLng(lat, lng)
    .then(({ results }) => {
      const ADDRESS_ELEMENT = document.getElementById('address');

      if (ADDRESS_ELEMENT) {
        ADDRESS_ELEMENT.innerText = results[0].formatted_address;
      }
    })
    .catch(console.error);
};

let AddressSet: boolean = false;

const MapComponent = () => {
  const [[lat, lng], setLatLng] = useState([defaultMapCenter.lat, defaultMapCenter.lng]);

  return (
    <div className="w-50">
      {!AddressSet && (
        <h1 className="px-6 py-2 text-2xl">Locate your land</h1>
      )}

      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
        onClick={(event: google.maps.MapMouseEvent) => {
          if (event.latLng) {
            const [newLat, newLng] = [event.latLng.lat(), event.latLng.lng()];
            setLatLng([newLat, newLng]);
            UpdateAddress(newLat, newLng);

            AddressSet = true;
          } else {
            console.error("Event latLng is null");
          }
        }}
      >
        <MarkerF
          position={{
            lat: lat,
            lng: lng
          }}
          draggable={true}
          onDragEnd={(event: google.maps.MapMouseEvent) => {
            if (event.latLng) {
              const [newLat, newLng] = [event.latLng.lat(), event.latLng.lng()];
              setLatLng([newLat, newLng]);
              UpdateAddress(newLat, newLng);

              AddressSet = true;
            } else {
              console.error("Event latLng is null");
            }
          }}
        />
      </GoogleMap>


      {AddressSet && (
        <div className="flex flex-col p-6">
          <h1 className="text-2xl font-bold">Address:</h1>
          <p className="text-base" id="address" />

          <Button
            href={`/list/markarea?lat=${lat}&lng=${lng}`}
            className={"bg-blue-900 text-white mt-10 py-2 px-4 hover:bg-blue-700"}
          >
            Outline your land
          </Button>
        </div>
      )}
    </div>
  )
};

export default MapComponent;
