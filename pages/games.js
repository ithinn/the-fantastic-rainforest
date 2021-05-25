import Layout from "../components/Layout";
import Head from "next/head";
import LandingPageContainer from "../containers/LandingPageContainer";
import { getCosmicData, bucket } from "../src/helpers/dataHelpers";

const Games = ({ data }) => {
    return(
        <Layout page="games">
            <Head>
                <title>Regnskogspill</title>
                <meta 
                    name="description" 
                    content="Quiz og memory-spill med regnskog som tema."/>
            </Head>

            <LandingPageContainer page="games" data={data}/>
        </Layout>   
    )
}

export default Games;

export const getStaticProps = async () => {
    
    const data = await getCosmicData(bucket, "games", "slug,title,metadata")
    return {props: { data }} 

}