import React from 'react';
import PropTypes from 'prop-types';
import styles from './loading.module.css'

const Loading = props => {
  return (
    <div className={styles.loading}>
      <span className='text text_type_main-large'>{props.text}</span>
    </div>
  );
};

Loading.defaultProps = {
  text: 'Загрузка...'
}


Loading.propTypes = {
  text: PropTypes.string
};

export default Loading;
