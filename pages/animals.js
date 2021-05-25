import Layout from "../components/Layout";
import Head from "next/head";
import { getCosmicData, bucket } from "../src/helpers/dataHelpers";
import LandingPageContainer from "../containers/LandingPageContainer";


const Animals = ({ data }) => {

    return(
        <Layout page="animals">
            <Head>
                <title>Dyr i regnskogen</title>
                <meta name="description" content="Les og lær om de rare dyrene i regnskogen"/>
            </Head>
            
            <LandingPageContainer page="animals" data={data}/>
        </Layout>   
    )
}

export default Animals


export const getStaticProps = async () => {
    
    const data = await getCosmicData(bucket, "animals", "slug,title,metadata")
    return {props: { data }} 
}
  