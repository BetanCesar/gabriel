import React, { Component } from 'react';
import './HistoryChart.css';
import { Chart } from 'react-google-charts';
import axios from "axios/index";


class HistoryChart extends Component {

    constructor(props) {
        super(props);
        this.state = {siglas: "ME", period: "one-week", stock:[], apiKey:"http://192.168.1.123:3500/api"};

    }

    componentWillMount(){
        console.log(this.props.siglas);
        this.setState({siglas:this.props.siglas});
        this.setState({period:this.props.period});
        this.getStock();
    }

    componentWillReceiveProps(){
        console.log(this.props.siglas);
        this.setState({siglas:this.props.siglas});
        this.setState({period:this.props.period});
        this.getStock();
    }


    getStock(){
        if(this.state.siglas === 'ME'){
            this.setState({siglas: 'IPC'});
        }
        axios.get(this.state.apiKey + "/getIndex?time=" + this.state.period + "&index=" + this.state.siglas)
            .then(res => {
                this.setState({stock:res.data});
            }).catch(this.setState({stock: null}));
    }

    render() {
        let stockData = [];
        if(this.state.stock){
            //console.log(this.state.siglas);
            this.state.stock.forEach(function(stock) {
                stockData.push(stock);
            });
            stockData =[['Day', this.state.siglas], ...stockData];
        }

        return (
           <div className="historyChart">
               <Chart
                   chartType="AreaChart"
                   data={stockData}
                   options={{
                       colors:['#1ca8dd'],
                       backgroundColor: '#252830',
                       color:'#FFF',
                       is3D: true,
                       chartArea: {'width': '85%', 'height': '90%'},
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
                   graph_id={this.state.siglas}
                   width="100%"
                   height="500px"
                   legend_toggle
               />
           </div>
        );
    }

}

export default HistoryChart;
