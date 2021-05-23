import { Box } from "reflexbox"
import BarChart from "./../Charts/BarChart"
import PieChart from "./../Charts/PieChart";
import MapChart from "./../Charts/MapChart";


const Media = ({ data }) => {
    
    return(
        <Box>
            {data.charttype === "bar" ? 
                <BarChart data={data}/>
            : 
                data.charttype === "pie" ? 
                <PieChart data={data}/>
            : <MapChart mapStyle={data.map_style}/>
            }
        </Box>
    )
}

export default Media;

