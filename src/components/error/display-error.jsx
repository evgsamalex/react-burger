import React from 'react';
import PropTypes from 'prop-types';
import styles from './display-error.module.css'

const DisplayError = props => {
  return (
    <div className={styles.error}>
      <span className={styles.error__text + ' text text_type_main-medium'}>{props.error}</span>
    </div>
  );
};

DisplayError.propTypes = {
  error: PropTypes.string
};

export default DisplayError;
