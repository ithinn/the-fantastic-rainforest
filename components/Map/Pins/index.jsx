import * as React from "react";
import { Marker } from "react-map-gl";
import TreeIcon from "../TreeIcon";
import { Box } from "reflexbox";

const Pins = ({ data, handleClick }) => {

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

export default React.memo(Pins);
