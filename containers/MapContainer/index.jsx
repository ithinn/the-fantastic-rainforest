import React, { useState } from "react"
import { usePageContext } from "../../context/PageContext"
import { TabPanel, a11yProps } from "../../src/helpers/mapHelpers";
import {makeStyles} from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Map from "../../components/Map";


const MapContainer = ({ data }) => {

    const { windowSize } = usePageContext();
    const classes = useStyles();
    const [value, setValue] = useState(0)
    const isLargeScreen = windowSize.width > 600 ? true : false;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabTitles = data.map(map => {
        return map.metadata.tabtext;
    })

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs 
                    value={value} 
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered={true}
                    className={classes.tabs}
                    orientation={isLargeScreen ? "horizontal" : "vertical"} 
                    onChange={handleChange} 
                    aria-label={"tabs"}>
                    
                    {tabTitles.map((tabTitle, index) => {
                        return (                        
                            <Tab 
                                style={isLargeScreen ? null : {margin: "0 auto"}} 
                                className={classes.tab}
                                label={tabTitle} 
                                {...a11yProps(index)}
                                key={"tab" + index}/>
                        )
                    })}
                </Tabs>
            </AppBar>

            {data.map((map, index) => {
                return (
                    <TabPanel value={value} index={index}>
                        <Map data={map}/>
                    </TabPanel>
                )
            })}
        </div>
    )
}

export default MapContainer;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    tabs: {
        backgroundColor: theme.palette.navigation.main,
    },
    tab: {
        color:"#c7c5c5 ",
    }
}));
