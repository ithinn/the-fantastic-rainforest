import { Box } from "reflexbox"
import Link from "next/link"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import { usePageContext } from "../../../context/PageContext"

const DesktopNav = ( { data }) => {
    const classes = useStyle();
    const { activePage } = usePageContext();

    return(
        <Box>
            {data.map((page, index) => {
                return(
                    <Link
                        key={"key", index} 
                        href={`/${page.metadata.id}`} 
                        passhref>
                            
                        <Button 
                            className={
                                activePage !== undefined && page.slug === activePage.slug 
                                ? 
                                `${classes["active"]} ${classes["button"]} ` : classes.button} 
                            size="large"
                            aria-label={`Naviger til ${page.title}`}  
                            color="secondary">{page.title}
                        </Button>
                    </Link>   
                )
            })}
        </Box>
    )
}

export default DesktopNav;

const useStyle = makeStyles({
    active: {
        textDecoration: "underline"
    },
    button: {
        fontSize: "1.3rem"
    }
})