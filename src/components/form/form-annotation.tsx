import React, {FC} from 'react';
import {Link} from "react-router-dom";

type FormAnnotationProps = {
  items: {
    id: number;
    title: string;
    to: string,
    linkText: string
  }[]
}

const FormAnnotation: FC<FormAnnotationProps> = ({items}) => {
  return (
    <div className='mt-15'>
      {items.map(item => (
        <p key={item.id} className='text text_type_main-small text_color_inactive mt-4'>{item.title}
          <span> <Link to={item.to} className='text text_type_main-small link'>{item.linkText}</Link></span>
        </p>
      ))}
    </div>
  );
};

export default FormAnnotation;
