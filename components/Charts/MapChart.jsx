import React, { useState } from "react";
import ReactMapGl, {
    NavigationControl,
    FullscreenControl
} from "react-map-gl";

const accessToken = "pk.eyJ1IjoiaXRoaW5uIiwiYSI6ImNrazZrb29taTAzcDYycW52OHAwYWg3OHAifQ.aX82AcqyKytGqXNzF-Ewmw"

const MapChart = ( {mapStyle} ) => {

    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        zoom: 1
    })
    const navControlStyle = {
        right: 10,
        top: 45
    }

    const fullScreenStyle = {
        right: 10,
        top: 10
    }

    return(
        <ReactMapGl
            {...viewport}
            attributionControl={false}
            mapStyle={mapStyle}
            mapboxApiAccessToken={accessToken}
            onViewportChange={nextViewport => setViewport(nextViewport)}>
                    
            <NavigationControl style={navControlStyle}/>
               
            <FullscreenControl style={fullScreenStyle}/>
        </ReactMapGl>
    )
}

export default MapChart;

