import { useState } from "react"
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Box, Flex } from "reflexbox";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles"
import { usePageContext } from "../../../context/PageContext";


const Question = ( {getAnswer, data} ) => {
    const [value, setValue] = useState(null);
    const [error, setError] = useState(false);
    const { windowSize } = usePageContext();
    const isScreenXl = windowSize.width > 1900 ? true : false;
    const classes = useStyles();


    //Check if the user has selected an alternative, and render error if not.
    //Call the getAnswer function
    const handleSubmit = event => {
        event.preventDefault();

        if (value === null) {
            setError(true)
        }

        getAnswer(value); 
    }

    //Save the users choice in state when he/she has selected an alternative
    const handleChange = ({target}) => {
        setError(false);
        setValue(target.value);
    }

    
    return (
        <>
        {data !== null &&(
            <Flex className={classes.questionWrapper}>

                <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
                    <Box p={3}>
                        <Image
                            src={data.metadata.image.url}
                            className={classes.roundImg}
                            width={isScreenXl ? 350 : 250}
                            height={isScreenXl ? 350 : 250}
                            alt={data.metadata.image_alt}/>
                    </Box>

                    <Box className={classes.textWrapper}>
                        <Typography variant={isScreenXl ? "h4" : "h5"} component="h2">
                            {data.metadata.question }
                        </Typography>
                    </Box>
                </Flex>
                
                <Box p={3}>
                    {error &&(
                        <Typography role="alert" aria-atomic="true" className={classes.error} variant="h6" component="p" color="error">
                            Du må velge ett alternativ
                        </Typography>
                    )}

                    <form onSubmit={handleSubmit}>
                        <Flex flexWrap="wrap" justifyContent="center">
                            <Flex className={classes.altWrapper}>
                                <FormControl>
                                    <FormLabel className={classes.legend} component="legend">Velg svar:</FormLabel>
                                    <Box>
                                        <RadioGroup 
                                            aria-label="alternatives" 
                                            name="alternatives"
                                            id="alternatives"
                                            onChange={handleChange}>

                                            {data.metadata.alternatives.map(alt => {
                                                return(
                                                    <FormControlLabel 
                                                        key={"alternative", alt.number} 
                                                        value={alt.number}
                                                        className={classes.alternative} 
                                                        control={
                                                            <Radio className={error ? classes.radioError : classes.radio} color="primary"/>
                                                        } 
                                                        label={<Typography variant="h6" component="p">{alt.alternative}</Typography>}/>
                                                )
                                            })}
                                        </RadioGroup>
                                    </Box>
                                </FormControl>
                            </Flex>

                            <Flex 
                                p={3} 
                                width="10em" 
                                minWidth="300px" 
                                justifyContent="center" 
                                alignItems="center">
                                
                                <Button 
                                    color="primary" 
                                    size="large" 
                                    variant="contained" 
                                    type="submit">Svar</Button>
                            </Flex>        
                        </Flex>
                    </form>
                </Box>
            </Flex>
        )}
        </>
    )
}

export default Question;

const useStyles = makeStyles(theme => ({
    questionWrapper: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
            justifyContent: "center"
        }

    },
    textWrapper: {
        textAlign: "center",
        maxWidth: 600,
        margin: theme.spacing(5)
    },
    error: {
        textAlign: "center"
    },
    radio: {
        marginRight: theme.spacing(2)
    },
    radioError: {
        border: `2px solid ${theme.palette.error.main}`,
        marginRight: theme.spacing(2),
    },
    alternative: {
        margin: theme.spacing(2)
    },
    legend: {
        textAlign: "center"
    },
    roundImg: {
        borderRadius: "50%",
        objectFit: "cover",
        [theme.breakpoints.up("xl")]: {
            width: 300,
            height: 300,
        }
    }
}));