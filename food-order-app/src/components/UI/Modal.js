import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverLay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <>
            {/* <Backdrop/>
    <ModalOverLay>{props.children}</ModalOverLay> */}
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElement)}
        </>
    )
}

export default Modal