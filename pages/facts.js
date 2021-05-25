import Layout from "../components/Layout";
import Head from "next/head"
import { getCosmicData, bucket } from "../src/helpers/dataHelpers";
import LandingPageContainer from "../containers/LandingPageContainer";


const Facts = ({ data }) => {
    return(
        <Layout page="facts">
            <Head>
                <title>Fakta om regnskogen</title>
                <meta name="description" content="Faktaartikler om tropisk regnskog, avskogning, urfolk og menneskene i regnskogen."/>
            </Head>
            <LandingPageContainer page="facts" data={data}/>
        </Layout>   
    )
}

export default Facts;

export const getStaticProps = async () => {
    
    const data = await getCosmicData(bucket, "factarticles", "slug,title,metadata")
    return {props: { data }} 

}
  