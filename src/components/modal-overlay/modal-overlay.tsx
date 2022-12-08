import React, {FC} from 'react';
import styles from './modal-overlay.module.css'

const ModalOverlay: FC<{ onClose: () => void }> = ({onClose, children}) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      {children}
    </div>
  );
};

export default ModalOverlay;
