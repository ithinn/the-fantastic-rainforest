import * as React from "react";
import { Marker } from "react-map-gl";
import Room from "@material-ui/icons/Room";
import { makeStyles } from "@material-ui/core/styles"

const Pins = ({ data, onClick }) => {
    const classes = useStyles();
    const popups = data.metadata.popupcontent;

    if (popups.length === 0) {
        return(<></>)
    }

    return (
        <>
        {popups.map((location, index) => {
            const lat = parseFloat(location.latitude);
            const lon = parseFloat(location.longitude);

            return (
                <Marker 
                    key={"marker" + index} 
                    longitude={lon} 
                    latitude={lat} 
                    offsetTop={-20} 
                    offsetLeft={-20}>
                    
                    <Room 
                        onClick={() => onClick(location)} 
                        fontSize="large"
                        className={classes.marker}/>
                </Marker>
            )
        })}
        </>
    )
}

export default React.memo(Pins);

const useStyles = makeStyles(theme=> ({
    marker: {
        color: theme.palette.navigation.main
    }
}))