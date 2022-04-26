import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDom from 'react-dom';
const Backdrop = props => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};


const PortalElemnts = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, PortalElemnts)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, PortalElemnts)}
        </Fragment>
    )
}

export default Modal;