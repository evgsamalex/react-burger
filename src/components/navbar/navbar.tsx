import React, {FC} from 'react';
import IconLink, {TIconType} from "../icon-link/icon-link";
import styles from './navbar.module.css'
import {routes} from "../../utils/routes";

const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <IconLink icon={TIconType.Burger} to={routes.main} text='Конструктор' className={styles.navbar__left}/>
      <IconLink icon={TIconType.List} to={routes.feed} text='Лента заказов' className={styles.navbar__left}/>
      <IconLink icon={TIconType.Profile} to={routes.profile} text='Личный кабинет'
                className={styles.navbar__right}
                exact={false}/>
    </nav>
  );
};

export default Navbar;
