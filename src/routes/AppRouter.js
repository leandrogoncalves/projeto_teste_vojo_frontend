import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";

import Homepage from "../pages/unauthenticated/Homepage";
import Login from "../pages/unauthenticated/Login";
import Job from "../pages/unauthenticated/Job";
import NotFound from "../pages/unauthenticated/NotFound";
import Panel from "../pages/authenticated/Panel";
import EditJob from "../pages/authenticated/EditJob";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={Login} />
      <Route path="/job/:id?" component={Job} />
      <PrivateRoute exact path="/panel" component={Panel}/>
      <PrivateRoute exact path="/panel/job/:id" component={EditJob}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
