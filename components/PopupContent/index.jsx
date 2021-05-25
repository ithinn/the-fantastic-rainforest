import { usePageContext } from "../../context/PageContext";
import FactPopup from "./FactPopup"
import ClassicPopup from "./ClassicPopup"


const PopupContent = ({ data }) => {
    
    if( data !== null) {
    const { activePage, windowSize } = usePageContext();
    const isScreenXl = windowSize.width > 1900 ? true : false;
    
    return(
        <>
        {activePage.slug === "fakta" ? 
            <FactPopup data={data} isScreenXl={isScreenXl}/> 
            : 
            <ClassicPopup data={data} isScreenXl={isScreenXl}/>}
        </>
    )
    } else {
        return null
    }
}

export default PopupContent;