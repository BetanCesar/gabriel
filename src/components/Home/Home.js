import React, { Component } from 'react';
import './Home.css';
import FinanceInfo from "../FinanceInfo";

import News from "../News/News";
import HistoryChart from "../HistoryChart";
import Proyections from "../Proyections";


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Indice de Precios y Cotizaciones',
            siglas: 'ME',
            options: [
                {name: 'Indice de Precios y Cotizaciones', value: 'Indice de Precios y Cotizaciones', siglas: 'ME'},
                {name: 'Arca  Continental', value: 'Arca Continental', siglas: 'AC'},
                {name: 'Alfa SAB de CV', value: 'Alfa SAB de CV', siglas: 'ALFAA'},
                {name: 'Alsea SAB de CV', value: 'Alsea SAB de CV', siglas: 'ALSEA'},
                {name: 'America Movil', value: 'America Movil', siglas: 'AMXL'},
                {name: 'Grupo Bimbo S.A.B. de C.V.', value: 'Grupo Bimbo S.A.B. de C.V.', siglas: 'BIMBOA'},
                {name: 'Fomento Economico Mexicano', value: 'Fomento Economico Mexicano', siglas: 'FEMSAUBD'},
                {name: 'Coca-Cola FEMSA', value: 'Coca-Cola FEMSA', siglas: 'KOFL'},
                {name: 'LIVERPOOL', value: 'LIVERPOOL', siglas: 'LIVEPOLC-1'},
                {name: 'Grupo Televisa', value: 'Grupo Televisa', siglas: 'TLEVISACPO'},
                {name: 'Wal-mart de Mexico', value: 'Wal-mart de Mexico', siglas: 'WALMEX'}
            ],
        };
    }

    stockName(sigla){
        let value = '';
        this.state.options.forEach(function(element) {
            if(element.siglas === sigla) {
                value = element.name;
            }
        });
        this.setState({value: value});
    }

    render() {
        const createItem = (item, key) =>
            <option
                key={key}
                value={item.siglas}
                id={item.name}
            >
                {item.siglas} - {item.name}
            </option>;
        return (
            <div className="container-fluid container-fluid-spacious">
               <FinanceInfo/>
                <div className="col-sm-9">
                    <div className="hr-divider m-t m-b-md">
                        <h3 className="hr-divider-content hr-divider-heading">Historial</h3>
                    </div>
                    <div className="dashhead m-t-md">
                        <div className="dashhead-titles col-sm-12">
                            <h4 className="dashhead-subtitle">{this.state.siglas}</h4>
                            <h2 className="dashhead-title companySelect col-sm-7">{this.state.value}</h2>
                            <div className="col-sm-5 company-selector">
                                <select
                                    onChange={event => this.setState({ siglas: event.target.value }, this.stockName(event.target.value))}
                                    className="custom-select"
                                >
                                    {this.state.options.map(createItem)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="hr-divider m-y-md predictionsDiv">
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
                    <HistoryChart/>
                </div>
                <News/>
                <div className="row col-sm-12">
                    <div className="hr-divider m-t m-b-md">
                        <h3 className="hr-divider-content hr-divider-heading">Proyecciones</h3>
                    </div>
                    <Proyections/>
                </div>
            </div>
        );
    }

}

export default Home;
