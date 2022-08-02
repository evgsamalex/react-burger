import React from 'react';
import IconLink from "../icon-link/icon-link";
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <IconLink icon='Burger' isActive={true} href={'#'} text='Конструктор' style={{float:'left'}} />
      <IconLink icon='List' isActive={false} href={'#'} text='Лента заказов' style={{float:'left'}}/>
      <IconLink icon='Profile' isActive={false} href={'#'} text='Личный кабинет' style={{float:'right'}}/>
    </nav>
  );
};

export default Navbar;
