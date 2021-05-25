import { Box, Flex } from "reflexbox"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import PhotoCredit from "../PhotoCredit";
import Image from "next/image"
import image from "next/image";
import Media from "./Media";
import RoundImage from "./RoundImage"
import Description from "./Description";
import SourceButton from "./SourceButton";
import Legend from "../Map/Legend";

const FactPopup = ({ data, isScreenXl }) => {
    const classes = useStyles();

    if (data !== undefined) {

        const renderFullSlide = () => {
            return(
                <Box>
                    <Box className={[`${classes.imgWrapper} ${classes.contentWrapper}`]}>
                        {!data.charttype && 
                            <Image 
                                layout="fill" 
                                className={classes.img} 
                                src={data.image.url} 
                                alt={data.image_alt}/>
                        }
                    </Box>

                    <Flex className={`${classes.headingWrapper} ${classes.contentWrapper}`}>
                        <Typography 
                            variant="h2"
                            className={classes.heading}
                            component="h2">{data.heading}</Typography>
                    </Flex>
                    
                    <PhotoCredit creditText={data.image_credits} isBgWhite={false}/>
                </Box>
            )
        }

        const renderMediaSlide = () => {
            return(
                <Flex className={classes.mediaSlideContainer}>
                    <Flex className={classes.itemWrapper}>
                        {data.charttype ? 
                            <Media 
                                isScreenXl={isScreenXl} 
                                data={data}/> 
                        : 
                            <>
                            <RoundImage 
                                isScreenXl={isScreenXl} 
                                src={data.image.url} 
                                alt={data.image_alt}/>
                            </>
                        }
                    </Flex>

                    <Flex className={classes.itemWrapper}>
                        <Description id="factPopupDescription" description={data.text}/>
                    </Flex>
                
                    {!data.charttype && 
                        <PhotoCredit 
                            creditText={data.image_credits} 
                            isBgWhite={true}/>
                    }

                    {data.source && 
                        <SourceButton 
                            url={data.source_url} 
                            text={data.source}/>
                    }
                </Flex>
            )
        }


        return(
            <Container 
                disableGutters 
                className={classes.container} 
                component="article" 
                maxWidth="lg">
                
                {data.format === "front" ? renderFullSlide() : renderMediaSlide()}
            </Container>
        )
    } else {
        return null;
    }
}

export default FactPopup;

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: "80vh",
        overflow: "auto",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        position: "relative"
    },
    contentWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        minHeight: "70vh",
        width: "100%",
    },
    imgWrapper: {
        overflow: "hidden",
        zIndex: 0,
    },
    img: {
        objectFit: "cover",
    },
    headingWrapper: {
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
    },
    heading: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        padding: theme.spacing(1),
        fontWeight: 300
    },
    mediaSlideContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        minHeight: "70vh"
    },
    itemWrapper: {
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        padding: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        },
        [theme.breakpoints.up("md")]: {
            width: "50%"
        },
        position: "relative"
    }
}));