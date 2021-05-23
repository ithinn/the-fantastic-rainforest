import React, {
    createContext, 
    useContext, 
    useEffect, 
    useState} from "react";

const PageContext = createContext({
    windowSize: {width: undefined, height: undefined},
    defineActivePage: () => {},
    activePage: null,
})

export const Page = ({children}) => {

    const [windowSize, setWindowSize] = useState({width: undefined, height: undefined});
    const [activePage, setActivePage] = useState(null)

    //Listen to changes in the window size
    useEffect(() => {
        if (typeof window !== "undefined") {
            
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                })
            }

            window.addEventListener("resize", handleResize);
            handleResize();

            return () => window.removeEventListener("resize", handleResize)
        }
    }, []);

   
    //Define which landing page the user is currently viewing
    const defineActivePage = (page) => {
        setActivePage(page);
    }

    return <PageContext.Provider value={{
        windowSize,
        defineActivePage,
        activePage,
    }}>{children}</PageContext.Provider>

}

export const usePageContext = () => {
    return useContext(PageContext);
}

