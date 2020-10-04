import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { JournalScreen } from "../journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Route
                    path="/auth"
                      component={AuthRouter} 
                />
                <Route
                    exact
                    path="/"
                    component={JournalScreen} 
                />
            </div>
        </Router>
    )
}
