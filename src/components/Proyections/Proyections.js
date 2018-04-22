import React, { Component } from 'react';
import './Proyections.css';
import axios from "axios/index";


class Proyections extends Component {

    constructor(props) {
        super(props);
        this.state = {siglas: "ME",period: "one-week", stock:[],  apiKey:"http://192.168.1.123:3500/api", predictions:null};
        this.calculatePercentage = this.calculatePercentage.bind(this);
    }

    componentWillMount(){
        this.getStock();
        this.getPrediction();
    }

    componentWillReceiveProps(nextProps){
        this.setState({siglas:nextProps.siglas}, () => {
                this.getStock();
                this.getPrediction();
        });

    }

    calculatePercentage(old,act){
        return (((act - old) / old) * 100).toFixed(2);
    }


    getPrediction(){
        if(this.state.siglas === 'ME'){
            this.setState({siglas: 'IPC'});
        }
        axios.get(this.state.apiKey + "/predictions?index=" + this.state.siglas)
            .then(res => {
                this.setState({predictions:res.data});
                console.log(res.data);
            }).catch(this.setState({predictions: null}));


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
        let day = 0;
        let dayPercentage = 0;
        const dayPercentageStyle = ["label"];
        let day7 = 0;
        let day7Percentage = 0;
        const day7PercentageStyle = ["label"];
        let day14 = 0;
        let day14Percentage = 0;
        const day14PercentageStyle = ["label"];
        let month = 0;
        let monthPercentage = 0;
        const monthPercentageStyle = ["label"];

        let predictions = null;
        if(this.state.predictions && this.state.stock){
            predictions = this.state.predictions;
            //--------------1 day----------------
            day = predictions.random.pred_1;
            dayPercentage = this.calculatePercentage(this.state.stock[this.state.stock.length-1][1],day);
            if(day > this.state.stock[this.state.stock.length-1][1]) {
                dayPercentageStyle.push("label-success");
            }else {
                dayPercentageStyle.push("label-danger");
            }
            //--------------7 day----------------
            day7 = predictions.random.pred_7;
            day7Percentage = this.calculatePercentage(this.state.stock[this.state.stock.length-1][1],day7);
            if(day7 > this.state.stock[this.state.stock.length-1][1]) {
                day7PercentageStyle.push("label-success");
            }else {
                day7PercentageStyle.push("label-danger");
            }
            //--------------14 days----------------
            day14 = predictions.random.pred_14;
            day14Percentage = this.calculatePercentage(this.state.stock[this.state.stock.length-1][1],day14);
            if(day14 > this.state.stock[this.state.stock.length-1][1]) {
                day14PercentageStyle.push("label-success");
            }else {
                day14PercentageStyle.push("label-danger");
            }
            //--------------month----------------
            month = predictions.random.pred_30;
            monthPercentage = this.calculatePercentage(this.state.stock[this.state.stock.length-1][1], month);
            if(month > this.state.stock[this.state.stock.length-1][1]) {
                monthPercentageStyle.push("label-success");
            }else {
                monthPercentageStyle.push("label-danger");
            }
        }else{
            predictions = {
                "company": "",
                "linear": {
                    "pred_1": 0,
                    "pred_7": 0,
                    "pred_14": 0,
                    "pred_30": 0
                },
                "random": {
                    "pred_1": 0,
                    "pred_7": 0,
                    "pred_14": 0,
                    "pred_30": 0
                }
            };
        }
        return (
            <div className="row statcards">
                <div className="col-sm-6 col-md-3 m-b">
                    <div className="statcard">
                        <div className="p-a">
                            <span className="statcard-desc">Final del día</span>
                            <h2 className="statcard-number">
                                {predictions.random.pred_1.toFixed(2)}
                                <small className={dayPercentageStyle.join(" ")}>{dayPercentage}%</small>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 m-b">
                    <div className="statcard">
                        <div className="p-a">
                            <span className="statcard-desc">7 días</span>
                            <h2 className="statcard-number">
                                {predictions.random.pred_7.toFixed(2)}
                                <small className={day7PercentageStyle.join(" ")}>{day7Percentage}%</small>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 m-b">
                    <div className="statcard">
                        <div className="p-a">
                            <span className="statcard-desc">14 días</span>
                            <h2 className="statcard-number">
                                {predictions.random.pred_14.toFixed(2)}
                                <small className={day14PercentageStyle.join(" ")}>{day14Percentage}%</small>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 m-b">
                    <div className="statcard">
                        <div className="p-a">
                            <span className="statcard-desc">1 mes</span>
                            <h2 className="statcard-number">
                                {predictions.random.pred_30.toFixed(2)}
                                <small className={monthPercentageStyle.join(" ")}>{monthPercentage}%</small>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Proyections;
