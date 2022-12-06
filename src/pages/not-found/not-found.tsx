import React, {FC} from 'react';
import styles from './not-found.module.css'
import {Link} from "react-router-dom";

const NotFound404: FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <h1 className='text text_type_main-large'>Oops! 404 Error</h1>
        <p className='text text_type_main-default text_color_inactive'>The page you requested does not exist</p>
        <br/>
        <br/>
        <p>check the address or try <Link to='/' className={styles.link}>homepage</Link></p>
      </div>
    </div>
  );
};

export default NotFound404;
