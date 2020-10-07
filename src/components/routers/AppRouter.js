import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch, Route,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { JournalWork } from "../JournalWork/JournalWork";




export const AppRouter = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              path="/auth"
              component={AuthRouter}
            />
            <Route
              exact
              path="/"
              component={JournalWork}
            />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    );
}
