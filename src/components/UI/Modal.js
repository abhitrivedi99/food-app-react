import React from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

const Backdrop = ({ onHideCart }) => {
	return <div className={classes.backdrop} onClick={onHideCart}></div>
}

const ModalOverlay = ({ children }) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{children}</div>
		</div>
	)
}

const Modal = ({ children, onHideCart }) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onHideCart={onHideCart} />,
				document.getElementById('modal'),
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				document.getElementById('modal'),
			)}
		</React.Fragment>
	)
}

export default Modal
