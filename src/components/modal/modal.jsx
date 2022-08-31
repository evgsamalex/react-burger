import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from './modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({onClose, title, ...props}) => {
  const element = document.getElementById('page-modal');

  useEffect(() => {
    const handleEsc = e => {
      console.log(e)
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    }
  }, [])

  return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={styles.modal + ' p-10'}
           onClick={event => event.stopPropagation()}>
        <div className={styles.modal__header}>
          <h2 className={styles.modal__title + ' text text_type_main-large'}>{title}</h2>
          <CloseIcon onClick={onClose} type='primary'/>
        </div>
        {props.children}
      </div>
    </ModalOverlay>
    , element);
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node
};

export default Modal;
