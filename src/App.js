import React, { Component } from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';

// import logo from './images/logo.svg';

import passWord from "./passWord_login";
import qrCode from "./qrCode_login";
import weChart from "./weChartCode_login";
import register from "./registered";

// import passWord from "./passWord_login";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route path="/passWord_login" component={passWord} />
            <Route path="/qrCode_login" component={qrCode} />
            <Route path="/weChartCode_login" component={weChart} />
            <Route path="/registered" component={register} />
            <Redirect from="/" to="/passWord_login" />
          </Switch>
      </div>
    );
  }
}

export default App;
