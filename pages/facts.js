import Layout from "../components/Layout";
import { getCosmicData, bucket } from "../src/helpers/dataHelpers";
import LandingPageContainer from "../containers/LandingPageContainer";

const Facts = ({ data }) => {
    return(
        <Layout facts>
            <LandingPageContainer page="facts" data={data}/>
        </Layout>   
    )
}

export default Facts;

export const getStaticProps = async () => {
    
    const data = await getCosmicData(bucket, "factarticles", "slug,title,metadata")
    return {props: { data }} 

}
  