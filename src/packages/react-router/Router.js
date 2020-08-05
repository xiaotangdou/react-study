import React, { Component } from "react";
import RouterContext from "./RouterContext";

export default class Router extends Component {
  static computeRootMatch(pathname) {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
  }

  constructor(props) {
    super(props);

    const { history } = props;

    this.state = {
      location: history.location,
    };

    // 监听当前的地址变换
    this.unlisten = history.listen((payload) => {
      this.setState({ location: payload.location });
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
      <RouterContext.Provider
        value={{
          history,
          location,
          match: Router.computeRootMatch(this.state.location.pathname),
        }}
      >
        {children}
      </RouterContext.Provider>
    );
  }
}
