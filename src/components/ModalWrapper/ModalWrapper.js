// src/components/ModalWrapper/ModalWrapper.js
import React from 'react';
import ReactModal from 'react-modal';
import { CSSTransition } from 'react-transition-group';
import './ModalWrapper.css';

ReactModal.setAppElement('#root');

const ModalWrapper = ({ isOpen, onRequestClose, children }) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} className="modal-content" overlayClassName="modal-overlay">
        {children}
      </ReactModal>
    </CSSTransition>
  );
};

export default ModalWrapper;
