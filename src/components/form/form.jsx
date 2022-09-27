import React from 'react';
import PropTypes from 'prop-types';
import css from './form.module.css'
import DisplayError from "../error/display-error";

const Form = ({children, title, error, onSubmit}) => {
  return (
    <form className={css.form} method='POST' onSubmit={onSubmit}>
      {title && <h1 className='text text_type_main-large'>{title}</h1>}
      {error && <DisplayError error={error}/>}
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
