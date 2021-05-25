import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from "@material-ui/core/styles"
import { Box, Flex } from "reflexbox";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import CloseBtn from "../CloseBtn"
import { PlayCircleFilledWhite } from '@material-ui/icons';

const Popup = ({  
    children,
    ariaDescription,
    isFirstSlide, 
    isLastSlide, 
    handleSlide, 
    isSlideShow, 
    handleClose, 
    isOpen, 
    ariaId }) => {

    const classes = useStyles();

    return (
 
        <Modal
            role="dialog"
            aria-labelledby={ariaId}
            aria-describedby={ariaDescription}
            className={classes.modal}
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{timeout: 500}}
        >
            <Fade in={isOpen}>
                <Box as="article" className={classes.paper}>
                    <Box className={classes.close}>
                        <CloseBtn handleClick={() => handleClose()}/>
                    </Box>

                    {children}
                    
                    {isSlideShow &&(
                        <Flex  
                            justifyContent="center"
                            mt={3}
                            width="100%"
                            as="nav">

                            {!isFirstSlide &&(
                                <Box m={3}>
                                <Button
                                    aria-label="Gå til forrige lysbilde"
                                    className={classes.navButton} 
                                    startIcon={<NavigateBeforeIcon/>}
                                    onClick={() => handleSlide("previous")} 
                                    variant="outlined">Forrige
                                </Button>
                                </Box>
                                
                            )}
                            {!isLastSlide &&(
                                <Box m={3}>
                                <Button
                                    aria-label="Gå til neste lysbilde"
                                    className={classes.navButton} 
                                    endIcon={<NavigateNextIcon/>}
                                    onClick={() => handleSlide("next")} 
                                    variant="outlined">Neste</Button>
                                </Box>
                                    
                            )}
                        </Flex>
                    )}  
                </Box>
            </Fade>
        </Modal>
        
    )
}

export default Popup;

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: "0 auto"
    },
    paper: {
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        overflow: "auto",
        position: "relative"
    },
    close: {
        position: "absolute",
        right: 16,
        zIndex: 2
    },
    navButton: {
        backgroundColor: theme.palette.navigation.main,
        color: "white",
        '&:hover': {
            color: theme.palette.navigation.main,
            border: `3px solid ${theme.palette.navigation.main}`
        }
    }
}));