import React from 'react';
import PropTypes from 'prop-types';
import css from './form.module.css'

const Form = ({children, title}) => {
  return (
    <div className={css.form}>
      {title && <h1 className='text text_type_main-large'>{title}</h1>}
      {children}
    </div>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Form;
