import Layout from "../components/Layout";
import { getCosmicData, bucket } from "../src/helpers/dataHelpers";
import LandingPageContainer from "../containers/LandingPageContainer";

const Animals = ({ data }) => {

    return(
        <Layout animals>
            <LandingPageContainer page="animals" data={data}/>
        </Layout>   
    )
}

export default Animals


export const getStaticProps = async () => {
    
    const data = await getCosmicData(bucket, "animals", "slug,title,metadata")
    return {props: { data }} 
}
  