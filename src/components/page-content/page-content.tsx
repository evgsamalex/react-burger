import React, {FC} from 'react';
import css from './page-content.module.css';

const PageContent: FC = ({children}) => {
  return (
    <div className={css.content}>
      <div className={css.content__center}>
        {children}
      </div>
    </div>
  );
};

export default PageContent;
