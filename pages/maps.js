import Layout from "../components/Layout";
import { getCosmicData, bucket } from "../src/helpers/dataHelpers";
import MapContainer from "../containers/MapContainer";

const Maps = ({ data }) => {

    return(
        <Layout maps>
            <MapContainer page="maps" data={data}/>
        </Layout>   
    )
}

export default Maps;


export const getStaticProps = async () => {
    
    const data = await getCosmicData(bucket, "maps", "slug,title,metadata")
    return {props: { data }} 

}