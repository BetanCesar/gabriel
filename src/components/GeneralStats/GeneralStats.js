import React, { Component } from 'react';
import './GeneralStats.css';
import { Chart } from 'react-google-charts';


class GeneralStats extends Component {

    render() {
        return (
            <div>
                <div className="row statcards">
                    <div className="col-sm-6 col-md-3 m-b">
                        <div className="statcard">
                            <div className="p-a">
                                <span className="statcard-desc">Oro</span>
                                <h2 className="statcard-number">
                                    12,938
                                    <small className="label label-success">5%</small>
                                </h2>
                            </div>
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
                                    chartArea: {'width': '100%', 'height': '100%'},
                                    titleTextStyle: { color: '#fff' },
                                    hAxis: {
                                        textStyle:{color: '#FFF'},
                                        gridlines: {
                                            color: 'transparent'
                                        },
                                    },
                                    vAxis: {
                                        textStyle:{color: '#FFF'},
                                        gridlines: {
                                            color: 'transparent'
                                        },
                                    },
                                    legendTextStyle: {
                                        color: "#FFFFFF"
                                    },
                                    legend:{
                                        position: 'bottom'
                                    }
                                }}
                                graph_id="Gold"
                                width="100%"
                                height="200px"
                                legend_toggle

                            />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 m-b">
                        <div className="statcard">
                            <div className="p-a">
                                <span className="statcard-desc">Petróleo</span>
                                <h2 className="statcard-number">
                                    758
                                    <small className="label label-danger">1.3%</small>
                                </h2>
                            </div>
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
                                    chartArea: {'width': '100%', 'height': '100%'},
                                    titleTextStyle: { color: '#fff' },
                                    hAxis: {
                                        textStyle:{color: '#FFF'},
                                        gridlines: {
                                            color: 'transparent'
                                        },
                                    },
                                    vAxis: {
                                        textStyle:{color: '#FFF'},
                                        gridlines: {
                                            color: 'transparent'
                                        },
                                    },
                                    legendTextStyle: {
                                        color: "#FFFFFF"
                                    },
                                    legend:{
                                        position: 'bottom'
                                    }
                                }}
                                graph_id="Oil"
                                width="100%"
                                height="200px"
                                legend_toggle

                            />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 m-b">
                        <div className="statcard">
                            <div className="p-a">
                                <span className="statcard-desc">USDMXN</span>
                                <h2 className="statcard-number">
                                    1,293
                                    <small className="label label-success">6.75%</small>
                                </h2>
                            </div>
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
                                    chartArea: {'width': '100%', 'height': '100%'},
                                    titleTextStyle: { color: '#fff' },
                                    hAxis: {
                                        textStyle:{color: '#FFF'},
                                        gridlines: {
                                            color: 'transparent'
                                        },
                                    },
                                    vAxis: {
                                        textStyle:{color: '#FFF'},
                                        gridlines: {
                                            color: 'transparent'
                                        },
                                    },
                                    legendTextStyle: {
                                        color: "#FFFFFF"
                                    },
                                    legend:{
                                        position: 'bottom'
                                    }
                                }}
                                graph_id="USD"
                                width="100%"
                                height="200px"
                                legend_toggle

                            />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 m-b">
                        <div className="statcard">
                            <div className="p-a">
                                <span className="statcard-desc">IPC</span>
                                <h2 className="statcard-number">
                                    758
                                    <small className="label label-success">1.3%</small>
                                </h2>
                            </div>
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
                                    chartArea: {'width': '100%', 'height': '100%'},
                                    titleTextStyle: { color: '#fff' },
                                    hAxis: {
                                        textStyle:{color: '#FFF'},
                                        gridlines: {
                                            color: 'transparent'
                                        },
                                    },
                                    vAxis: {
                                        textStyle:{color: '#FFF'},
                                        gridlines: {
                                            color: 'transparent'
                                        },
                                    },
                                    legendTextStyle: {
                                        color: "#FFFFFF"
                                    },
                                    legend: 'none'
                                }}
                                graph_id="IPC"
                                width="100%"
                                height="200px"


                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default GeneralStats;
