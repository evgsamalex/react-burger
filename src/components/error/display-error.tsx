import React, {FC} from 'react';
import styles from './display-error.module.css'

type TDisplayErrorProps = {
  absolute?: boolean,
  error: string
}

const DisplayError: FC<TDisplayErrorProps> = ({error, absolute = false}) => {
  const style = absolute ? styles.error + ' absolute' : styles.error;
  return (
    <div className={style}>
      <span className={styles.error__text + ' text text_type_main-medium'}>{error}</span>
    </div>
  );
};

export default DisplayError;
