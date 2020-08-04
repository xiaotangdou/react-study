import React, { Component } from "react";
import RouterContext from "./RouterContext";

export default class Router extends Component {
  constructor(props) {
    super(props);

    const { history } = props;

    this.state = {
      location: history.location,
    };

    // 监听当前的地址变换
    this.unlisten = history.listen((location) => {
      this.setState({ location });
    });
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  render() {
    const { children, history } = this.props;
    const { location } = this.state;

    return (
      <RouterContext.Provider value={{ history, location }}>
        {children}
      </RouterContext.Provider>
    );
  }
}
