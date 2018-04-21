import React, { Component } from 'react';
import './FinanceInfo.css';
import axios from 'axios';


class FinanceInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {oil:[],gold:[]};
        this.calculatePercentage = this.calculatePercentage.bind(this)
    }

    componentWillMount(){
        let date = new Date();
        date.setUTCDate(date.getMonth() - 1);
        date = date.toISOString();
        date = date.substring(0,date.indexOf('T'));
        axios.get("https://www.quandl.com/api/v3/datasets/OPEC/ORB.json?api_key=2KXtZBj4qLfGoFsNQ7zB&start_date=" + date)
            .then(res => {
                this.setState({oil:res.data.dataset.data});
            }).catch(this.setState({oil: null}));
        axios.get("https://www.quandl.com/api/v3/datasets/WGC/GOLD_DAILY_USD.json?api_key=2KXtZBj4qLfGoFsNQ7zB&start_date=" + date)
            .then(res => {
                this.setState({gold:res.data.dataset.data});
            }).catch(this.setState({gold: null}));
    }

    calculatePercentage(old,act){
        return (((act - old) / old) * 100).toFixed(2);
    }

    render() {
        let oil = 0;
        let oilPercentage = 0;
        const oilPercentageStyle = ["delta-indicator"];
        if(this.state.oil){
            oil = this.state.oil[0][1];
            oilPercentage = this.calculatePercentage(this.state.oil[1][1],this.state.oil[0][1]);
            if(this.state.oil[0][1] > this.state.oil[1][1]) {
                oilPercentageStyle.push("delta-positive");
            }else {
                oilPercentageStyle.push("delta-negative");
            }
        }

        let gold = 0;
        let goldPercentage = 0;
        const goldPercentageStyle = ["delta-indicator"];
        if(this.state.gold){
            gold = this.state.gold[0][1];
            goldPercentage = this.calculatePercentage(this.state.gold[1][1],this.state.gold[0][1]);
            if(this.state.gold[0][1] > this.state.gold[1][1]) {
                goldPercentageStyle.push("delta-positive");
            }else {
                goldPercentageStyle.push("delta-negative");
            }
        }


        return (
            <div className="col-sm-12 financeInfoContainer">
                <div className="statcard p-a-md financeCard">
                    <h3 className="statcard-number">
                        {oil}
                        <small className="delta-indicator delta-positive">5%</small>
                    </h3>
                    <span className="statcard-desc">USD/MXN</span>
                </div>
                <div className="statcard p-a-md financeCard">
                    <h3 className="statcard-number">
                        {gold}
                        <small className={goldPercentageStyle.join(" ")}>{goldPercentage}%</small>
                    </h3>
                    <span className="statcard-desc">Oro</span>
                </div>
                <div className="statcard p-a-md financeCard">
                    <h3 className="statcard-number">
                        {oil}
                        <small className={oilPercentageStyle.join(" ")}>{oilPercentage}%</small>
                    </h3>
                    <span className="statcard-desc">Petróleo</span>
                </div>
                <div className="statcard p-a-md financeCard">
                    <h3 className="statcard-number">
                        758
                        <small className="delta-indicator delta-negative">1.3%</small>
                    </h3>
                    <span className="statcard-desc">IPC</span>
                </div>
                <div className="statcard p-a-md financeCard">
                    <h3 className="statcard-number">
                        758
                        <small className="delta-indicator delta-negative">1.3%</small>
                    </h3>
                    <span className="statcard-desc">AC</span>
                </div>
                <div className="statcard p-a-md financeCard">
                    <h3 className="statcard-number">
                        758
                        <small className="delta-indicator delta-negative">1.3%</small>
                    </h3>
                    <span className="statcard-desc">ALFA</span>
                </div>
                <div className="statcard p-a-md financeCard">
                    <h3 className="statcard-number">
                        758
                        <small className="delta-indicator delta-negative">1.3%</small>
                    </h3>
                    <span className="statcard-desc">WALMART</span>
                </div>
                <div className="statcard p-a-md financeCard">
                    <h3 className="statcard-number">
                        758
                        <small className="delta-indicator delta-negative">1.3%</small>
                    </h3>
                    <span className="statcard-desc">AMX</span>
                </div>
                <div className="statcard p-a-md financeCard">
                    <h3 className="statcard-number">
                        758
                        <small className="delta-indicator delta-negative">1.3%</small>
                    </h3>
                    <span className="statcard-desc">FEMSA</span>
                </div>
                <div className="statcard p-a-md financeCard">
                    <h3 className="statcard-number">
                        758
                        <small className="delta-indicator delta-negative">1.3%</small>
                    </h3>
                    <span className="statcard-desc">KOF</span>
                </div>
                <div className="statcard p-a-md financeCard">
                    <h3 className="statcard-number">
                        758
                        <small className="delta-indicator delta-negative">1.3%</small>
                    </h3>
                    <span className="statcard-desc">ALSEA</span>
                </div>
                <div className="statcard p-a-md financeCard">
                    <h3 className="statcard-number">
                        758
                        <small className="delta-indicator delta-negative">1.3%</small>
                    </h3>
                    <span className="statcard-desc">BIMBO</span>
                </div>
                <div className="statcard p-a-md financeCard">
                    <h3 className="statcard-number">
                        758
                        <small className="delta-indicator delta-negative">1.3%</small>
                    </h3>
                    <span className="statcard-desc">LIVERPOOL</span>
                </div>
                <div className="statcard p-a-md financeCard">
                    <h3 className="statcard-number">
                        758
                        <small className="delta-indicator delta-negative">1.3%</small>
                    </h3>
                    <span className="statcard-desc">TELEVISA</span>
                </div>
            </div>
        );
    }

}

export default FinanceInfo;
