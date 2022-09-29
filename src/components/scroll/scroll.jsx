import React, {memo} from 'react';
import PropTypes from 'prop-types';
import css from './scroll.module.css';

const Scroll = ({children}) => {
  return (
    <div className={css.container}>
      <div className={css.container__content}>
        {children}
      </div>
    </div>
  );
};

Scroll.propTypes = {
  children: PropTypes.node
};

export default memo(Scroll);
