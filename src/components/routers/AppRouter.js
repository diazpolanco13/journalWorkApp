import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { JournalScreen } from "../journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";


export const AppRouter = () => {
    return (
      <Router>
        <div>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={JournalScreen} />
          <Redirect to="/auth/login" />
        </div>
      </Router>
    );
}
