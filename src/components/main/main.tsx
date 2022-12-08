import React, {FC} from 'react';
import styles from './main.module.css'

const Main: FC = ({children}) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
};

export default Main;
