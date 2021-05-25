import { usePageContext } from "../../context/PageContext";
import {Flex, Box} from "reflexbox"
import { makeStyles } from "@material-ui/core/styles";
import RoundImage from "./RoundImage";
import Heading from "./Heading";
import Description from "./Description";
import PhotoCredit from "../PhotoCredit";
import SourceButton from "./SourceButton"
import InfoBox from "./InfoBox";


const ClassicPopup = ({ data, isScreenXl }) => {
    const classes = useStyles();
    const { activePage } = usePageContext();
    const isMap = activePage.metadata.id === "maps" ? true : false;

    if (data !== undefined) {
        return(
            <Flex className={classes.root}>
                <Flex className={classes.imgAndHeadingWrapper}>
                    
                    <Flex className={classes.itemWrapper}>
                        <RoundImage
                            isScreenXl={isScreenXl} 
                            src={isMap ? data.image.url : data.metadata.image.url} 
                            alt={isMap ? data.image_alt : data.metadata.image_alt}/>
                    </Flex>
                
                    <Flex className={classes.itemWrapper}>
                        <Heading id="classicTitle" text={data.title}/>
                    </Flex>

                    <PhotoCredit 
                        creditText={isMap ? data.image_credits : data.metadata.image_credits} 
                        isBgWhite={true}/>
                </Flex>

                <InfoBox data={data}/>

                <Box className={classes.description} mt={3} mb={4}>
                    <Description id="classicDescription" description={isMap ? data.text : data.metadata.description}/>
                </Box>

                {!isMap && data.metadata.source_url !== undefined && <SourceButton url={data.source_url} text={data.source} />}
                {isMap && <SourceButton url={data.source_url} text={data.source} />}
            </Flex>
        )
    } else {
        return(<></>)
    }
}

export default ClassicPopup;

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        padding: theme.spacing(3),
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.up("xl")]: {
            width: "50%",
            left: "25%"
        }
    },
    imgAndHeadingWrapper: {
        marginTop: theme.spacing(3),
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
        
    },
    itemWrapper: {
        padding: theme.spacing(3),
        maxWidth: "300px",
        justifyContent: "center",
        width: "100%" 
    },
    roundImg: {
        objectFit: "cover",
        borderRadius: "50%",
    },
    description: {
        lineHeight: 2,
        fontSize: "1.5rem",
        [theme.breakpoints.up("md")]: {
            width: "60%",
        },
        [theme.breakpoints.up("xl")]: {
            width: "100%",
        }
    }
}));