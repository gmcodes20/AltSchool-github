import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class TestError extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 3) {
      // Simulate a JS error
      throw new Error("Crashed!!!!");
    }
    return (
      <Fragment>
        {" "}
        <div className="container">
          <Link className="btn btn-secondary " to={"/"}>
            Go back
          </Link>
          <div className=" text-center">
            {" "}
            <h1>{this.state.counter}</h1>
            <button className="btn btn-primary" onClick={this.handleClick}>
              Click to test Error
            </button>
            <p className="text-danger">
              When when the number on H1 above is 3, it simulates a JS error
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default TestError;
