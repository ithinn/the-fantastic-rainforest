import React, { useEffect, useState } from "react";
import { usePageContext } from "../context/PageContext";
import { useRouter} from "next/router";
import { 
    getIndex, 
    cards,
    feedback,  
    addToList, 
    isGameCompleted, 
    isItPair, 
    randomOrder, 
    getRandomListItem } from "../src/helpers/gameHelpers";
import Head from "next/head"
import { Box, Flex } from "reflexbox";
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";
import Confetti from "react-confetti";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RefreshIcon from '@material-ui/icons/Refresh';
import Popup from "../components/Popup";
import CloseBtn from "../components/CloseBtn";


const Memory = () => {
    const classes = useStyles();
    const [cardsInPlay, setCardsInPlay] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [flippedCards, setFlippedCards] = useState([]);
    const [numberOfPairs, setNumberOfPairs] = useState(0);
    const [statusMessage, setStatusMessage] = useState("")
    const [initialAriaMessage, setInitialAriaMessage] = useState("")
    const router = useRouter();
    const { windowSize } = usePageContext();

    //Checks if the two cards the user has picked is a pair.
    //Flips them back if they're not.
    //Checks if all the cards in play has been paired. 
    useEffect(() => {
        let timer;

        if (flippedCards.length === 2) {

            let status = isItPair(flippedCards);

            if (status) {
                setNumberOfPairs(numberOfPairs + 1);
                setFlippedCards([]);
                setStatusMessage("Riktig, du fikk et par")
            } else {
                timer = setTimeout(() => {
                    flipCardBack();
                    setStatusMessage("De var ikke like, prøv igjen")
                    setFlippedCards([])
                }, 1500)
            }
        }

        const gameStatus = isGameCompleted(cardsInPlay.length, numberOfPairs);
        
        if (gameStatus) {
            setIsCompleted(true)
        }

        return () => clearTimeout(timer);

    }, [flippedCards])


    //Starts the game with the number of cards that the user has selected
    const drawCards = (number) => {
        const cardsToPlayWith = randomOrder(cards, number);
        setCardsInPlay(cardsToPlayWith);
        setIsPlaying(true);
        setInitialAriaMessage(`${cardsToPlayWith.length} memorykort med baksiden opp`)
    }

    //Sets the isFlipped-prop of the selected card to true
    //Adds the selected card to the flippedCards-array
    const flipCard = (event) => {
        setInitialAriaMessage("");

        if (flippedCards.length < 2) {
            let index = getIndex(cardsInPlay, event.target.id);
    
            let newArray = [...cardsInPlay];
            
            newArray[index] = {...newArray[index], isFlipped: true};

            setCardsInPlay(newArray);

            let list = addToList(flippedCards, event.target.id )
            setFlippedCards(list);
        } 
    }

    //Sets the isFlipped-prop of the selected card to false if it's not paired
    const flipCardBack = () => {
        let newArray = [...cardsInPlay];

        flippedCards.map((item) => {
            
            let cardIndex = getIndex(cardsInPlay, item)
            
            newArray[cardIndex] = {...newArray[cardIndex], isFlipped: false};
            
            setCardsInPlay(newArray);
        })
    }

    const handleRestart = () => {
        setIsCompleted(false);
        setNumberOfPairs(0);
        setCardsInPlay([])
        setIsPlaying(false);
    }


    return(
        <>
        <Head>
            <title>Den fantastiske regnskogen - Memory</title>
            <meta 
                name="description" 
                content="Spill det klassiske memory-spillet med motiver fra regnskogen."/>
        </Head>

        <Container 
            maxWidth={false} 
            disableGutters 
            className={classes.root} 
            component="section">
           
            {isPlaying && 
                <Button
                    className={classes.restartBtn} 
                    variant="outlined"
                    tabIndex={0}
                    startIcon={<RefreshIcon/>}
                    color="secondary" 
                    onClick={handleRestart}>Begynn på nytt</Button>
            }             
            <CloseBtn handleClick={() => {router.push("/games")}}/>
            
            <Typography 
                className={isPlaying ? classes.noHeading : classes.heading} 
                variant="h1"
                color="secondary"
                component="h1">
                    Memory
            </Typography>

            {!isPlaying &&(
                <Flex className={classes.chooseNumbCardsWrapper}>
                    <Typography 
                        variant="overline"
                        color="primary"
                        id="howManyCards" 
                        component="h2">Hvor mange kort vil du spille med?</Typography>

                    <ButtonGroup 
                        className={classes.buttonGroup} 
                        color="primary" 
                        variant="contained"
                        aria-labelledby="howManyCards">
                        
                        <Button 
                            onClick={() => drawCards(12)}
                            id="12">12</Button>
                        <Button 
                            onClick={() => drawCards(16)}
                            id="16">16</Button>
                        <Button 
                            onClick={() => drawCards(20)}
                            id="20">20</Button>
                    </ButtonGroup>  
                </Flex>  
            )}

            {isPlaying && !isCompleted && <Box className={classes.overlay}/>}
              

            {cardsInPlay.length > 0 && (
                <Flex className={classes.cardWrapper}>
                    
                    {cardsInPlay.map((card, index) => {
                        return (
                            <Card 
                            key={index + card.id} 
                            id={card.id}
                            className={classes.card}                            
                            onClick={event => flipCard(event)}>
                            
                            {card.isFlipped ? 
                                <CardActionArea>    
                                    <CardMedia
                                        className={classes.media} 
                                        image={card.url}/>
                                    <CardContent className={classes.content}/>
                                </CardActionArea>
                                :
                                <CardActionArea>
                                    <CardMedia 
                                        aria-label="Klikk for å snu"  
                                        className={classes.media} 
                                        image=".././img/memory/unflipped2-02.jpg" 
                                        id={card.id}
                                        />
                                    <CardContent className={classes.content}/>
                                </CardActionArea>
                            }
                            </Card>    
                        )
                    })} 
                </Flex>
            )}

        
            <Popup 
                isOpen={isCompleted} 
                handleClose={handleRestart}>
                
                <Flex className={classes.popupWrapper}>
                    <Typography variant="h2">
                        {getRandomListItem(feedback.completed)}
                                
                        <Flex 
                            mt={4} 
                            width="100%" 
                            justifyContent="space-around">

                            <Button 
                                variant="outlined" 
                                startIcon={<RefreshIcon/>} 
                                color="primary" 
                                onClick={handleRestart}>Spill en gang til</Button>

                            <Button 
                                variant="outlined" 
                                startIcon={<ExitToAppIcon/>}
                                color="primary" 
                                onClick={() => {router.push("/games")}}>Gå til Spill-siden</Button>
                        </Flex>
                    </Typography>
                </Flex>

                <Confetti 
                    width={windowSize.width} 
                    height={windowSize.height}/>
            </Popup>
        </Container>
        
        <div class={classes.hidden} role="alert" aria-atomic="true">
            {initialAriaMessage}
            {statusMessage}
        </div>

        </>
    )
}

