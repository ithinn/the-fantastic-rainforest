import React, { useEffect, useState } from "react";
import ReactMapGl from "react-map-gl";
import Legend from "../Map/Legend";
import Button from "@material-ui/core/Button"
import { bucket, getCosmicData } from "../../src/helpers/dataHelpers";
import { getMapLegend } from "../../src/helpers/mapHelpers";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "reflexbox";

//Public token from Mapbox
const accessToken = "pk.eyJ1IjoiaXRoaW5uIiwiYSI6ImNrazZrb29taTAzcDYycW52OHAwYWg3OHAifQ.aX82AcqyKytGqXNzF-Ewmw"

const MapChart = ({ data, ariaLabel }) => {

    const [isLegend, setIsLegend] = useState(false);
    const [mapData, setMapData] = useState([]);
    const [viewport, setViewport] = useState({
        width: 600,
        height: 400,
        zoom: 1
    })
    const classes = useStyles();

    //Get all the maps from Cosmic
    useEffect(async () => {
        const allMaps = await getCosmicData(bucket, "maps", "title,slug,metadata");
        setMapData(allMaps)
    }, [])

    //Store data from the Cosmic map object for this particular map that is rendered
    const thisMap = getMapLegend(data, mapData);

    //Show/hide legend
    const toggleLegend = () => {
        setIsLegend(!isLegend)
    };

 
    return(
        <ReactMapGl
            {...viewport}
            attributionControl={false}
            mapStyle={data.map_style}
            aria-label={ariaLabel}
            mapboxApiAccessToken={accessToken}
            onViewportChange={nextViewport => setViewport(nextViewport)}>
            
            {!isLegend && 
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => toggleLegend()}>
                        Hva betyr fargene på kartet?
                </Button>
            }

            <Box className={classes.legendWrapper}>
                {isLegend && 
                    <Legend 
                        data={thisMap} 
                        handleClick={toggleLegend} />
                }
            </Box>
        </ReactMapGl>
    )
}

export default MapChart;

const useStyles = makeStyles(theme => ({
    legendWrapper: {
        position: "absolute",
        zIndex: 3,
        top: 10,
        left: 0,
        height: "auto",
        maxHeight: "50%",
        overflowY: "auto",
        overflowX: "hidden",
        width: "20%",
        minWidth: 275,
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    }
}))

