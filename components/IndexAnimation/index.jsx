import React from "react"
import AfterAnimation from "./AfterAnimation"
import DuringAnimation from "./DuringAnimation"
import { usePageContext } from "../../context/PageContext"


const IndexAnimation = ( {isAnimationComplete, pageData }) => {
    const { windowSize } = usePageContext();
    const isLargeWindow = windowSize.width > 600 ? true : false;

    return(
        <>
        <AfterAnimation 
            isLargeWindow={isLargeWindow}
            pageData={pageData} 
            isAnimationComplete={isAnimationComplete}/>

        {!isAnimationComplete &&(
            <DuringAnimation isLargeWindow={isLargeWindow}/>)}
        </>
    )
}

export default IndexAnimation;
