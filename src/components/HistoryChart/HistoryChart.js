import React, { Component } from 'react';
import './HistoryChart.css';
import { Chart } from 'react-google-charts';


class HistoryChart extends Component {

    render() {
        return (
           <div className="historyChart">
               <Chart

                   chartType="AreaChart"
                   data={[
                       ['Year', 'Sales', 'Expenses'],
                       ['2013',  1000,      400],
                       ['2014',  1170,      460],
                       ['2015',  660,       1120],
                       ['2016',  1030,      540]
                   ]}
                   options={{
                       colors:['#1ca8dd'],
                       backgroundColor: '#252830',
                       color:'#FFF',
                       is3D: true,
                       chartArea: {'width': '75%', 'height': '80%'},
                       titleTextStyle: { color: '#fff' },
                       hAxis: {
                           textStyle:{color: '#FFF'}
                       },
                       vAxis: {
                           textStyle:{color: '#FFF'}
                       },
                       legendTextStyle: {
                           color: "#FFFFFF"
                       },
                       legend:{
                           position: 'bottom'
                       }
                   }}
                   graph_id="ScatterChart"
                   width="100%"
                   height="400px"
                   legend_toggle

               />
           </div>
        );
    }

}

export default HistoryChart;
