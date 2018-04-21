import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


class Home extends Component {

    render() {
        return (
            <div className="container-fluid container-fluid-spacious">
                <div className="col-sm-9">
                    <div class="dashhead m-t-md">
                        <div class="dashhead-titles">
                            <h6 class="dashhead-subtitle">Dashboards</h6>
                            <h2 class="dashhead-title">Índice de Precios y Cotizaciones</h2>
                        </div>
                    </div>

                </div>
                <div className="col-sm-3">
                    <div class="dashhead m-t-md">
                        <div class="dashhead-titles">
                            <h6 class="dashhead-subtitle">20 de abril de 2018</h6>
                            <h2 class="dashhead-title">Noticias</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;
