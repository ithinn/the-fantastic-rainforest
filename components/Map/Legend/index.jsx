import {Box, Flex} from "reflexbox"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';


const Legend = ({data, handleClick}) => {

    const classes = useStyles();
        
    return(
 
        <Card className={classes.root}>
            <CardContent>
                <Box mb={3}>
                    <Typography component="h2" gutterBottom>
                        {data.metadata.description}
                    </Typography>
                </Box>

                {data.metadata.legend.length > 0 && (
                    <Box>
                        <Typography 
                            variant="subtitle2" 
                            component="h3" 
                            gutterBottom>
                            {data.metadata.legendheading}
                        </Typography>

                        <Flex flexWrap="wrap">
                            {data && (
                                data.metadata.legend.map((item, index) => {
                                    return (
                                        <Flex key={"legend", index} m={2} p={2}>
                                            <Box
                                                aria-label="Kvadrat med en farge som tilsvarer en av fargene på kartet" 
                                                width="20px" 
                                                height="20px" 
                                                bg={item.hex} 
                                                mr={3}/>
                                            <Typography 
                                                component="p" 
                                                color="#333">
                                                {item.explanation}
                                            </Typography>
                                        </Flex>
                                    )
                                })
                            )}
                        </Flex>
                    </Box>
                )}

                <Button 
                    color="primary" 
                    variant="outlined" 
                    startIcon={<CancelIcon/>} 
                    onClick={handleClick}>Skjul dette
                </Button>
            </CardContent>
        </Card>
    )
};


export default Legend;

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 275,
        width: "20%",
        margin: 10,
        zIndex: 3,
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            margin: "0 auto"
        }
    },
}));