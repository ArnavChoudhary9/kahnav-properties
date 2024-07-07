'use client'

import React, { useCallback, useState, useRef } from "react";
import Link from "next/link";

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

interface LatLng {
    lat: number;
    lng: number;
};

const Markarea = ({ searchParams } : {
    searchParams: { lat: string, lng: string }
}) => {
    const centerLat = parseFloat(searchParams.lat);
    const centerLng = parseFloat(searchParams.lng);
    
    const defaultMapCenter = {
        lat: centerLat,
        lng: centerLng
    };

    defaultMapOptions.restriction.latLngBounds = {
        north: centerLat + 0.00075,
        south: centerLat - 0.00075,
        east: centerLng + 0.0025,
        west: centerLng - 0.0025,
    };

    const initialPaths = [
        { lat: centerLat + 0.000175, lng: centerLng + 0.0002 },
        { lat: centerLat + 0.000175, lng: centerLng - 0.0002 },
        { lat: centerLat - 0.000175, lng: centerLng - 0.0002 },
        { lat: centerLat - 0.000175, lng: centerLng + 0.0002 }
    ];

    const [paths, setParts] = useState<LatLng[]>(initialPaths);
    const polygonRef = useRef<google.maps.Polygon | null>(null);

    const onLoad = useCallback((polygon : google.maps.Polygon) => {
        polygonRef.current = polygon;
    }, []);

    const onEdit = () => {
        const polygon = polygonRef.current;
        if (polygon) {
            const newPaths = polygon.getPath().getArray().map((latlng: google.maps.LatLng) => ({
                lat: latlng.lat(),
                lng: latlng.lng()
            }));
            setParts(newPaths);
        }
    };

    const onUnmount = useCallback(() => {
        polygonRef.current = null;
    }, []);

    return (
        <div>
            <h1 className="px-6 py-2 text-2xl">Mark the boundries of your Land</h1>
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
                    paths={paths}
                    onMouseUp={onEdit}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                />
            </GoogleMap>
            
            <div className="flex flex-col p-6">
                <Link 
                    href={`/list/markarea?lat=${defaultMapCenter.lat}&lng=${defaultMapCenter.lng}`}
                    className="bg-blue-900 text-white text-center font-semibold mt-2 py-2 px-4 rounded hover:bg-blue-700"
                >
                    Proceed
                </Link>
            </div>
        </div>
    )
}

export default Markarea;
