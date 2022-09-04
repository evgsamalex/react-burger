import React from 'react';
import PropTypes from 'prop-types';
import styles from './loading.module.css'

const Loading = props => {
  const style = props.absolute ? styles.loading + ' absolute' : styles.loading;
  return (
    <div className={style}>
      <span className='text text_type_main-large'>{props.text}</span>
    </div>
  );
};

Loading.defaultProps = {
  text: 'Загрузка...'
}


Loading.propTypes = {
  text: PropTypes.string,
  absolute: PropTypes.bool
};

export default Loading;
