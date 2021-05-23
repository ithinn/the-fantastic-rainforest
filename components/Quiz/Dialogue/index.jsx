import { Box, Flex } from "reflexbox"
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Router from "next/router"

const Dialogue = ({ 
        handleStart, 
        getQuestion, 
        isComplete, 
        isPlaying, 
        feedbackBubble, 
        isCorrect }) => {

    const classes = useStyle();
    const intro = "Apen Nyani vil til mammaen sin i toppen av treet. Svar riktig på spørsmål for å hjelpe han å klatre."
    const outro = "Gratulerer! Nyani er endelig oppe, godt jobbet!"


    const renderInitialDialogue = () => {
        return(
            <>
                <Flex className={classes.feedbackWrapper} color="primary">
                    <Typography className={classes.initialText} variant="subtitle1" component="h1">
                        {isComplete ? outro : intro}
                    </Typography>
                </Flex>

                <Box className={classes.feedbackBtn}>
                    <Button 
                        className={classes.btnText}
                        color="secondary" 
                        onClick={isComplete ? () => {
                            Router.reload(window.location.pathname);} : handleStart}>
                        
                            {isComplete ? "Spill igjen" : "Start spillet"}
                    </Button>
                </Box>
            </>
        )
    }

    

    const renderGameDialogue = () => {
        return(
            <>
                <Flex className={classes.feedbackWrapper} color={isCorrect ? "green" : "#333"}>
                    <Typography className={classes.feedbackText} variant="h5">
                        {feedbackBubble}
                    </Typography>
                </Flex>

                <Box className={classes.feedbackBtn}>
                    <Button 
                        className={classes.btnText}
                        onClick={getQuestion} 
                        color="secondary">Nytt spørsmål
                    </Button>
                </Box>
            </>
        )
    }
    
    return(
        <Box className={classes.feedback}>
            {isPlaying ? renderGameDialogue() : renderInitialDialogue()}  
        </Box>
    )
}

export default Dialogue;

const useStyle = makeStyles(theme => ({
    feedback: {
        position: "absolute",
        width: "320px",
        height: "130px",
        top: 70,
        left: 0,
        right: 0,
        margin: "auto",
        zIndex: 3,
        backgroundImage: "url('./img/quiz/feedback-15.svg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
    },
    feedbackWrapper: {
        padding: theme.spacing(4),
        height: "130px",
        justifyContent: "center",
        alignItems: "center"
    },
    feedbackText: {
        fontSize: "1.5rem",
        maxWidth: "300px",
        textAlign: "center"
    },
    initialText: {
        fontSize: "1rem",
        maxWidth: "300px",
        textAlign: "center",
    },
    feedbackBtn: {
        backgroundImage: "url('./img/quiz/button-16.svg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        position: "relative",
        top: -20,
        left: 100,
        display: "flex",
        justifyContent: "center",
        height: 70,
        width: 180,
    },
}));