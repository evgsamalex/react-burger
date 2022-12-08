import React, {FC} from 'react';
import css from './profile.module.css'
import ProfileNavbar from "../../components/profile/profile-navbar";
import {Route, Switch, useLocation} from "react-router-dom";
import {routes} from "../../utils/routes";
import ProfileInfo from "../../components/profile/profile-info";
import Orders from "./orders/orders";
import {TLocationState} from "../index";

const Profile: FC = () => {
  const location = useLocation<TLocationState>()
  const navText = getNavText(location.pathname);
  return (
    <div className={css.profile}>
      <div className={css.navigation + ' mt-30'}>
        <ProfileNavbar/>
        {navText &&
          <span className={css.nav__text + ' text text_type_main-default text_color_inactive mt-20'}>{navText}</span>}
      </div>
      <div className={css.profile__content}>
        <Switch>
          <Route path={routes.profile} exact={true}>
            <div className={'mt-30'}>
              <ProfileInfo/>
            </div>
          </Route>
          <Route path={routes.profileOrders} exact={true}>
            <Orders/>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const getNavText = (path: string) => {
  if (path === routes.profile) {
    return "В этом разделе вы можете изменить свои персональные данные";
  }
  if (path === routes.profileOrders) {
    return "В этом разделе вы можете просмотреть свою историю заказов";
  }
}

export default Profile;