export default Memory;

const useStyles = (makeStyles(theme => ({
    root: {
        width: "100%", 
        height: "auto",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        padding: theme.spacing(8, 3),
        backgroundImage: "url('./img/forest_fog.jpg')",
        backgroundSize: "cover",
        backgroundColor: theme.palette.primary.main,
    },
    popupWrapper: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    overlay: {
        width: "100%", 
        height: "auto",
        minHeight: "100vh",
        position: "fixed",
        zIndex: 0,
        top: 0,
        backgroundColor: "rgba(0, 0, 0, .5)"
    },
    close: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 1,
        [theme.breakpoints.down("xs")]: {
            display: "none"
        },
    }, 
    noHeading: {
        display: "none"
    },
    heading: {
        color: theme.palette.secondary.main,
        fontWeight: 400,
        textShadow: "0 0 3px #333",
    },
    chooseNumbCardsWrapper: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: "15vh",
        margin: theme.spacing(7,3),
        padding: theme.spacing(6, 2),
        backgroundColor: theme.palette.background.paper,
    },
    cardWrapper: {
        flexWrap: "wrap",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(20),
                height: theme.spacing(20),
            },
        },
        [theme.breakpoints.up("md")]: {
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(22),
                height: theme.spacing(22),
            },
        },
        [theme.breakpoints.up("xl")]: {
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(30),
                height: theme.spacing(30),
            },
        }
        
    },
    media: {
        [theme.breakpoints.down("sm")]: {
            height: theme.spacing(20),
        },
        [theme.breakpoints.up("md")]: {
            height: theme.spacing(23),
        },
        [theme.breakpoints.up("xl")]: {
            height: theme.spacing(30),
        }
    },
    restartBtn: {
        position: "absolute",
        zIndex: 1,
        top: 10,
        left: 10
    },
    hidden: {
        height: 1,
        width: 1,
        overflow: "hidden",
        padding: 0,
        position: "absolute"
    }
})))
