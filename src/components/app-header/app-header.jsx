import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import Navbar from "../navbar/navbar";

function AppHeader() {
  const style = styles.header + ' pt-6 pb-6';
  return (
    <header className={style}>
      <Navbar />
      <div className={styles.header__logo}>
        <Logo />
      </div>
    </header>
  );
}

export default AppHeader;
