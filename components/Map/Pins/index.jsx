import * as React from "react";
import { Marker } from "react-map-gl";
import Room from "@material-ui/icons/Room";

const Pins = ({ data, onClick }) => {

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
                        color="error"/>
                </Marker>
            )
        })}
        </>
    )
}

export default React.memo(Pins);
