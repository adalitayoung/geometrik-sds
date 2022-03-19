import React, { useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";

/**
 * Routes manages the system routing. Will return the first match so always keep the empty routes at the bottom
 */
function Routes() {
  return (
    <Switch>
      {/* <Route path="/register">
                <Registration/>
            </Route> */}
      <Route path="/">
        <App />
      </Route>
    </Switch>
  );
}

export default Routes;
