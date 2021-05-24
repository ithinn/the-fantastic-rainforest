import React, { useState } from "react";
import ReactMapGl, {
    NavigationControl,
    FullscreenControl
} from "react-map-gl";

const accessToken = "pk.eyJ1IjoiaXRoaW5uIiwiYSI6ImNrazZrb29taTAzcDYycW52OHAwYWg3OHAifQ.aX82AcqyKytGqXNzF-Ewmw"

const MapChart = ({ mapStyle, ariaLabel }) => {

    const [viewport, setViewport] = useState({
        width: 600,
        height: 400,
        zoom: 1
    })
 
    return(
        <ReactMapGl
            {...viewport}
            attributionControl={false}
            mapStyle={mapStyle}
            aria-label={ariaLabel}
            mapboxApiAccessToken={accessToken}
            onViewportChange={nextViewport => setViewport(nextViewport)}>

        </ReactMapGl>
    )
}

export default MapChart;

