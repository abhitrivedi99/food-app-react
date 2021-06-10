import React, { useContext, useEffect, useState } from 'react'

import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = ({ onClick }) => {
	const [btnHighlight, setBtnHighlight] = useState(false)

	const cartCtx = useContext(CartContext)

	const cartBadge = cartCtx.items.reduce((current, item) => {
		return current + item.amount
	}, 0)

	useEffect(() => {
		if (cartCtx.items.length === 0) return
		setBtnHighlight(true)

		const timer = setTimeout(() => {
			setBtnHighlight(false)
		}, 300)

		return () => {
			clearTimeout(timer)
		}
	}, [cartCtx.items])

	const btnClass = `${classes.button} ${btnHighlight ? classes.bump : ''}`

	return (
		<button className={btnClass} onClick={onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>

			<span className={classes.badge}>{cartBadge}</span>
		</button>
	)
}

export default HeaderCartButton
