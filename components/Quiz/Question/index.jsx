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

const Question = ( {getAnswer, data} ) => {
    const [value, setValue] = useState(null);
    const [error, setError] = useState(false);
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
            <Box height="100%">

                <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
                    <Box p={3}>
                        <Image
                            src={data.metadata.image.url}
                            className={classes.roundImg}
                            width={200}
                            height={200}
                            alt={data.metadata.image_alt}/>
                    </Box>

                    <Box maxWidth="300px" textAlign="center" p={3}>
                        <Typography variant="h5" component="h2">
                            {data.metadata.question }
                        </Typography>
                    </Box>
                </Flex>
                
                <Box p={3}>
                    {error &&(
                        <Typography variant="h6" component="p" color="error">
                            Du må velge ett alternativ
                        </Typography>
                    )}

                    <form onSubmit={handleSubmit}>
                        <Flex flexWrap="wrap" justifyContent="center">
                            <Flex justifyContent="center" width="25em" maxWidth="300px">
                                <FormControl>
                                    <FormLabel component="legend">Velg svar:</FormLabel>
                                    <Box mt={3}>
                                        <RadioGroup 
                                            aria-label="alternatives" 
                                            name="alternatives" 
                                            onChange={handleChange}>

                                            {data.metadata.alternatives.map(alt => {
                                                return(
                                                    <FormControlLabel 
                                                        key={"alternative", alt.number} 
                                                        value={alt.number} 
                                                        control={<Radio color="primary"/>} 
                                                        label={alt.alternative}/>
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
            </Box>
        )}
        </>
    )
}

export default Question;

const useStyles = makeStyles({
    roundImg: {
        borderRadius: "50%",
        objectFit: "cover",
    }
})