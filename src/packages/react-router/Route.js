import React, { Component } from "react";
import RouterContext from "./RouterContext";
import matchPath from "./matchPath";

export default class Route extends Component {
  render() {
    const { children, component, render, path, computedMatch } = this.props;

    return (
      <RouterContext.Consumer>
        {(context) => {
          const { history, location, match } = context;

          let _match = null;
          if (computedMatch) {
            _match = computedMatch;
          } else if (path) {
            _match = matchPath(location.pathname, this.props);
          } else {
            _match = match;
          }

          const props = { history, location, match: _match };

          if (_match) {
            if (typeof children === "function") {
              return children(props);
            } else if (component) {
              return React.createElement(component, props);
            } else if (typeof render === "function") {
              return render(props);
            } else {
              return null;
            }
          } else {
            return typeof children === "function" ? children(props) : null;
          }
        }}
      </RouterContext.Consumer>
    );
  }
}
