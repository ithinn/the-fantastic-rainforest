import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles";
import ContentCard from "../../components/ContentCard";
import Container from "@material-ui/core/Container";
import Popup from "../../components/Popup";
import { extractNumberFromString } from "../../src/helpers/popupHelpers";
import PopupContent from "../../components/PopupContent";


const LandingPageContainer = ({ data, page }) => {
    const classes = useStyles();
    const isCardLink = page === "games" ? true : false;
    const isSlideShow = page === "facts" || page === "animals" ? true : false;
    const [isOpen, setIsOpen] = useState(false);
    const [popupData, setPopupData] = useState([]);
    const [popupContent, setPopupContent] = useState(null)
    const [slideIndex, setSlideIndex] = useState(null);
    const isLastSlide = (popupData.length - 1) === slideIndex ? true : false;
    const isFirstSlide = slideIndex === 0 ? true : false;


    //Opens popup. 
    //Defines the array that contains data for each slide in the slide show, and which slide is the first.
    const handleOpen = ({ target }) => {
        
        const indexOfCard = extractNumberFromString(target.id)

        if (page === "animals") {
            setPopupData(data)
            setPopupContent(data[indexOfCard]);
            setSlideIndex(indexOfCard);

        } else if (page === "facts") {
            setPopupData(data[indexOfCard].metadata.slide);
            setPopupContent(data[indexOfCard].metadata.slide[0]);
            setSlideIndex(0)
        }

        setIsOpen(true);
        
    }

    //Navigates between different slides in the popup by re-defining the popupContent and slideIndex.
    const handleSlide = input => {
        if (input === "next") {
            setPopupContent(popupData[slideIndex + 1]);
            setSlideIndex(slideIndex + 1);
        } else {
            setPopupContent(popupData[slideIndex - 1]);
            setSlideIndex(slideIndex - 1);
        }
    }

    //Close popup
    const handleClose = () => {
        setIsOpen(false);
        setSlideIndex(null);
        setPopupContent(null);
    };


    // WAI-ARIA
    let popupId;
    let popupDescription;
    
    if (popupContent !== null) {
        popupId = page === "facts" ? popupContent.heading : popupContent.slug;
        popupDescription = page === "facts" ? popupContent.text : popupContent.metadata.description;
    }
    

    return(
        <Container 
            component="section" 
            disableGutters
            className={classes.container} 
            maxWidth={false}>
        
           {data.map((item, index) => {
               return(
                   <ContentCard  
                    key={index, item.title} 
                    handleOpen={handleOpen} 
                    data={item}
                    id={page + "card-" + index}
                    isCardLink={isCardLink}/>
               )
           })}

           <Popup 
            id={"infoboks: " + popupId}
            description={popupDescription} 
            handleClose={handleClose}
            handleSlide={input => handleSlide(input)} 
            isLastSlide={isLastSlide} 
            isFirstSlide={isFirstSlide} 
            isSlideShow={isSlideShow} 
            isOpen={isOpen}>
                <PopupContent data={popupContent}/>
            </Popup>
       </Container>
    )
}

export default LandingPageContainer;

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
    }
});