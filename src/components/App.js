import React, { useState } from 'react'

import CartProvider from '../store/CartProvider'
import Header from './Layout/Header'
import Meals from './Meals/Meals'
import Cart from './Cart/Cart'

const App = () => {
	const [cartShowStatus, setCartShowStatus] = useState(false)
	const onShowCart = () => setCartShowStatus(true)

	const onHideCart = () => setCartShowStatus(false)

	return (
		<CartProvider>
			{cartShowStatus && <Cart onHideCart={onHideCart} />}
			<Header onShowCart={onShowCart} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	)
}

export default App
