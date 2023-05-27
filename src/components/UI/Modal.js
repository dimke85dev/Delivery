import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { Link } from 'react-router-dom';

const BackDrop = (props) => {
  return (
    <Link className=" cursor-default" to="/">
      <div className={styles.backdrop}></div>
    </Link>
  );
};

export const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<BackDrop />, portalElement)}
      {createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
    </Fragment>
  );
};

export default Modal;
