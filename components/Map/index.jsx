import React, { useState, useEffect } from "react";
import ReactMapGl, {
    NavigationControl,
    FullscreenControl
} from "react-map-gl";
import { usePageContext } from "../../context/PageContext";
import Pins from "./Pins"
import Legend from "./Legend"
import Popup from "../Popup";
import PopupContent from "../PopupContent";
import { Box } from "reflexbox"
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SourceButton from "../PopupContent/SourceButton";

const accessToken = "pk.eyJ1IjoiaXRoaW5uIiwiYSI6ImNrazZrb29taTAzcDYycW52OHAwYWg3OHAifQ.aX82AcqyKytGqXNzF-Ewmw"

const Map = ({ data }) => {
    const [popupContent, setPopupContent] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLegend, setIsLegend] = useState(true);
    const classes = useStyles();
    const { windowSize } = usePageContext();
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100vh",
        zoom: 2
    })

    const navControlStyle = {
        right: 10,
        top: 45
    }

    const fullScreenStyle = {
        right: 10,
        top: 10
    }

    //Only show legend content if the viewport width is more than 600px
    useEffect(() => {
        if (windowSize.width < 600) {
            setIsLegend(false)
        } else {
            setIsLegend(true)
        }
    }, [windowSize]);

    const toggleLegend = () => {
        setIsLegend(!isLegend);
    }

    const handleClickOnMarker = (data) => {
        setPopupContent(data);
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false)
        setPopupContent(null);
    }


    return(
        <Container 
            className={classes.container} 
            disableGutters 
            maxWidth={false}>
            
            <Box className={classes.legendWrapper}>
                {isLegend ?  
                    <Legend handleClick={toggleLegend} data={data}/> 
                    : 
                    <Button 
                    variant="contained"
                    color="primary" 
                    startIcon={<HelpOutlineIcon/>} 
                    onClick={toggleLegend}>Hva betyr fargene på kartet?</Button>
                }
            </Box>

            <ReactMapGl
                {...viewport}
                attributionControl={false}
                mapStyle={data.metadata.style}
                mapboxApiAccessToken={accessToken}
                onViewportChange={nextViewport => setViewport(nextViewport)}>
                    
                <NavigationControl 
                    className={classes.controls} 
                    style={navControlStyle}/>
                
                <Pins 
                    data={data} 
                    handleClick={handleClickOnMarker}/> 

                {popupContent && (
                    <Popup 
                        isSlideShow={false} 
                        handleClose={handleClose} 
                        isOpen={isOpen}>

                        <PopupContent data={popupContent} />
                    </Popup>
                )}   
        
                <FullscreenControl 
                    className={classes.controls} 
                    style={fullScreenStyle}/>

            </ReactMapGl>

            <SourceButton 
                url={data.metadata.sourceurl} 
                text={data.metadata.sourcetext}/>

        </Container> 
    )
}

export default Map;

const useStyles = makeStyles(theme => ({
    container: {
        position: "relative",
        width: "100%",
        overflow: "hidden"
    },
    legendWrapper: {
        position: "absolute",
        zIndex: 1,
        top: 10,
        left: 0,
        width: "20%",
        minWidth: 275,
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    controls: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    }
}));