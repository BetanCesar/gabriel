import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container-fluid container-fluid-spacious">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand navbar-brand-emphasized" to={'/'}>
                            <span class="icon icon-calculator navbar-brand-icon"></span>
                            GABRIEL
                        </Link>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <li class="active">
                                <Link to={'/'}>Inicio</Link>
                            </li>
                            <li >
                                <Link to={'/'}>Vete</Link>
                            </li>
                            <li >
                                <Link to={'/'}>ala</Link>
                            </li>
                            <li >
                                <Link to={'/'}>versh?</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Header;
