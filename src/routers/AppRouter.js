import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { JournalWork } from "../components/JournalWork/JournalWork";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route path="/equipo" component={JournalWork} />
          <Route path="/vehiculos" component={JournalWork} />
          <Route path="/reportes" component={JournalWork} />
          <Route path="/tareas" component={JournalWork} />
          <Route path="/historial" component={JournalWork} />
          <Route exact path="/" component={JournalWork} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
