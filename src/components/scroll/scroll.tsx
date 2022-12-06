import React, {FC, ReactNode} from 'react';
import css from './scroll.module.css';

const Scroll: FC<{ children: ReactNode }> = ({children}) => {
  return (
    <div className={css.container}>
      <div className={css.container__content}>
        {children}
      </div>
    </div>
  );
};

export default React.memo(Scroll);
