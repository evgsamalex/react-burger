import React from 'react';
import IconLink from "../icon-link/icon-link";
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li className={styles.navbar__item}><IconLink icon='Burger' isActive={true} href={'#'} text='Конструктор'/></li>
      <li className={styles.navbar__item}><IconLink icon='List' isActive={false} href={'#'} text='Лента заказов'/></li>
      <li className={styles.navbar__item}><IconLink icon='Profile' isActive={false} href={'#'} text='Личный кабинет' /></li>
    </ul>
  );
};

export default Navbar;
