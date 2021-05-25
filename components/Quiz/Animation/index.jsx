import { Box } from "reflexbox";
import { makeStyles } from "@material-ui/core/styles"
import { useState, useEffect } from "react"

const Animation = ({level, children }) => {
    const classes = useStyle();
    const [classBg, setClassBg] = useState(`${classes["root"]}`)
    
    //Defines classNames based on level. 
    useEffect(() => {
        if (level !== 0) {
            const bg = `${classes["root"]} ${classes[`bg${level}`]}`
            setClassBg(bg);
        }
    }, [level])

    return (
        <Box className={classBg}>
            {children}
        </Box>
    )
}

export default Animation;

const useStyle = makeStyles({
    root: {
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundColor: "lightblue",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    bg1: {
        backgroundImage: "url(./img/quiz/bg/level1.svg)"
    },
    bg2: {
        backgroundImage: "url(./img/quiz/bg/level2.svg)"
    },
    bg3: {
        backgroundImage: "url(./img/quiz/bg/level3.svg)"
    },
    bg4: {
        backgroundImage: "url(./img/quiz/bg/level4.svg)"
    },
    bg5: {
        backgroundImage: "url(./img/quiz/bg/level5.svg)"
    },
    bg6: {
        backgroundImage: "url(./img/quiz/bg/level6.svg)"
    },
    bg7: {
        backgroundImage: "url(./img/quiz/bg/level7.svg)"
    }
})