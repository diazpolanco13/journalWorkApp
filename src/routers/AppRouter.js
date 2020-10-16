import React, { useEffect, useState } from "react";
import {firebase} from '../firebase/firebase-config'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { JournalWork } from "../components/JournalWork/JournalWork";
import { useDispatch } from "react-redux";
import { login } from "../actions/authActions";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { LoadingDinamic } from "../components/JournalWork/LoadingDinamic";




export const AppRouter = () => {
  const dispatch = useDispatch()

  const [cheking, setCheking] = useState(true)
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }
      setCheking(false);
    });
  }, [dispatch, setCheking, setIsLogin]);

  if (cheking) {
    return (
      <LoadingDinamic />
    )
  }
    return (
      <Router>
        <div>
          <Switch>
            <PublicRoute
              isAutenticated={isLogin}
              path="/auth"
              component={AuthRouter} />

              <PrivateRoute isAutenticated={isLogin} path="/equipo" component={JournalWork} />
              <PrivateRoute isAutenticated={isLogin} path="/vehiculos" component={JournalWork} />
              <PrivateRoute isAutenticated={isLogin} path="/reportes" component={JournalWork} />
              <PrivateRoute isAutenticated={isLogin} path="/tareas" component={JournalWork} />
              <PrivateRoute isAutenticated={isLogin} path="/historial" component={JournalWork} />
              <PrivateRoute
                exact
                isAutenticated={isLogin}
                path="/"
                component={JournalWork}
            />
            
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    );
};
