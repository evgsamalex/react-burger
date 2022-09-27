import React from 'react';
import css from './profile.module.css'
import ProfileNavbar from "../../components/profile/profile-navbar";
import {Route, Switch} from "react-router-dom";
import {routes} from "../../utils/routes";
import NotImplemented from "../../components/not-implemented/not-implemented";
import ProfileInfo from "../../components/profile/profile-info";

const Profile = () => {
  return (
    <div className={css.profile + ' pl-5 pr-5'}>
      <div className='mt-30'>
        <ProfileNavbar/>
      </div>
      <div className={css.profile__content}>
        <Switch>
          <Route path={routes.profile} exact={true}>
            <div className={'mt-30'}>
              <ProfileInfo/>
            </div>
          </Route>
          <Route path={routes.profileOrders} exact={true}>
            <NotImplemented/>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Profile;
