import {useState, useEffect, useRef } from "react";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { usePageContext } from "../context/PageContext";
import {getCosmicData, bucket} from "../src/helpers/dataHelpers";
import { 
    removeFromList, 
    getRandomListItem, 
    isItCorrect, 
    feedback } from "../src/helpers/gameHelpers";
import { makeStyles } from "@material-ui/core/styles"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box } from "reflexbox"
import Animation from "../components/Quiz/Animation";
import Popup from "../components/Popup";
import Question from "../components/Quiz/Question";
import Dialogue from "../components/Quiz/Dialogue";
import CloseBtn from "../components/CloseBtn";
import Confetti from "react-confetti";
import Error from "../components/Quiz/Error";


const Quiz = ({ questions }) => {
    
    const [level, setLevel] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [question, setQuestion] = useState(null);
    const [questionList, setQuestionList] = useState(null);
    const [feedbackBubble, setFeedbackBubble] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { windowSize } = usePageContext();
    const classes = useStyle();
    

    //Play response sounds
    useEffect(() => {
        if (isCorrect === true) {
            playAudio("./audio/quiz/happy.mp3")
        } else if (isCorrect === false) {
            playAudio("./audio/quiz/sad.mp3")
        }
    }, [isCorrect]);


    //Save the array with questions in state
    useEffect(() => {
        setQuestionList([...questions]);
    }, [])


    //Change level after the user has answered a question
    useEffect(() => {
        if (isCorrect !== null) {

            const timer = setTimeout(() => {
                if (isCorrect && level < 7) {
                    setLevel(level + 1);
                } 
                else {
                    if (level > 1) {
                        setLevel(level - 1);
                    }
                }
            }, 1000);
        
            return () => clearTimeout(timer);

        }
    }, [isOpen])


    //Finish game if the user has reached level 7
    useEffect(() => {
        if (level === 7) {
            setIsComplete(true);
            setIsPlaying(false);
        }
    }, [level]);

    
    const startGame = () => {
        setIsPlaying(true);
        getQuestion();
    }

   
    //Get a random question from the questionList, and show it in a popup.
    //Remove the question from the questionList.
    const getQuestion = () => {
        playAudio("./audio/quiz/newQuestion.mp3");
        setIsOpen(true);
        const newQuestion = getRandomListItem(questionList);
        setQuestion(newQuestion);

        setQuestionList(
            removeFromList(questionList, newQuestion)
        );
        setIsCorrect(null);
    }

    //Checks if the user has answered, if the answer is correct, 
    //and defines appropriate feedback from the monkey
    const answerQuestion = ( answer ) => {
        if (answer !== null) {
            const correct = isItCorrect(
                answer, 
                question.metadata.correct_answer
            );

            setIsOpen(false);
            setIsCorrect(correct);
            const monkeysFeedback = correct ? getRandomListItem(feedback.quizTrue) : getRandomListItem(feedback.quizFalse);
            setFeedbackBubble(monkeysFeedback);
        }
    }

    //Close popup window
    const handleClose = () => {
        setIsOpen(false);
    }

    //Navigate to the games page
    const handleClick = () => {
        router.push("/games");
    }


    //Play audio file with forest sounds
    const player = useRef();

    const playAudio = (audiofile) => {
        player.current.src = audiofile;
        player.current.play();
    }


    //Give the user a chance to quit when it is not longer possible to complete the game 
    if (questionList !== null && (7 - level) > questionList.length) {
        return(
            <Error 
                handleBackToGames={handleClick} 
                handleRefresh={() => {
                    Router.reload(window.location.pathname);
                }}/>
        )
    }

    
    return (
        <>
        <Head>
            <title>Den fantastiske regnskogen - Quiz</title>
            <meta name="description" content="Quiz-spill der du skal hjelpe apen Nyani med å klatre til toppen av treet ved å svare riktig på spørsmål"/>
        </Head>
        <Container 
            maxWidth={false} 
            disableGutters 
            className={classes.container} 
            component="section"> 
            
            <audio ref={player}/>

            <Animation isCorrect={isCorrect} level={level}>
                
                <CloseBtn handleClick={handleClick}/>
                <Dialogue 
                    handleStart={startGame}
                    isPlaying={isPlaying} 
                    getQuestion={getQuestion} 
                    isComplete={isComplete} 
                    feedbackBubble={feedbackBubble} 
                    isCorrect={isCorrect}/>
                
                {isPlaying && isCorrect !== null && 
                    <Box className={classes.monkey}>
                        <Image 
                            src={isCorrect ? "/img/quiz/happy.svg" : "/img/quiz/sad.svg"}
                            width={100}
                            height={120}
                            alt={"Hodet til apen Nyani som smiler/er lei seg ut fra om du har svart riktig på et spørsmål eller ikke"}
                        />
                        <Typography 
                            component="p" 
                            color="secondary" 
                            variant="h5">
                                {`${level} / 7`}
                        </Typography>
                    </Box>
                }
            
                {isOpen && (<Popup handleClose={handleClose} isOpen={isOpen}>
                    <Question 
                        isCorrect={isCorrect}
                        getAnswer={answer => answerQuestion(answer)}
                        data={question}/> 
                </Popup>)}

                {isComplete && 
                    <Confetti width={windowSize.width} height={windowSize.height}/>
                }
            </Animation> 
        </Container>
        </>
    )
}

export default Quiz;


export const getStaticProps = async () => {
    
    const questions = await getCosmicData(bucket, "questions", "slug,title,metadata");
    
    return {props: { questions }}
}

const useStyle = makeStyles({
    container: {
        width: "100%",
        height: "100vh",
        position: "relative",   
    },
    monkey: {
        position: "absolute",
        top: 10,
        left: 16,
        width: 70,
        textAlign: "center",
    },
});