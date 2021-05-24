import * as React from "react";
import { Marker } from "react-map-gl";
import Room from "@material-ui/icons/Room";
import { makeStyles } from "@material-ui/core/styles"
import TreeIcon from "../TreeIcon";
import { Box } from "reflexbox";

const Pins = ({ data, handleClick }) => {
    const classes = useStyles();
    const popups = data.metadata.popupcontent;

    console.log("MAPS", data);

    if (popups.length === 0) {
        return(<></>)
    }

    return (
        <>
        {popups.map((location, index) => {
            const lat = parseFloat(location.latitude);
            const lon = parseFloat(location.longitude);
            console.log("location", location);
            return (
                <Marker 
                    key={"marker" + index} 
                    longitude={lon} 
                    latitude={lat} 
                    offsetTop={-40} 
                    offsetLeft={-40}>
                    
                    <Box 
                        aria-label={`Åpne popup med informasjon om ${location.title}`} 
                        onClick={() => handleClick(location)}
                        tabIndex={0} 
                        width={50} 
                        height={60}>
                        <TreeIcon />
                    </Box>
                </Marker>
            )
        })}
        </>
    )
}
/*<Room 
                        tabIndex={0 }
                        onClick={() => onClick(location)} 
                        fontSize="large"
                        className={classes.marker}/>*/
export default React.memo(Pins);

const useStyles = makeStyles(theme=> ({
    marker: {
        color: theme.palette.action.main,
        
    }
}))