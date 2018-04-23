import React, { Component } from 'react';
import './FinanceInfo.css';
import axios from 'axios';


class FinanceInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {oil:[],gold:[], usd:[], ipc:[],ac:[], alfa:[], walmart:[], amx:[], femsa:[], kof:[], alsea:[],
            bimbo:[], liverpool:[], televisa:[], apiKey:"http://35.192.128.159/api"};
        this.calculatePercentage = this.calculatePercentage.bind(this)
    }

    componentWillMount(){
        //-----------Oil-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-week&index=oil")
            .then(res => {
                this.setState({oil:res.data});
            }).catch(this.setState({oil: null}));
        //-----------Gold-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-week&index=gold")
            .then(res => {
                this.setState({gold:res.data});
            }).catch(this.setState({gold: null}));
        //-----------USDMXN-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-week&index=USDMXN")
            .then(res => {
                this.setState({usd:res.data});
            }).catch(this.setState({usd: null}));
        //-----------IPC-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-week&index=IPC")
            .then(res => {
                this.setState({ipc:res.data});
            }).catch(this.setState({ipc: null}));
        //-----------AC-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-week&index=AC")
            .then(res => {
                this.setState({ac:res.data});
            }).catch(this.setState({ac: null}));
        //-----------ALFA-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-week&index=ALFAA")
            .then(res => {
                this.setState({alfa:res.data});
            }).catch(this.setState({alfa: null}));
        //-----------WALMART-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-week&index=WALMEX")
            .then(res => {
                this.setState({walmart:res.data});
            }).catch(this.setState({walmart: null}));
        //-----------AMX-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-week&index=AMXL")
            .then(res => {
                this.setState({amx:res.data});
            }).catch(this.setState({amx: null}));
        //-----------FEMSA-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-week&index=FEMSAUBD")
            .then(res => {
                this.setState({femsa:res.data});
            }).catch(this.setState({femsa: null}));
        //-----------KOF-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-week&index=KOFL")
            .then(res => {
                this.setState({kof:res.data});
            }).catch(this.setState({kof: null}));
        //-----------ALSEA-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-week&index=ALSEA")
            .then(res => {
                this.setState({alsea:res.data});
            }).catch(this.setState({alsea: null}));
        //-----------BIMBO-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-week&index=BIMBOA")
            .then(res => {
                this.setState({bimbo:res.data});
            }).catch(this.setState({bimbo: null}));
        //-----------LIVERPOOL-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-week&index=LIVEPOLC-1")
            .then(res => {
                this.setState({liverpool:res.data});
            }).catch(this.setState({liverpool: null}));
        //-----------TELEVISA-------------
        axios.get(this.state.apiKey + "/getIndex?time=one-week&index=TLEVISACPO")
            .then(res => {
                this.setState({televisa:res.data});
            }).catch(this.setState({televisa: null}));


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
            oil = this.state.oil[this.state.oil.length-1][1];
            oilPercentage = this.calculatePercentage(this.state.oil[this.state.oil.length-2][1],this.state.oil[this.state.oil.length-1][1]);
            if(this.state.oil[this.state.oil.length-1][1] > this.state.oil[this.state.oil.length-2][1]) {
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
            gold = this.state.gold[this.state.gold.length-1][1];
            goldPercentage = this.calculatePercentage(this.state.gold[this.state.gold.length-2][1],this.state.gold[this.state.gold.length-1][1]);
            if(this.state.gold[this.state.gold.length-1][1] > this.state.gold[this.state.gold.length-2][1]) {
                goldPercentageStyle.push("delta-positive");
            }else {
                goldPercentageStyle.push("delta-negative");
            }
        }

        //--------------USDMXN----------------
        let usd = 0;
        let usdPercentage = 0;
        const usdPercentageStyle = ["delta-indicator"];
        if(this.state.usd){
            usd = this.state.usd[this.state.usd.length-1][1];
            usdPercentage = this.calculatePercentage(this.state.usd[this.state.usd.length-2][1],this.state.usd[this.state.usd.length-1][1]);
            if(this.state.usd[this.state.usd.length-1][1] > this.state.usd[this.state.usd.length-2][1]) {
                usdPercentageStyle.push("delta-positive");
            }else {
                usdPercentageStyle.push("delta-negative");
            }
        }

        //--------------IPC----------------
        let ipc = 0;
        let ipcPercentage = 0;
        const ipcPercentageStyle = ["delta-indicator"];
        if(this.state.ipc){
            ipc = this.state.ipc[this.state.ipc.length-1][1];
            ipcPercentage = this.calculatePercentage(this.state.ipc[this.state.ipc.length-2][1],this.state.ipc[this.state.ipc.length-1][1]);
            if(this.state.ipc[this.state.ipc.length-1][1] > this.state.ipc[this.state.ipc.length-2][1]) {
                ipcPercentageStyle.push("delta-positive");
            }else {
                ipcPercentageStyle.push("delta-negative");
            }
        }
        //--------------AC----------------
        let ac = 0;
        let acPercentage = 0;
        const acPercentageStyle = ["delta-indicator"];
        if(this.state.ac){
            ac = this.state.ac[this.state.ac.length-1][1];
            acPercentage = this.calculatePercentage(this.state.ac[this.state.ac.length-2][1],this.state.ac[this.state.ac.length-1][1]);
            if(this.state.ac[this.state.ac.length-1][1] > this.state.ac[this.state.ac.length-2][1]) {
                acPercentageStyle.push("delta-positive");
            }else {
                acPercentageStyle.push("delta-negative");
            }
        }
        //--------------ALFA----------------
        let alfa = 0;
        let alfaPercentage = 0;
        const alfaPercentageStyle = ["delta-indicator"];
        if(this.state.alfa){
            alfa = this.state.alfa[this.state.alfa.length-1][1];
            alfaPercentage = this.calculatePercentage(this.state.alfa[this.state.alfa.length-2][1],this.state.alfa[this.state.alfa.length-1][1]);
            if(this.state.alfa[this.state.alfa.length-1][1] > this.state.alfa[this.state.alfa.length-2][1]) {
                alfaPercentageStyle.push("delta-positive");
            }else {
                alfaPercentageStyle.push("delta-negative");
            }
        }
        //--------------Walmart----------------
        let walmart = 0;
        let walmartPercentage = 0;
        const walmartPercentageStyle = ["delta-indicator"];
        if(this.state.walmart){
            walmart = this.state.walmart[this.state.walmart.length-1][1];
            walmartPercentage = this.calculatePercentage(this.state.walmart[this.state.walmart.length-2][1],this.state.walmart[this.state.walmart.length-1][1]);
            if(this.state.walmart[this.state.walmart.length-1][1] > this.state.walmart[this.state.walmart.length-2][1]) {
                walmartPercentageStyle.push("delta-positive");
            }else {
                walmartPercentageStyle.push("delta-negative");
            }
        }
        //--------------AMX----------------
        let amx = 0;
        let amxPercentage = 0;
        const amxPercentageStyle = ["delta-indicator"];
        if(this.state.amx){
            amx = this.state.amx[this.state.amx.length-1][1];
            amxPercentage = this.calculatePercentage(this.state.amx[this.state.amx.length-2][1],this.state.amx[this.state.amx.length-1][1]);
            if(this.state.amx[this.state.amx.length-1][1] > this.state.amx[this.state.amx.length-2][1]) {
                amxPercentageStyle.push("delta-positive");
            }else {
                amxPercentageStyle.push("delta-negative");
            }
        }
        //--------------FEMSA----------------
        let femsa = 0;
        let femsaPercentage = 0;
        const femsaPercentageStyle = ["delta-indicator"];
        if(this.state.femsa){
            femsa = this.state.femsa[this.state.femsa.length-1][1];
            femsaPercentage = this.calculatePercentage(this.state.femsa[this.state.femsa.length-2][1],this.state.femsa[this.state.femsa.length-1][1]);
            if(this.state.femsa[this.state.femsa.length-1][1] > this.state.femsa[this.state.femsa.length-2][1]) {
                femsaPercentageStyle.push("delta-positive");
            }else {
                femsaPercentageStyle.push("delta-negative");
            }
        }
        //--------------KOF----------------
        let kof = 0;
        let kofPercentage = 0;
        const kofPercentageStyle = ["delta-indicator"];
        if(this.state.kof){
            kof = this.state.kof[this.state.kof.length-1][1];
            kofPercentage = this.calculatePercentage(this.state.kof[this.state.kof.length-2][1],this.state.kof[this.state.kof.length-1][1]);
            if(this.state.kof[this.state.kof.length-1][1] > this.state.kof[this.state.kof.length-2][1]) {
                kofPercentageStyle.push("delta-positive");
            }else {
                kofPercentageStyle.push("delta-negative");
            }
        }
        //--------------ALSEA----------------
        let alsea = 0;
        let alseaPercentage = 0;
        const alseaPercentageStyle = ["delta-indicator"];
        if(this.state.alsea){
            alsea = this.state.alsea[this.state.alsea.length-1][1];
            alseaPercentage = this.calculatePercentage(this.state.alsea[this.state.alsea.length-2][1],this.state.alsea[this.state.alsea.length-1][1]);
            if(this.state.alsea[this.state.alsea.length-1][1] > this.state.alsea[this.state.alsea.length-2][1]) {
                alseaPercentageStyle.push("delta-positive");
            }else {
                alseaPercentageStyle.push("delta-negative");
            }
        }
        //--------------BIMBO----------------
        let bimbo = 0;
        let bimboPercentage = 0;
        const bimboPercentageStyle = ["delta-indicator"];
        if(this.state.bimbo){
            bimbo = this.state.bimbo[this.state.bimbo.length-1][1];
            bimboPercentage = this.calculatePercentage(this.state.bimbo[this.state.bimbo.length-2][1],this.state.bimbo[this.state.bimbo.length-1][1]);
            if(this.state.bimbo[this.state.bimbo.length-1][1] > this.state.bimbo[this.state.bimbo.length-2][1]) {
                bimboPercentageStyle.push("delta-positive");
            }else {
                bimboPercentageStyle.push("delta-negative");
            }
        }
        //--------------liverpool----------------
        let liverpool = 0;
        let liverpoolPercentage = 0;
        const liverpoolPercentageStyle = ["delta-indicator"];
        if(this.state.liverpool){
            liverpool = this.state.liverpool[this.state.liverpool.length-1][1];
            liverpoolPercentage = this.calculatePercentage(this.state.liverpool[this.state.liverpool.length-2][1],this.state.liverpool[this.state.liverpool.length-1][1]);
            if(this.state.liverpool[this.state.liverpool.length-1][1] > this.state.liverpool[this.state.liverpool.length-2][1]) {
                liverpoolPercentageStyle.push("delta-positive");
            }else {
                liverpoolPercentageStyle.push("delta-negative");
            }
        }
        //--------------televisa----------------
        let televisa = 0;
        let televisaPercentage = 0;
        const televisaPercentageStyle = ["delta-indicator"];
        if(this.state.televisa){
            televisa = this.state.televisa[this.state.televisa.length-1][1];
            televisaPercentage = this.calculatePercentage(this.state.televisa[this.state.televisa.length-2][1],this.state.televisa[this.state.televisa.length-1][1]);
            if(this.state.televisa[this.state.televisa.length-1][1] > this.state.televisa[this.state.televisa.length-2][1]) {
                televisaPercentageStyle.push("delta-positive");
            }else {
                televisaPercentageStyle.push("delta-negative");
            }
        }




        return (
            <div className="col-sm-12 financeInfoContainer">
                <marquee>
                    <div className="statcard p-a-md financeCard">
                        <h3 className="statcard-number">
                            {usd}
                            <small className={usdPercentageStyle.join(" ")}>{usdPercentage}%</small>
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
                            {ipc}
                            <small className={ipcPercentageStyle.join(" ")}>{ipcPercentage}%</small>
                        </h3>
                        <span className="statcard-desc">ME</span>
                    </div>
                    <div className="statcard p-a-md financeCard">
                        <h3 className="statcard-number">
                            {ac}
                            <small className={acPercentageStyle.join(" ")}>{acPercentage}%</small>
                        </h3>
                        <span className="statcard-desc">AC</span>
                    </div>
                    <div className="statcard p-a-md financeCard">
                        <h3 className="statcard-number">
                            {alfa}
                            <small className={alfaPercentageStyle.join(" ")}>{alfaPercentage}%</small>
                        </h3>
                        <span className="statcard-desc">ALFAA</span>
                    </div>
                    <div className="statcard p-a-md financeCard">
                        <h3 className="statcard-number">
                            {walmart}
                            <small className={walmartPercentageStyle.join(" ")}>{walmartPercentage}%</small>
                        </h3>
                        <span className="statcard-desc">WALMEX</span>
                    </div>
                    <div className="statcard p-a-md financeCard">
                        <h3 className="statcard-number">
                            {amx}
                            <small className={amxPercentageStyle.join(" ")}>{amxPercentage}%</small>
                        </h3>
                        <span className="statcard-desc">AMXL</span>
                    </div>
                    <div className="statcard p-a-md financeCard">
                        <h3 className="statcard-number">
                            {femsa}
                            <small className={femsaPercentageStyle.join(" ")}>{femsaPercentage}%</small>
                        </h3>
                        <span className="statcard-desc">FEMSAUBD</span>
                    </div>
                    <div className="statcard p-a-md financeCard">
                        <h3 className="statcard-number">
                            {kof}
                            <small className={kofPercentageStyle.join(" ")}>{kofPercentage}%</small>
                        </h3>
                        <span className="statcard-desc">KOFL</span>
                    </div>
                    <div className="statcard p-a-md financeCard">
                        <h3 className="statcard-number">
                            {alsea}
                            <small className={alseaPercentageStyle.join(" ")}>{alseaPercentage}%</small>
                        </h3>
                        <span className="statcard-desc">ALSEA</span>
                    </div>
                    <div className="statcard p-a-md financeCard">
                        <h3 className="statcard-number">
                            {bimbo}
                            <small className={bimboPercentageStyle.join(" ")}>{bimboPercentage}%</small>
                        </h3>
                        <span className="statcard-desc">BIMBOA</span>
                    </div>
                    <div className="statcard p-a-md financeCard">
                        <h3 className="statcard-number">
                            {liverpool}
                            <small className={liverpoolPercentageStyle.join(" ")}>{liverpoolPercentage}%</small>
                        </h3>
                        <span className="statcard-desc">LIVEPOLC-1</span>
                    </div>
                    <div className="statcard p-a-md financeCard">
                        <h3 className="statcard-number">
                            {televisa}
                            <small className={televisaPercentageStyle.join(" ")}>{televisaPercentage}%</small>
                        </h3>
                        <span className="statcard-desc">TLEVISACPO</span>
                    </div>
                </marquee>

            </div>
        );
    }

}

export default FinanceInfo;
