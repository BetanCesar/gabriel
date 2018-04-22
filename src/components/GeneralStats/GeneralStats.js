import React, { Component } from 'react';
import './GeneralStats.css';
import { Chart } from 'react-google-charts';
import axios from 'axios';


class GeneralStats extends Component {
    constructor(props) {
        super(props);
        this.state = {oil:[],gold:[], usd:[], ipc:[], apiKey:"http://localhost:3500/api"};
        this.calculatePercentage = this.calculatePercentage.bind(this);
    }

    componentWillMount(){

        //-----------Oil-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-month&index=oil")
            .then(res => {
                this.setState({oil:res.data});
            }).catch(this.setState({oil: null}));
        //-----------Gold-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-month&index=gold")
            .then(res => {
                this.setState({gold:res.data});
            }).catch(this.setState({gold: null}));
        //-----------USDMXN-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-month&index=USDMXN")
            .then(res => {
                this.setState({usd:res.data});
            }).catch(this.setState({usd: null}));
        //-----------IPC-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-month&index=IPC")
            .then(res => {
                this.setState({ipc:res.data});
            }).catch(this.setState({ipc: null}));

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
            oilData =[['Day', 'Value'], ...oilData];
            oil = this.state.oil[this.state.oil.length-1][1];
            oilPercentage = this.calculatePercentage(this.state.oil[this.state.oil.length-2][1],this.state.oil[this.state.oil.length-1][1]);
            if(this.state.oil[this.state.oil.length-1][1] > this.state.oil[this.state.oil.length-2][1]) {
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
            goldData =[['Day', 'Value'], ...goldData];
            gold = this.state.gold[this.state.gold.length-1][1];
            goldPercentage = this.calculatePercentage(this.state.gold[this.state.gold.length-2][1],this.state.gold[this.state.gold.length-1][1]);
            if(this.state.gold[this.state.gold.length-1][1] > this.state.gold[this.state.gold.length-2][1]) {
                goldPercentageStyle.push("label-success");
            }else {
                goldPercentageStyle.push("label-danger");
            }
        }

        //--------------usd----------------
        let usd = 0;
        let usdPercentage = 0;
        const usdPercentageStyle = ["label"];
        let usdData = [];
        if(this.state.usd){
            this.state.usd.forEach(function(usd) {
                usdData.push(usd);
            });
            usdData =[['Day', 'Value'], ...usdData];
            usd = this.state.usd[this.state.usd.length-1][1];
            usdPercentage = this.calculatePercentage(this.state.usd[this.state.usd.length-2][1],this.state.usd[this.state.usd.length-1][1]);
            if(this.state.usd[this.state.usd.length-1][1] > this.state.usd[this.state.usd.length-2][1]) {
                usdPercentageStyle.push("label-success");
            }else {
                usdPercentageStyle.push("label-danger");
            }
        }

        //--------------IPC----------------
        let ipc = 0;
        let ipcPercentage = 0;
        const ipcPercentageStyle = ["label"];
        let ipcData = [];
        if(this.state.ipc){
            this.state.ipc.forEach(function(ipc) {
                ipcData.push(ipc);
            });
            ipcData =[['Day', 'Value'], ...ipcData];
            ipc = this.state.ipc[this.state.ipc.length-1][1];
            ipcPercentage = this.calculatePercentage(this.state.ipc[this.state.ipc.length-2][1],this.state.ipc[this.state.ipc.length-1][1]);
            if(this.state.ipc[this.state.ipc.length-1][1] > this.state.ipc[this.state.ipc.length-2][1]) {
                ipcPercentageStyle.push("label-success");
            }else {
                ipcPercentageStyle.push("label-danger");
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
                                graph_id="GoldMini"
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
                                graph_id="OilMini"
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
                                    {usd}
                                    <small className={usdPercentageStyle.join(" ")}>{usdPercentage}%</small>
                                </h2>
                            </div>
                            <Chart

                                chartType="AreaChart"
                                data={usdData}
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
                                graph_id="USDMini"
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
                                    {ipc}
                                    <small className={ipcPercentageStyle.join(" ")}>{ipcPercentage}%</small>
                                </h2>
                            </div>
                            <Chart

                                chartType="AreaChart"
                                data={ipcData}
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
                                graph_id="IPCMini"
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
