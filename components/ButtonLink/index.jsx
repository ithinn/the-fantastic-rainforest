import Link from "next/link"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const ButtonLink = ({ path, text }) => {
    const classes = useStyle();

    return(
        <Link href={`/${path}`} passHref>
            <Button 
                variant="contained" 
                className={classes.button}
                size="large" 
                color="primary">{text}
            </Button>
        </Link>
    )
}

export default ButtonLink;

const useStyle = makeStyles({
    button: {
        margin: 10
    }
});