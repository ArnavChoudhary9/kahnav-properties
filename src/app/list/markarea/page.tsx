'use client'

import { useSearchParams } from "next/navigation";

const Markarea = () => {
    const searchParams = useSearchParams();

    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    return (
        <div>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lng}</p>
        </div>
    )
}

export default Markarea;
