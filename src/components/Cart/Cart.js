import React from 'react'

import Modal from '../UI/Modal'

import classes from './Cart.module.css'

const Cart = ({ onHideCart }) => {
	const cartItems = [
		{
			id: 'c1',
			name: 'sushi',
			amount: 2,
			price: 22.99,
		},
	]

	const cartList = cartItems.map((item) => <li key={item.id}>{item.name}</li>)

	return (
		<Modal onHideCart={onHideCart}>
			<ul className={classes['cart-items']}>{cartList}</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>35.99</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={onHideCart}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	)
}

export default Cart
