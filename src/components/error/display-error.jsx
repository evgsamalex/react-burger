import React from 'react';
import PropTypes from 'prop-types';
import styles from './display-error.module.css'

const DisplayError = props => {
  const style = props.absolute ? styles.error + ' absolute' : styles.error;
  return (
    <div className={style}>
      <span className={styles.error__text + ' text text_type_main-medium'}>{props.error}</span>
    </div>
  );
};

DisplayError.propTypes = {
  error: PropTypes.string,
  absolute: PropTypes.bool
};

export default DisplayError;
