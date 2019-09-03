import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Home";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router basename="hiynn-design-landing/">
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
