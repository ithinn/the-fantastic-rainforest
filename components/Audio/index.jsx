import React, { useRef } from "react";
import Button from "@material-ui/core/Button"
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import { makeStyles } from "@material-ui/core/styles"

const Audio = ({ audioFile }) => {
    const classes = useStyles();

    const player = useRef();

    const playSong = () => {
        player.current.src = audioFile;
        player.current.play();
    }

    return(
        <Button className={classes.button} size="large" startIcon={<VolumeMuteIcon/>} variant="contained" tabIndex={ 0 } onClick={() => playSong()}>
            <audio ref={player}/>
            Hør på lyden
        </Button>
    )
}

export default Audio;

const useStyles = makeStyles(theme => ({
    button: {
        backgroundColor: theme.palette.action.main,
        maxHeight: theme.spacing(7),
        '&:hover': {
            border: `3px solid ${theme.palette.action.main}`
        }
    }
}))
