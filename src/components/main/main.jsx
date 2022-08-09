import React from 'react';
import styles from './main.module.css'
import PropTypes from "prop-types";

const Main = (props) => {
  return (
    <main className={styles.main}>
      {props.children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node
}

export default Main;
