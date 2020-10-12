import React from "react";
import { connect } from "react-redux";
import "./App.css";
class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div className="counter">
        <h1>Counter</h1>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state.count
});
export default connect(mapStateToProps)(Counter);
