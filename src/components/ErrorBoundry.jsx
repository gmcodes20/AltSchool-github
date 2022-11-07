import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStatefromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <Fragment>
          <div className="container">
            <Link className="btn btn-secondary " to={"/"}>
              Go back
            </Link>

            <h2>An Error Has Occurred</h2>
            <details>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        </Fragment>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundry;
