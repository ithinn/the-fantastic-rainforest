import Layout from "../components/Layout";
import LandingPageContainer from "../containers/LandingPageContainer";
import { getCosmicData, bucket } from "../src/helpers/dataHelpers";

const Games = ({ data }) => {
    return(
        <Layout games>
            <LandingPageContainer page="games" data={data}/>
        </Layout>   
    )
}

export default Games;

export const getStaticProps = async () => {
    
    const data = await getCosmicData(bucket, "games", "slug,title,metadata")
    return {props: { data }} 

}