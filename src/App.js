import React from "react";
import { Divider } from "antd";

import { Link, BrowserRouter, Route, Switch } from "./packages/react-router";

import RcFormField from "./pages/rc-form-field";
import RCForm from "./pages/rc-form";
import ReduxPage from "./pages/redux-page";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">首页</Link>
      <Divider type="vertical" />
      <Link to="/form/field">RcFormField</Link>
      <Divider type="vertical" />
      <Link to="/form">RCForm</Link>
      <Divider type="vertical" />
      <Link to="/redux">ReduxPage</Link>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={RcFormField} />
        <Route path="/form" component={RCForm} />
        <Route path="/redux" component={ReduxPage} />
      </Switch>
    </BrowserRouter>
  );
}

function Home() {
  return <div>home</div>;
}

// function Children() {
//   return <div>children</div>;
// }
