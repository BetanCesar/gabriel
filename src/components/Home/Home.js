import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import FinanceInfo from "../FinanceInfo";

import News from "../News/News";
import HistoryChart from "../HistoryChart";


class Home extends Component {

    render() {
        return (
            <div className="container-fluid container-fluid-spacious">
               <FinanceInfo/>
                <div className="col-sm-9">
                    <div class="dashhead m-t-md">
                        <div class="dashhead-titles">
                            <h6 class="dashhead-subtitle">Dashboards</h6>
                            <h2 class="dashhead-title">Índice de Precios y Cotizaciones</h2>
                        </div>
                    </div>
                    <HistoryChart/>
                </div>
                <News/>
            </div>
        );
    }

}

export default Home;
