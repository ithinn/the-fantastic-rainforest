import Layout from "../components/Layout";
import Head from "next/head";
import { getCosmicData, bucket } from "../src/helpers/dataHelpers";
import MapContainer from "../containers/MapContainer";

const Maps = ({ data }) => {

    return(
        <Layout page="maps">
            <Head>
                <title>Kart over regnskogen</title>
                <meta name="description" content="Informative kart som viser hvor det fins regnskog i dag, og grunnene til at regnskogen blir borte."/>
            </Head>

            <MapContainer page="maps" data={data}/>
        </Layout>   
    )
}

export default Maps;


export const getStaticProps = async () => {
    
    const data = await getCosmicData(bucket, "maps", "slug,title,metadata")
    return {props: { data }} 

}