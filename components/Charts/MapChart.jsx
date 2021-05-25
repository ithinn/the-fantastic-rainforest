import React, { useEffect, useState } from "react";
import ReactMapGl from "react-map-gl";
import Legend from "../Map/Legend";
import Button from "@material-ui/core/Button"
import { bucket, getCosmicData } from "../../src/helpers/dataHelpers";
import { getMapLegend } from "../../src/helpers/mapHelpers";

const accessToken = "pk.eyJ1IjoiaXRoaW5uIiwiYSI6ImNrazZrb29taTAzcDYycW52OHAwYWg3OHAifQ.aX82AcqyKytGqXNzF-Ewmw"

const MapChart = ({ data, ariaLabel }) => {
    const [isLegend, setIsLegend] = useState(true);
    const [mapData, setMapData] = useState([]);
    const [viewport, setViewport] = useState({
        width: 600,
        height: 400,
        zoom: 1
    })

    useEffect(async () => {
        const allMaps = await getCosmicData(bucket, "maps", "title,slug,metadata");
        console.log("allmaps", allMaps);
        setMapData(allMaps)
    }, [])

    const thisMap = getMapLegend(data, mapData);

    const toggleLegend = () => {
        setIsLegend(!isLegend)
    };

    //console.log("MAPCHART", data);
 
    return(
        <ReactMapGl
            {...viewport}
            attributionControl={false}
            mapStyle={data.map_style}
            aria-label={ariaLabel}
            mapboxApiAccessToken={accessToken}
            onViewportChange={nextViewport => setViewport(nextViewport)}>
            
            <Button onClick={() => toggleLegend()}>test</Button>
            {isLegend && <Legend data={thisMap} handleClick={toggleLegend} />}
        </ReactMapGl>
    )
}

export default MapChart;

