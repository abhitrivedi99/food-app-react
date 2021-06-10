import React, { useContext } from 'react'

import MealItemForm from './MealItemForm'
import CartContext from '../../store/cart-context'

import classes from './MealItem.module.css'

const MealItem = ({ id, name, description, price }) => {
	const Price = `$${price.toFixed(2)}`
	const cartCtx = useContext(CartContext)
	const addItem = (amount) => {
		cartCtx.addItem({
			id,
			name,
			price,
			amount,
		})
	}

	return (
		<li className={classes.meal}>
			<div>
				<h3>{name}</h3>
				<div className={classes.description}>{description}</div>
				<div className={classes.price}>{Price}</div>
			</div>
			<div>
				<MealItemForm id={id} addItem={addItem} />
			</div>
		</li>
	)
}

export default MealItem
