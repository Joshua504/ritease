import React from 'react';
import styles from '../styles/modal.module.scss';

const Modal = ({ isOpen, onClose, children }) => {
 if (!isOpen) return null;
 return (
  <div className={styles.modalOverlay} onClick={onClose}>
   <div
    className={
     styles.modalContent + ' ' + (isOpen ? styles.open : styles.closed)
    }
    onClick={(e) => e.stopPropagation()}
   >
    <button className={styles.closeButton} onClick={onClose}>
     &times;
    </button>
    {children}
   </div>
  </div>
 );
};

export default Modal;
