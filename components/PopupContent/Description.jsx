import { makeStyles } from "@material-ui/core/styles";

const Description = ({ description, id }) => {

    const classes = useStyles();

    const createMarkup = () => {
        return {__html: description};
    }

    return(
        <div
            id={id} 
            className={classes.description}
            aria-label="Beskrivende tekst" 
            dangerouslySetInnerHTML={createMarkup()}>    
        </div>
    )
}

export default Description;

const useStyles = makeStyles({
    description: {
        lineHeight: 2,
        fontSize: "1.2rem",
        width: "90%",
        margin: "2em auto"
    }
});