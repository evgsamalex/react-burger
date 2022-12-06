import React, {FC} from 'react';
import styles from './loading.module.css'

const Loading: FC<{ absolute?: boolean, text?: string }> = ({absolute = false, text = "Загрузка..."}) => {
  const style = absolute ? styles.loading + ' absolute' : styles.loading;
  return (
    <div className={style}>
      <span className='text text_type_main-large'>{text}</span>
    </div>
  );
};

export default Loading;
