import React, {useState, useEffect} from 'react'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { useTheme } from "@material-ui/core/styles"

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}

const PieChart = ({ data }) => {
    const [options, setOptions] = useState(null);
    const { colorArray } = useTheme();

    useEffect(() => {
        const newOptions = {
            chart: {
                type: "pie"
            },
            title: {
                text: data.chart_heading
            },
            colors: colorArray,
            accessibility: {
                point: {
                    valueSuffix: "%"
                }
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [
                {
                    name: data.chart_explanation,
                    colorByPoint: true,
                    data: [...data.data]
                }
            ],

        }
        
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
            aria-label={data.image_alt}
        />
    )
}

export default PieChart;