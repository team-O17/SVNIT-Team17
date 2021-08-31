import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Result from "./components/Result";
import Error from "./components/Error";

import data from "./data.json";

export default class App extends Component {
  state = {
    name: "",
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact={true} path="/" component={Main}></Route>
            <Route path="/result/:name" component={Result}></Route>
            <Route component={Error}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
