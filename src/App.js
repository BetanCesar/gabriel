import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
              <div className="with-top-navbar">
                  <Header/>
                  <div className="container-fluid container-fluid-spacious">

                  </div>
              </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
