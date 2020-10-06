import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../auth/LoginScreen'
import { RegisterScreen } from '../auth/RegisterScreen'

export const AuthRouter = () => {
    return (
      <div className="flex items-center justify-center w-screen h-screen m-0 bg-primary">
        <div className="w-64 p-5 text-center bg-white rounded-md shadow-md">
          <Switch>
            <Route exact path="/auth/login" component={LoginScreen} />
            <Route exact path="/auth/register" component={RegisterScreen} />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </div>
    );
}
