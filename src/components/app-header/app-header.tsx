import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import Navbar from "../navbar/navbar";
import {Link} from "react-router-dom";
import {routes} from "../../utils/routes";
import {FC} from "react";

const AppHeader: FC = () => {
  const style = styles.header + ' pt-6 pb-6';
  return (
    <header className={style}>
      <Navbar/>
      <Link to={routes.main} className={styles.header__logo}>
        <Logo/>
      </Link>
    </header>
  );
}

export default React.memo(AppHeader);
