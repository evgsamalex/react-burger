import React from 'react';
import PropTypes from 'prop-types';
import css from './page-content.module.css';

const PageContent = ({children}) => {
  return (
    <div className={css.content}>
      <div className={css.content__center}>
        {children}
      </div>
    </div>
  );
};

PageContent.propTypes = {
  children: PropTypes.node
};

export default PageContent;
