import React, { useReducer } from 'react'

import CartContext from './cart-context'

const defaultCartState = {
	items: [],
	totalAmount: 0,
}

const cartReducer = (state, action) => {
	// console.log(action.payload, state)
	let updatedAmount, existingItemIndex, existingCartItem, updatedItem, updatedItems
	switch (action.type) {
		case 'ADD_ITEM':
			updatedAmount =
				Number(state.totalAmount) +
				Number(action.payload.price) * Number(action.payload.amount)

			existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id)
			existingCartItem = state.items[existingItemIndex]

			if (existingItemIndex !== -1) {
				updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount + action.payload.amount,
				}
				updatedItems = [...state.items]
				updatedItems[existingItemIndex] = updatedItem
			} else {
				updatedItem = { ...action.payload }
				updatedItems = [...state.items, action.payload]
			}

			return {
				items: updatedItems,
				totalAmount: updatedAmount,
			}
		case 'REMOVE_ITEM':
			existingItemIndex = state.items.findIndex((item) => item.id === action.payload)
			existingCartItem = state.items[existingItemIndex]
			updatedAmount = Number(state.totalAmount) - Number(existingCartItem.price)
			updatedItems = []
			if (existingCartItem.amount === 1) {
				console.log('here')
				updatedItems = state.items.filter((item) => item.id !== action.payload)
			} else {
				console.log('there')
				updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 }
				updatedItems = [...state.items]
				updatedItems[existingItemIndex] = updatedItem
			}

			return {
				items: updatedItems,
				totalAmount: updatedAmount,
			}
		default:
			return state
	}
}

const CartProvider = ({ children }) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

	const addItem = (item) => {
		dispatchCartAction({
			type: 'ADD_ITEM',
			payload: item,
		})
	}

	const removeItem = (id) => {
		dispatchCartAction({
			type: 'REMOVE_ITEM',
			payload: id,
		})
	}

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem,
		removeItem,
	}

	return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartProvider
