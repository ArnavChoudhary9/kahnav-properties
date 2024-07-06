'use client'

const Markarea = ({ searchParams } : {
    searchParams: { lat: number, lng: number }
}) => {
    const lat = searchParams.lat;
    const lng = searchParams.lng;

    console.log(lat, lng);

    return (
        <div>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lng}</p>
        </div>
    )
}

export default Markarea;
