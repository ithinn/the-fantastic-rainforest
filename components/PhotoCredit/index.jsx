import Typography from "@material-ui/core/Typography";
import { Box } from "reflexbox";
import { makeStyles } from "@material-ui/core/styles";

const PhotoCredit = ({ creditText, isBgWhite }) => {

    const classes = useStyle();

    return(
        <Box as="aside" className={classes.root}>
            <Typography 
                color={isBgWhite ? "#333" : "secondary"} 
                variant="caption">
                    
                {creditText}
            </Typography>
        </Box>
    )
}

export default PhotoCredit;

const useStyle = makeStyles(theme => ({
    root: {
        position: "absolute",
        bottom: 5,
        left: 10,
        [theme.breakpoints.down("xs")]: {
            width: "200px"
        },    
    }
}))

