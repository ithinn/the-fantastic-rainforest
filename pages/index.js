import Container from '@material-ui/core/Container';
import Layout from "../components/Layout";
import Head from "next/head";
import React, {useEffect, useState} from "react"
import PhotoCredit from "../components/PhotoCredit";
import { makeStyles } from "@material-ui/core/styles"
import IndexAnimation from "../components/IndexAnimation"
import { getCosmicData, bucket } from "../src/helpers/dataHelpers";

export default function Index( { pageData } ) {

  const classes = useStyles();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  //Changes state when the initial animation is finished
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true)
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout page="home">
      <Head>
          <title>Den fantastiske regnskogen</title>
          <meta name="description" content="Utforsk regnskogen ved hjelp av kart, spill og faktaartikler. Passer best for barn mellom 6-10 år, og dekker flere læreplanmål."/>
      </Head>

      <Container 
        className={classes.container} 
        maxWidth={false} 
        disableGutters>

        <PhotoCredit 
          isWhite={false} 
          creditText="Foto: Thomas Marent/Regnskogsfondet"/>
        
        <IndexAnimation 
          isAnimationComplete={isAnimationComplete} 
          pageData={pageData}/>
      </Container>
    </Layout>
  );
}

// 

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    height: "100vh",
    position: "relative",
    backgroundImage: "url('./img/forest.jpg')",
    backgroundPositionX: "center",
    backgroundSize: "cover",
    backgroundColor: theme.palette.primary.main,
  },

}))

export const getStaticProps = async () => {
    
  const pageData = await getCosmicData(bucket, "pages", "slug,title,metadata")

  return {props: { pageData }} 
}
