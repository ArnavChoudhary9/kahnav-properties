'use client'

import { GoogleMap, PolygonF } from "@react-google-maps/api";

const defaultMapContainerStyle = {
    width: '100%',
    height: '60vh',
    borderRadius: '15px 15px 0px 15px',
};

const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'satellite',
    restriction: {
        latLngBounds: {
            north: 0,
            south: 0,
            east: 0,
            west: 0,
        },
        strictBounds: true,
    }
}

const Markarea = ({ searchParams } : {
    searchParams: { lat: string, lng: string }
}) => {
    const centerLat = parseFloat(searchParams.lat);
    const centerLng = parseFloat(searchParams.lng);
    
    const defaultMapCenter = {
        lat: centerLat,
        lng: centerLng
    }

    defaultMapOptions.restriction.latLngBounds = {
        north: centerLat + 0.00075,
        south: centerLat - 0.00075,
        east: centerLng + 0.0025,
        west: centerLng - 0.0025,
    }

    return (
        <div>
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={19}
                options={defaultMapOptions}
            >
                <PolygonF
                    options={{
                        strokeColor: '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 3,
                        fillColor: '#FF0000',
                        fillOpacity: 0.35,
                        draggable: true,
                        editable: true,
                        visible: true
                    }}
                    paths={[
                        { lat: centerLat + 0.000175, lng: centerLng + 0.0002 },
                        { lat: centerLat + 0.000175, lng: centerLng - 0.0002 },
                        { lat: centerLat - 0.000175, lng: centerLng - 0.0002 },
                        { lat: centerLat - 0.000175, lng: centerLng + 0.0002 }
                    ]}
                />
            </GoogleMap>
        </div>
    )
}

export default Markarea;
