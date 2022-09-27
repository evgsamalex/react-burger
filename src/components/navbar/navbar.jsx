import React from 'react';
import IconLink from "../icon-link/icon-link";
import styles from './navbar.module.css'
import {routes} from "../../utils/routes";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <IconLink icon='Burger' to={routes.main} text='Конструктор' className={styles.navbar__left}/>
      <IconLink icon='List' to={routes.orders} text='Лента заказов' className={styles.navbar__left}/>
      <IconLink icon='Profile' to={routes.profile} href={'#'} text='Личный кабинет' className={styles.navbar__right}
                exact={false}/>
    </nav>
  );
};

export default Navbar;
