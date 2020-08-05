import React, { Component } from "react";
import RouterContext from "./RouterContext";
import matchPath from "./matchPath";

export default class Switch extends Component {
  render() {
    const { children } = this.props;

    return (
      <RouterContext.Consumer>
        {(context) => {
          const { location } = context;

          let match = null;
          let element = null;
          React.Children.forEach(children, (child) => {
            if (!match && React.isValidElement(child)) {
              element = child;

              const path = child.props.path;
              match = path
                ? matchPath(location.pathname, { ...child.props })
                : context.match;
            }
          });

          return match
            ? React.cloneElement(element, {
                // computedMatch: match,
              })
            : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
