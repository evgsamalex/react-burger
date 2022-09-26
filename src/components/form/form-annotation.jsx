import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {formAnnotation} from "../../utils/proptypes/form-annotation";
import * as uuid from "uuid";

const FormAnnotation = ({items}) => {
  return (
    <div className='mt-15'>
      {items.map(item => (
        <p key={uuid.v4()} className='text text_type_main-small text_color_inactive mt-4'>{item.title}
          <span> <Link to={item.to} className='text text_type_main-small link'>{item.linkText}</Link></span>
        </p>
      ))}
    </div>
  );
};

FormAnnotation.propTypes = {
  items: PropTypes.arrayOf(formAnnotation)
};

export default FormAnnotation;
