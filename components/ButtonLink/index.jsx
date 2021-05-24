import Link from "next/link"
import Button from "@material-ui/core/Button"
import { createMuiTheme, makeStyles } from "@material-ui/core/styles"

const ButtonLink = ({ path, text }) => {
    const classes = useStyle();

    return(
        <Link href={`/${path}`} passHref>
            <Button
                aria-label={`Naviger til ${text}`} 
                variant="contained" 
                className={classes.button}
                size="large" 
                >{text}
            </Button>
        </Link>
    )
}

export default ButtonLink;

const useStyle = makeStyles(theme => ({
    button: {
        margin: 10,
        backgroundColor: theme.palette.navigation.main,
        color: "white",
        [theme.breakpoints.up("md")]: {
            fontSize: "1.3rem"
        }
    }
}));