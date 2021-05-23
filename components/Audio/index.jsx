import React, { useRef } from "react";
import Button from "@material-ui/core/Button"

const Audio = ({ audioFile }) => {

    const player = useRef();

    const playSong = () => {
        player.current.src = audioFile;
        player.current.play();
    }

    return(
        <Button color="primary" tabIndex={ 0 } onClick={() => playSong()}>
            <audio ref={player}/>
            Hør på lyden
        </Button>
    )
}

export default Audio;
