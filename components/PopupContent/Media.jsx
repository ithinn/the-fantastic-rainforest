import { Box } from "reflexbox"
import BarChart from "./../Charts/BarChart"
import PieChart from "./../Charts/PieChart";
import MapChart from "./../Charts/MapChart";


const Media = ({ data }) => {
    
    return(
        <>
            {data.charttype === "bar" ? 
                <BarChart data={data}/>
            : 
                data.charttype === "pie" ? 
                <PieChart data={data}/>
            : <MapChart ariaLabel={data.image_alt} data={data}/>
            }   
        </>
    )
}

export default Media;

