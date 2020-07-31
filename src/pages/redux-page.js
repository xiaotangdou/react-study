import React from "react";
import store from "../store";
import { Button } from "antd";

console.log(store);

export default class ReduxPage extends React.Component {
  componentDidMount() {
    store.subscribe(this);
  }

  handleAdd = () => {
    store.dispatch({ type: "ADD" });
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
        <Button onClick={this.handleAdd}>add</Button>
        <Button onClick={this.handleMinus}>minus</Button>
      </div>
    );
  }
}
