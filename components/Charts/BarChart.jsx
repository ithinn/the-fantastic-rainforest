import React, {useState, useEffect} from 'react'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { useTheme } from "@material-ui/core/styles";

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}

const BarChart = ({ data }) => {
    const { colorArray } = useTheme()
    const [options, setOptions] = useState(null);

    
    useEffect(() => {
        const newOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: data.chart_heading
            },
            accessibility: {
                announceNewData: {
                    enabeled: true
                }
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                   text: data.yAxis 
                }
            },
            colors: colorArray,
            legend: {
                enabeled: false
            },
            series: [
                {
                    name: data.chart_explanation,
                    colorByPoint: true,
                    data: [...data.data]
                }
            ]
        };

        setOptions(newOptions);
    }, []);


    if (options === undefined) {
        return (<h2>Noe gikk galt, last siden på nytt</h2>)
    }

    return(
        <HighchartsReact
            containerProps={{style: {height: '100%', width: "100%"}}} //Responsitivity 
            highcharts={Highcharts}
            options={options}
        />
    )
}

export default BarChart;