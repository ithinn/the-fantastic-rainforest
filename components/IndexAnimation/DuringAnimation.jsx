import React from "react"
import Typography from '@material-ui/core/Typography';
import { Box } from "reflexbox";
import styles from "./index.module.css"

const DuringAnimation = ({ isLargeWindow }) => {

  return (
    <Box 
      as="article" 
      className={`${styles["box"]} ${styles["box2"]} ${styles["fadeOut"]}`}>

      <Box maxWidth="90%" textAlign="center">
        <Typography 
          variant="h3"
          component="h1" 
          className={styles.transparentHeading}>Den fantastiske</Typography>

        <Typography 
          variant={isLargeWindow ? "h1" : "h2"}
          component="h2" 
          className={`${styles["transparentHeading"]} ${styles["heading"]}`}>Regnskogen
        </Typography>
      </Box>
    </Box>
  )
}

export default DuringAnimation;