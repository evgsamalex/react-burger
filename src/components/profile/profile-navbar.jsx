import React from 'react';
import css from './profile-navbar.module.css';
import {NavLink} from "react-router-dom";
import {routes} from "../../utils/routes";
import {useDispatch} from "react-redux";
import {logoutAsync} from "../../services/actions/user/logoutAsync";

const activeLinkClass = css.link + ' text text_type_main-medium text_color_primary';
const linkClass = css.link + ' text text_type_main-medium text_color_inactive'

const ProfileNavbar = () => {

  const getClassName = (isActive) => {
    if (isActive) return activeLinkClass;
    return linkClass;
  }

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAsync());
  }

  return (
    <div className={css.navbar}>
      <NavLink to={routes.profile} className={getClassName} exact={true}>Профиль</NavLink>
      <NavLink to={routes.profileOrders} className={getClassName} exact={true}>История заказов</NavLink>
      <NavLink to={'#'} className={linkClass} onClick={logout}>Выход</NavLink>
    </div>
  );
};

export default ProfileNavbar;
