import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import FinanceInfo from "../FinanceInfo";

import News from "../News/News";
import HistoryChart from "../HistoryChart";
import Proyections from "../Proyections";
import GeneralStats from "../GeneralStats/GeneralStats";


class Home extends Component {

    render() {
        return (
            <div className="container-fluid container-fluid-spacious">
               <FinanceInfo/>
                <div className="col-sm-9">
                    <div className="hr-divider m-t m-b-md">
                        <h3 className="hr-divider-content hr-divider-heading">Historial</h3>
                    </div>
                    <div className="dashhead m-t-md">
                        <div className="dashhead-titles">
                            <h6 className="dashhead-subtitle">Dashboards</h6>
                            <h2 className="dashhead-title companySelect col-sm-6">Índice de Precios y Cotizaciones</h2>
                            <div className="hr-divider m-y-md predictionsDiv col-sm-6">
                                <ul className="nav nav-pills hr-divider-content hr-divider-nav" role="tablist">
                                    <li className="active" role="presentation">
                                        <a href="#sales" role="tab" data-toggle="tab" aria-controls="sales">Semana</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#inventory" role="tab" data-toggle="tab"
                                           aria-controls="inventory">Mes</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#profit" role="tab" data-toggle="tab" aria-controls="profit">6 meses</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#profit" role="tab" data-toggle="tab" aria-controls="profit">Año</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <HistoryChart/>
                </div>
                <News/>
                <div className="row col-sm-12">
                    <div className="hr-divider m-t m-b-md">
                        <h3 className="hr-divider-content hr-divider-heading">Proyecciones</h3>
                    </div>
                    <Proyections/>
                </div>
                <div className="row col-sm-12">
                    <div className="hr-divider m-t m-b-md">
                        <h3 className="hr-divider-content hr-divider-heading">Información General</h3>
                    </div>
                    <GeneralStats/>
                </div>
            </div>
        );
    }

}

export default Home;
