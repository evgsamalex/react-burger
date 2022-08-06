import React from 'react';
import IconLink from "../icon-link/icon-link";
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <IconLink icon='Burger' isActive={true} href={'#'} text='Конструктор' className={styles.navbar__left}/>
      <IconLink icon='List' isActive={false} href={'#'} text='Лента заказов' className={styles.navbar__left}/>
      <IconLink icon='Profile' isActive={false} href={'#'} text='Личный кабинет' className={styles.navbar__right}/>
    </nav>
  );
};

export default Navbar;
