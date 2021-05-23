import React from "react"
import Typography from '@material-ui/core/Typography';
import {Box, Flex} from "reflexbox";
import ButtonLink from "../ButtonLink"
import styles from "./index.module.css"

const AfterAnimation = ( { pageData, isAnimationComplete, isLargeWindow }) => {

  return(
    <Flex className={`${styles["box"]} ${styles["box1"]} ${styles["fadeIn"]}`}> 
      <Box className={styles.headingWrapper}>
        <>
        <Typography 
          variant="h3" 
          component="h1" 
          fontWeight={900}
          className={styles.heading}>Den fantastiske</Typography>
              
        <Typography 
          variant={isLargeWindow ? "h1" : "h2"}
          component="h2" 
          className={styles.heading}>Regnskogen</Typography>
        </>  
      </Box>
            
      {isAnimationComplete &&(
        <Flex 
          mt={3} 
          flexWrap="wrap" 
          width="80%"
          as="nav" 
          className={styles.fastFade} 
          justifyContent="center">

          {pageData !== null &&(
            pageData.map((item, index) => {
              
              return (
                <ButtonLink 
                  key={"btnLink",index}
                  path={item.metadata.id}
                  text={item.title}
                  className={styles.button}
                  />
              );

            })
          )}
        </Flex>
      )}
    </Flex>
  )
}

export default AfterAnimation;