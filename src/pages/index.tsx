import React, {FC} from 'react';
import Home from "./home/home";
import ForgotPassword from "./forgot-password/forgot-password";
import Ingredients from "./ingredients/ingredients";
import Login from "./login/login";
import Profile from "./profile/profile";
import Register from "./register/register";
import ResetPassword from "./reset-password/reset-password";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import NotFound404 from "./not-found/not-found";
import ProtectedRoute from "../components/routing/protected-route";
import NotAuthRoute from "../components/routing/not-auth-route";
import Modal from "../components/modal/modal";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import Feed from "./feed/feed";
import FeedDetails from "./feed/feed-details";
import Order from "./profile/orders/order";
import {routes} from "../utils/routes";
import {Location} from "history";

export {Home, ForgotPassword, Ingredients, Login, Profile, Register, ResetPassword};

export type TLocationState = {
  background?: Location<TLocationState>;
  from?: { pathname: string };
};

const Routing: FC = () => {

  const location = useLocation<TLocationState>();

  const background = location.state && location.state.background;

  const history = useHistory();

  return (
    <>
      <Switch location={background || location}>
        <NotAuthRoute path={routes.login} exact={true}>
          <Login/>
        </NotAuthRoute>
        <Route path={routes.main} exact={true}>
          <Home/>
        </Route>
        <NotAuthRoute path={routes.register} exact={true}>
          <Register/>
        </NotAuthRoute>
        <NotAuthRoute path={routes.forgotPassword} exact={true}>
          <ForgotPassword/>
        </NotAuthRoute>
        <NotAuthRoute path={routes.resetPassword} exact={true}>
          <ResetPassword/>
        </NotAuthRoute>
        <ProtectedRoute path={routes.orderDetails} exact={true}>
          <Order/>
        </ProtectedRoute>
        <ProtectedRoute path={routes.profile}>
          <Profile/>
        </ProtectedRoute>
        <Route path={routes.ingredients} exact={true}>
          <Ingredients/>
        </Route>
        <Route path={routes.feed} exact={true}>
          <Feed/>
        </Route>
        <Route path={routes.feedDetails} exact={true}>
          <FeedDetails/>
        </Route>
        <Route>
          <NotFound404/>
        </Route>
      </Switch>
      {
        background &&
        (
          <>
            <Route path={routes.ingredients}>
              <Modal onClose={() => history.goBack()} title='Детали ингредиента'>
                <IngredientDetails/>
              </Modal>
            </Route>
            <Route path={routes.feedDetails}>
              <Modal onClose={() => history.goBack()}>
                <FeedDetails disposeFeed={false}/>
              </Modal>
            </Route>
            <ProtectedRoute path={routes.orderDetails}>
              <Modal onClose={() => history.goBack()}>
                <Order disposeFeed={false}/>
              </Modal>
            </ProtectedRoute>
          </>
        )
      }
    </>
  );
};

export default Routing;
