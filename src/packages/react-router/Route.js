import React, { Component } from "react";

export default class Route extends Component {
  render() {
    const { component, path } = this.props;

    console.log(path);

    if (window.location.pathname === path) {
      return React.createElement(component);
    }

    return null;
  }
}
