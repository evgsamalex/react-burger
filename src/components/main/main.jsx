import React from 'react';
import styles from './main.module.css'

const Main = (props) => {
  return (
    <main className={styles.main}>
      {props.children}
    </main>
  );
};

Main.propTypes = {

}

export default Main;
