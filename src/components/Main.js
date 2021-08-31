import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Main extends Component {
  state = {
    name: "",
  };
  render() {
    return (
      <div>
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <br />
            <h1 className="header center orange-text">STOCK SCREENER</h1>
            <div className="row center">
              <h5 className="header col s12 light">do your analysis</h5>
              <br />
            </div>
          </div>
        </div>
        <div className="row center">
          {/* <form action="/predict" method="post" className="col s12"> */}
          <div className="row center">
            <div className="input-field col s4">
              <label for="last_name">
                <b>Dashboard </b>
              </label>
              <br />
              <input
                id="last_name"
                name="Search stock"
                placeholder="Search stock"
                type="text"
                className="validate"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                  //   console.log(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row center">
            <Link to={`/result/${this.state.name}`}>
              <button
                type="submit"
                className="btn-large waves-effect waves-light orange"
              >
                Search
              </button>
            </Link>
          </div>
          {/* </form> */}
        </div>
      </div>
    );
  }
}
