import React, {useRef} from 'react';
const ReactHighcharts = require('react-highcharts');


function getConfig(data){
    return {
        title: {
            text: 'Random Data'
        },
        xAxis: {
            type: 'datetime',
            categories: data.map(a => new Date(a.timestamp)),
            title: {
                text: 'Timestamps'
            },
            labels:{
                align: 'right',
                rotation: -30,
                format: '{value: %m-%d %H:%M:%S}',
            }
        },
        yAxis: {
            title: {
                text: 'Values'
            }
        },
        series: [
            {
                data: data.map(a => a.value)
            }
        ]
    };
}

export default function Visualizer(props){
    const refChart = useRef(null);
    const config = getConfig(props.data);
    return (
        <ReactHighcharts config={config} ref={refChart}></ReactHighcharts>
    );
}