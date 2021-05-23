import Image from "next/image"
import { makeStyles } from "@material-ui/core/styles"

const RoundImage = ({ src, alt, isScreenXl }) => {
    const classes = useStyles();

    return(
        <Image
            src={src}
            width={isScreenXl ? 400 : 250}
            height={isScreenXl ? 400 : 250}
            className={classes.round}
            alt={alt}
        />
    )
}

export default RoundImage;

const useStyles = makeStyles(theme => ({
    round: {
        borderRadius: "50%",
        objectFit: "cover",
        margin: theme.spacing(3)
    }
}));