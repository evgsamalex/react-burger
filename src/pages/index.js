import React from 'react';
import Home from "./home/home";
import ForgotPassword from "./forgot-password/forgot-password";
import Ingredients from "./ingredients/ingredients";
import Login from "./login/login";
import Profile from "./profile/profile";
import Register from "./register/register";
import ResetPassword from "./reset-password/reset-password";
import {Route, Switch} from "react-router-dom";
import {routes} from "../utils/routes";
import NotFound404 from "./not-found/not-found";

export {Home, ForgotPassword, Ingredients, Login, Profile, Register, ResetPassword};

const Routing = () => {
  return (
    <Switch>
      <Route path={routes.main} exact={true}>
        <Home/>
      </Route>
      <Route path={routes.login} exact={true}>
        <Login/>
      </Route>
      <Route path={routes.register} exact={true}>
        <Register/>
      </Route>
      <Route path={routes.forgotPassword} exact={true}>
        <ForgotPassword/>
      </Route>
      <Route path={routes.resetPassword} exact={true}>
        <ResetPassword/>
      </Route>
      <Route path={routes.profile} exact={true}>
        <Profile/>
      </Route>
      <Route path={routes.ingredients} exact={true}>
        <Ingredients/>
      </Route>
      <Route>
        <NotFound404/>
      </Route>
    </Switch>
  );
};

export default Routing;
