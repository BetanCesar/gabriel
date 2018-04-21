import React, { Component } from 'react';
import './GeneralStats.css';
import { Chart } from 'react-google-charts';
import axios from 'axios';


class GeneralStats extends Component {
    constructor(props) {
        super(props);
        this.state = {oil:[],gold:[], usd:[], ipc:[]};
        this.calculatePercentage = this.calculatePercentage.bind(this)
    }

    componentWillMount(){
        const actDate = new Date().toISOString();
        let date = new Date();
        date.setUTCDate(date.getMonth() - 1);
        date = date.toISOString();
        date = date.substring(0,date.indexOf('T'));
        //-----------Oil-------------
        axios.get("https://www.quandl.com/api/v3/datasets/OPEC/ORB.json?api_key=2KXtZBj4qLfGoFsNQ7zB&start_date=" + date)
            .then(res => {
                this.setState({oil:res.data.dataset.data});
            }).catch(this.setState({oil: null}));
        //-----------Gold-------------
        axios.get("https://www.quandl.com/api/v3/datasets/WGC/GOLD_DAILY_USD.json?api_key=2KXtZBj4qLfGoFsNQ7zB&start_date=" + date)
            .then(res => {
                this.setState({gold:res.data.dataset.data});
            }).catch(this.setState({gold: null}));

    }

    calculatePercentage(old,act){
        return (((act - old) / old) * 100).toFixed(2);
    }

    render() {
        //--------------OIL----------------
        let oil = 0;
        let oilPercentage = 0;
        const oilPercentageStyle = ["label"];
        let oilData = [];
        if(this.state.oil){
            this.state.oil.forEach(function(oil) {
                oilData.push(oil);
            });
            oilData = oilData.reverse();
            oilData =[['Day', 'Value'], ...oilData];
            oil = this.state.oil[0][1];
            oilPercentage = this.calculatePercentage(this.state.oil[1][1],this.state.oil[0][1]);
            if(this.state.oil[0][1] > this.state.oil[1][1]) {
                oilPercentageStyle.push("label-success");
            }else {
                oilPercentageStyle.push("label-danger");
            }
        }
        //--------------GOLD----------------
        let gold = 0;
        let goldPercentage = 0;
        const goldPercentageStyle = ["label"];
        let goldData = [];
        if(this.state.gold){
            this.state.gold.forEach(function(gold) {
                goldData.push(gold);
            });
            goldData = goldData.reverse();
            goldData =[['Day', 'Value'], ...goldData];
            gold = this.state.gold[0][1];
            goldPercentage = this.calculatePercentage(this.state.gold[1][1],this.state.gold[0][1]);
            if(this.state.gold[0][1] > this.state.gold[1][1]) {
                goldPercentageStyle.push("label-success");
            }else {
                goldPercentageStyle.push("label-danger");
            }
        }
        return (
            <div>
                <div className="row statcards">
                    <div className="col-sm-6 col-md-3 m-b">
                        <div className="statcard">
                            <div className="p-a">
                                <span className="statcard-desc">Oro</span>
                                <h2 className="statcard-number">
                                    {gold}
                                    <small className={goldPercentageStyle.join(" ")}>{goldPercentage}%</small>
                                </h2>
                            </div>
                            <Chart

                                chartType="AreaChart"
                                data={goldData}
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
                                    {oil}
                                    <small className={oilPercentageStyle.join(" ")}>{oilPercentage}%</small>
                                </h2>
                            </div>
                            <Chart

                                chartType="AreaChart"
                                data={oilData}
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
