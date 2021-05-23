import {Box, Flex} from "reflexbox";
import Image from "next/image";
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles";
import Audio from "../../Audio";

const IconWithText = ({ ariaLabel, imgSrc, imgAlt, text, audio }) => {
    const classes = useStyles();

    if (audio) {
        return(
            <Flex className={classes.root}>
                <Box 
                    className={classes.iconWrapper}
                    aria-label={ariaLabel}>

                    <Image 
                        src={imgSrc} 
                        width={40} 
                        height={40} 
                        alt={imgAlt}/>
                </Box>
                    
                <Box>
                    <Audio tabIndex={0} audioFile={audio}/>
                </Box>
            </Flex> 
        )
    }

    return (
        <Flex className={classes.root}>
            <Box 
                className={classes.iconWrapper}
                aria-label={ariaLabel}>

                <Image 
                    src={imgSrc} 
                    width={40} 
                    height={40} 
                    alt={imgAlt}/>
            </Box>
                    
            <Box>
                <Typography 
                    variant="overline" component="p">{ariaLabel}:</Typography>
                <Typography 
                    variant="subtitle1" component="p">{text}</Typography>
            </Box>
        </Flex>  
    )
}

export default IconWithText;

const useStyles = makeStyles(theme => ({
    root: {
        alignItems: "flex-start",
        margin: theme.spacing(2),
        width: "300px",
        padding: theme.spacing(2)
    },
    iconWrapper: {
        minWidth: "40px", 
        marginRight: theme.spacing(3), 
    }
}))
                                        