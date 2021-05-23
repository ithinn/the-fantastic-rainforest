import React, { useEffect, useState } from "react";
import { getCosmicData, bucket, getDataForThisPage } from "../../src/helpers/dataHelpers";
import Link from "next/link";
import Image from "next/image";
import { Flex, Box } from "reflexbox";
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core";
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import { usePageContext } from "../../context/PageContext"
import linkStyle from "./index.module.css"
import { AutorenewTwoTone } from "@material-ui/icons";

const Header = ( { page } ) => {
  
    const classes = useStyle();
    const { activePage, defineActivePage } = usePageContext()
    const [allPages, setAllPages] = useState([])
    
    //Get data about pages
    useEffect(async () => {
        const data = await getCosmicData(bucket, "pages", "slug,title,metadata")
        setAllPages(data)
    }, []);

    //Define which page the user is currently in
    useEffect(() => {
        const currentPage = getDataForThisPage(allPages, page, "id");
        defineActivePage(currentPage);
    }, [allPages, page]);


    //Render header for all pages except index.js
    if (page !== "home") {
        return(
            
            <Box className={classes.header} as="header">
                
                <a className={classes.skip_to_content_link} href="#main">Gå til hovedinnhold</a>

                <div className={classes.overlay}/>

                <Flex as="nav" justifyContent="flex-end" p={3}>
                    <Box 
                        aria-label="link to home" 
                        className={classes.homeBtn}>
                        
                        <Link href="/" passHref>
                            <a>
                                <Flex 
                                    justifyContent="center" 
                                    flexDirection="column" 
                                    alignItems="center">
                                    
                                    <Image 
                                        src={"/img/icons/home_home.svg"} 
                                        width={40} 
                                        height={40} 
                                        alt={"logo: en hvit sirkel med et blågrønt tre inni"}/>
                                    <Typography 
                                        color="secondary" 
                                        variant="overline">Hjem
                                    </Typography>
                                </Flex>
                            </a>
                        </Link>
                    </Box>

                    <Box>
                        <Box className={classes.desktop}>
                            <DesktopNav data={allPages}/>
                        </Box>

                        <Box className={classes.mobile}>
                            <MobileNav data={allPages}/>
                        </Box>
                    </Box>
                </Flex>

                <Box textAlign="center" pb={4}>
                    <Typography 
                        color="secondary" 
                        variant="h1" 
                        component="h1"
                        className={classes.heading}>

                        {activePage !== null && activePage !== undefined ? activePage.title : null}
                    </Typography>
                </Box>
            </Box>
        )
    } else return null;
}

export default Header;

const useStyle = makeStyles((theme) => ({
    header: {
        backgroundImage: "url('./img/forest.jpg')",
        height: "auto",
        width: "100%",
        position: "relative"
    },
    mobile: {
        [theme.breakpoints.down('xs')]: {
            display: "visible"
        },
        
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
    },
    desktop: {
        [theme.breakpoints.down('xs')]: {
            display: "none"
        },
        
        [theme.breakpoints.up('sm')]: {
            display: "visible"
        },
    },
    overlay: {
        position: "absolute",
        height: "40%",
        width: "100%",
        top: 0,
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))" 
    },
    heading: {
        textShadow: "0 0 3px #333",
        fontWeight: 400
    },
    activeLink: {
        textDecoration: "underline",
    },
    homeBtn: {
        position: "absolute",
        left: 16,
        top: 16
    },
    skip_to_content_link: {
        background: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        fontSize: "1rem",
        height: "30px",
        top: 0,
        left: 0,
        right: 0,
        margin: "auto",
        width: "fit-content",
        padding: theme.spacing(3),
        position:"absolute",
        zIndex: 2,
        transform: "translateY(-110%)",
        transition: "transform 0.3s",
        "&:focus": {
            transform: "translateY(0%)"
        }
    }
  
}));



