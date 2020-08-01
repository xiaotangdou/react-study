import React from "react";
import store from "../store";

export default class ReduxPage extends React.Component {
  componentDidMount() {
    store.subscribe(this);
  }

  handleAdd = () => {
    store.dispatch({ type: "ADD" });
  };

  handleFunctionAdd = () => {
    store.dispatch((dispatch) => {
      setTimeout(() => {
        dispatch({ type: "ADD" });
      }, 3000);
    });
  };

  handlePromiseAdd = () => {
    store.dispatch(new Promise((resolve) => resolve({ type: "ADD" })));
  };

  handleMinus = () => {
    store.dispatch({ type: "MINUS" });
  };

  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>counter: {store.getState().counter.count}</p>
        <p>counter2: {store.getState().counter2.count}</p>
        <button onClick={this.handleAdd}>add</button>
        <button onClick={this.handleFunctionAdd}>function add</button>
        <button onClick={this.handlePromiseAdd}>Promise add</button>
        <button onClick={this.handleMinus}>minus</button>
      </div>
    );
  }
}
