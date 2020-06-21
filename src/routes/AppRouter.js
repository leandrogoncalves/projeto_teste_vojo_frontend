import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../pages/unauthenticated/Homepage";
import Login from "../pages/unauthenticated/Login";
import Job from "../pages/unauthenticated/Job";
import NotFound from "../pages/unauthenticated/NotFound";


export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route path="/job/:id?" component={Job} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
