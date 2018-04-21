import React, { Component } from 'react';
import './FinanceInfo.css';
import axios from 'axios';
import googleFinance from 'google-finance';


class FinanceInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {oil:[],gold:[], usd:[], ipc:[],ac:[], alfa:[], walmart:[], amx:[], femsa:[], kof:[], alsea:[],
            bimbo:[], liverpool:[], televisa:[] };
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
        //-----------USDMXN-------------

    }

    calculatePercentage(old,act){
        return (((act - old) / old) * 100).toFixed(2);
    }

    render() {
        //--------------OIL----------------
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
        //--------------GOLD----------------
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

        //--------------USDMXN----------------
        /*let usd = 0;
        let usdPercentage = 0;
        const usdPercentageStyle = ["delta-indicator"];
        if(this.state.usd){
            usd = this.state.usd[0][1];
            usdPercentage = this.calculatePercentage(this.state.usd[1][1],this.state.usd[0][1]);
            if(this.state.usd[0][1] > this.state.usd[1][1]) {
                usdPercentageStyle.push("delta-positive");
            }else {
                usdPercentageStyle.push("delta-negative");
            }
        }*/

        //--------------IPC----------------
        /*let ipc = 0;
        let ipcPercentage = 0;
        const ipcPercentageStyle = ["delta-indicator"];
        if(this.state.ipc){
            ipc = this.state.ipc[0][1];
            ipcPercentage = this.calculatePercentage(this.state.ipc[1][1],this.state.ipc[0][1]);
            if(this.state.ipc[0][1] > this.state.ipc[1][1]) {
                ipcPercentageStyle.push("delta-positive");
            }else {
                ipcPercentageStyle.push("delta-negative");
            }
        }*/
        //--------------AC----------------
        /*let ac = 0;
        let acPercentage = 0;
        const acPercentageStyle = ["delta-indicator"];
        if(this.state.ac){
            ac = this.state.ac[0][1];
            acPercentage = this.calculatePercentage(this.state.ac[1][1],this.state.ac[0][1]);
            if(this.state.ac[0][1] > this.state.ac[1][1]) {
                acPercentageStyle.push("delta-positive");
            }else {
                acPercentageStyle.push("delta-negative");
            }
        }*/
        //--------------ALFA----------------
        /*let alfa = 0;
        let alfaPercentage = 0;
        const alfaPercentageStyle = ["delta-indicator"];
        if(this.state.alfa){
            alfa = this.state.alfa[0][1];
            alfaPercentage = this.calculatePercentage(this.state.alfa[1][1],this.state.alfa[0][1]);
            if(this.state.alfa[0][1] > this.state.alfa[1][1]) {
                alfaPercentageStyle.push("delta-positive");
            }else {
                alfaPercentageStyle.push("delta-negative");
            }
        }*/
        //--------------Walmart----------------
        /*let walmart = 0;
        let walmartPercentage = 0;
        const walmartPercentageStyle = ["delta-indicator"];
        if(this.state.walmart){
            walmart = this.state.walmart[0][1];
            walmartPercentage = this.calculatePercentage(this.state.walmart[1][1],this.state.walmart[0][1]);
            if(this.state.walmart[0][1] > this.state.walmart[1][1]) {
                walmartPercentageStyle.push("delta-positive");
            }else {
                walmartPercentageStyle.push("delta-negative");
            }
        }*/
        //--------------AMX----------------
        /*let amx = 0;
        let amxPercentage = 0;
        const amxPercentageStyle = ["delta-indicator"];
        if(this.state.amx){
            amx = this.state.amx[0][1];
            amxPercentage = this.calculatePercentage(this.state.amx[1][1],this.state.amx[0][1]);
            if(this.state.amx[0][1] > this.state.amx[1][1]) {
                amxPercentageStyle.push("delta-positive");
            }else {
                amxPercentageStyle.push("delta-negative");
            }
        }*/
        //--------------FEMSA----------------
        /*let femsa = 0;
        let femsaPercentage = 0;
        const femsaPercentageStyle = ["delta-indicator"];
        if(this.state.femsa){
            femsa = this.state.femsa[0][1];
            femsaPercentage = this.calculatePercentage(this.state.femsa[1][1],this.state.femsa[0][1]);
            if(this.state.femsa[0][1] > this.state.femsa[1][1]) {
                femsaPercentageStyle.push("delta-positive");
            }else {
                femsaPercentageStyle.push("delta-negative");
            }
        }*/
        //--------------KOF----------------
        /*let kof = 0;
        let kofPercentage = 0;
        const kofPercentageStyle = ["delta-indicator"];
        if(this.state.kof){
            kof = this.state.kof[0][1];
            kofPercentage = this.calculatePercentage(this.state.kof[1][1],this.state.kof[0][1]);
            if(this.state.kof[0][1] > this.state.kof[1][1]) {
                kofPercentageStyle.push("delta-positive");
            }else {
                kofPercentageStyle.push("delta-negative");
            }
        }*/
        //--------------ALSEA----------------
        /*let alsea = 0;
        let alseaPercentage = 0;
        const alseaPercentageStyle = ["delta-indicator"];
        if(this.state.alsea){
            alsea = this.state.alsea[0][1];
            alseaPercentage = this.calculatePercentage(this.state.alsea[1][1],this.state.alsea[0][1]);
            if(this.state.alsea[0][1] > this.state.alsea[1][1]) {
                alseaPercentageStyle.push("delta-positive");
            }else {
                alseaPercentageStyle.push("delta-negative");
            }
        }*/
        //--------------BIMBO----------------
        /*let bimbo = 0;
        let bimboPercentage = 0;
        const bimboPercentageStyle = ["delta-indicator"];
        if(this.state.bimbo){
            bimbo = this.state.bimbo[0][1];
            bimboPercentage = this.calculatePercentage(this.state.bimbo[1][1],this.state.bimbo[0][1]);
            if(this.state.bimbo[0][1] > this.state.bimbo[1][1]) {
                bimboPercentageStyle.push("delta-positive");
            }else {
                bimboPercentageStyle.push("delta-negative");
            }
        }*/
        //--------------liverpool----------------
        /*let liverpool = 0;
        let liverpoolPercentage = 0;
        const liverpoolPercentageStyle = ["delta-indicator"];
        if(this.state.liverpool){
            liverpool = this.state.liverpool[0][1];
            liverpoolPercentage = this.calculatePercentage(this.state.liverpool[1][1],this.state.liverpool[0][1]);
            if(this.state.liverpool[0][1] > this.state.liverpool[1][1]) {
                liverpoolPercentageStyle.push("delta-positive");
            }else {
                liverpoolPercentageStyle.push("delta-negative");
            }
        }*/
        //--------------televisa----------------
        /*let televisa = 0;
        let televisaPercentage = 0;
        const televisaPercentageStyle = ["delta-indicator"];
        if(this.state.televisa){
            televisa = this.state.televisa[0][1];
            televisaPercentage = this.calculatePercentage(this.state.televisa[1][1],this.state.televisa[0][1]);
            if(this.state.televisa[0][1] > this.state.televisa[1][1]) {
                televisaPercentageStyle.push("delta-positive");
            }else {
                televisaPercentageStyle.push("delta-negative");
            }
        }*/




        return (
            <div className="col-sm-12 financeInfoContainer">
                <div className="marqueeDiv">
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

            </div>
        );
    }

}

export default FinanceInfo;
