import React from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

const Backdrop = (props) => {
	return <div className={classes.backdrop}></div>
}

const ModalOverlay = ({ children }) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{children}</div>
		</div>
	)
}

const Modal = ({ children }) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(<Backdrop />, document.getElementById('modal'))}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				document.getElementById('modal'),
			)}
		</React.Fragment>
	)
}

export default Modal
