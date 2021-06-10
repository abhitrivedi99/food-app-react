import React, { useContext } from 'react'

import Modal from '../UI/Modal'
import CartItem from './CartItem'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css'

const Cart = ({ onHideCart }) => {
	const cartCtx = useContext(CartContext)
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
	const hasItems = cartCtx.items.length > 0

	const onRemove = (id) => {
		cartCtx.removeItem(id)
	}
	const onAdd = (item) => {
		cartCtx.addItem(item)
	}

	const cartList = cartCtx.items.map((item) => (
		<CartItem
			key={item.id}
			{...item}
			onRemove={() => onRemove(item.id)}
			onAdd={() => onAdd(item)}
		></CartItem>
	))

	return (
		<Modal onHideCart={onHideCart}>
			<ul className={classes['cart-items']}>{cartList}</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={onHideCart}>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	)
}

export default Cart
