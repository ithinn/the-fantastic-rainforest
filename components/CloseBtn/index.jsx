import IconButton from "@material-ui/core/IconButton"
import Icon from "./Icon"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "reflexbox";

const CloseBtn = ({ handleClick }) => {
    const classes = useStyles();

    return (
        <IconButton
            onClick={() => handleClick()}
            className={classes.button}>
        
            <Box width="70px" height="70px">
                <Icon/>
            </Box>
        </IconButton>
    )
}

export default CloseBtn;

const useStyles = makeStyles({
    button: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 3,
        width: 70,
        height: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})