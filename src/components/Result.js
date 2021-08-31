import React, { Component } from "react";
import data from "../data.json";

export default class Result extends Component {
  state = {
    arr: [],
    data: {},
    length: 0,
  };
  componentDidMount() {
    let name = this.props.match.params.name;
    let array = data.filter((data) => data.symbol == name);
    let length = array.length;
    this.setState({ data: array[length - 1], length: length });

    console.log(array);
  }
  render() {
    const { data, length } = this.state;
    return (
      <>
        {length == 0 ? (
          <h1>Stock Not Found</h1>
        ) : (
          <div>
            {/* <h1>Tata Consultancy</h1> */}
            <h2>Symbol:{data.key}</h2>
            <div>
              <h3>Latest Price Summary</h3>
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <li>
                  <h5>Date</h5>
                  <h5>{data.date}</h5>
                </li>

                <li>
                  <h5>High</h5>
                  <h5>{data.high}</h5>
                </li>
                <li>
                  <h5>Low</h5>
                  <h5>{data.low}</h5>
                </li>
                <li>
                  <h5>Close</h5>
                  <h5>{data.close}</h5>
                </li>
                <li>
                  <h5>Open</h5>
                  <h5>{data.open}</h5>
                </li>
              </ul>
            </div>
          </div>
        )}
      </>
    );
  }
}
