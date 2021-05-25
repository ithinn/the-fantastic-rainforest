import IconButton from "@material-ui/core/IconButton"
import SpeakerOn from "./SpeakerOn"
import SpeakerOff from "./SpeakerOff"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "reflexbox";

const SpeakerBtn = ({ handleClick, isAudio }) => {
    const classes = useStyles();

    return (
        <IconButton
            aria-label={isAudio ? "Skru av lyder" : "Skru på lyder"}
            onClick={() => handleClick()}
            className={classes.button}>
        
            <Box width="70px" height="70px">
                {isAudio ? <SpeakerOn/> : <SpeakerOff/>}
            </Box>
        </IconButton>
    )
}

export default SpeakerBtn;

const useStyles = makeStyles({
    button: {
        position: "absolute",
        bottom: 5,
        left: 5,
        zIndex: 3,
        width: 70,
        height: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})