import React from 'react';
import css from './not-implemented.module.css'

const NotImplemented = () => {
  return (
    <div className={css.content}>
      <div className='absolute center'>
        <h2 className='text text_type_main-medium text_color_primary'>Функционал в разработке</h2>
      </div>
    </div>
  );
};

export default NotImplemented;
