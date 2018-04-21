import React, { Component } from 'react';
import './Proyections.css';


class Proyections extends Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    componentWillMount(){
    }


    render() {
        return (
            <div className="row statcards">
                <div className="col-sm-6 col-md-3 m-b">
                    <div className="statcard">
                        <div className="p-a">
                            <span className="statcard-desc">1 día</span>
                            <h2 className="statcard-number">
                                12,938
                                <small className="label label-success">5%</small>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 m-b">
                    <div className="statcard">
                        <div className="p-a">
                            <span className="statcard-desc">7 días</span>
                            <h2 className="statcard-number">
                                758
                                <small className="label label-danger">1.3%</small>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 m-b">
                    <div className="statcard">
                        <div className="p-a">
                            <span className="statcard-desc">14 días</span>
                            <h2 className="statcard-number">
                                1,293
                                <small className="label label-success">6.75%</small>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 m-b">
                    <div className="statcard">
                        <div className="p-a">
                            <span className="statcard-desc">1 mes</span>
                            <h2 className="statcard-number">
                                758
                                <small className="label label-success">1.3%</small>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Proyections;
