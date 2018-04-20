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
                        <a class="navbar-brand navbar-brand-emphasized" href="#">
                            <span class="icon icon-leaf navbar-brand-icon"></span>
                            GABRIEL
                        </a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <li class="active">
                                <a href="#">Order History</a>
                            </li>
                            <li >
                                <a href="#">Fluid layout</a>
                            </li>
                            <li >
                                <a href="#">Icon nav</a>
                            </li>
                            <li >
                                <a href="#">
                                    Docs
                                </a>
                            </li>
                            <li >
                                <a href="#">Light UI</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Header;
