/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client'

// Map component Component from library
import { GoogleMap } from "@react-google-maps/api";

// Map's styling
const defaultMapContainerStyle = {
    width: '100%',
    height: '90vh',
    borderRadius: '15px 15px 0px 15px',
};

// Center Coordinates
const defaultMapCenter = {
    lat: 27.630537,
    lng: 75.157411
}

// Default zoom level, can be adjusted
const defaultMapZoom = 19

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
    restriction: {
        latLngBounds: sikarBounds,
        strictBounds: true,
    }
};

const MapComponent = () => {
    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            />
        </div>
    )
};

export { MapComponent };
