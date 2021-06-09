import React, { Fragment, useState } from 'react'

import Header from './Layout/Header'
import Meals from './Meals/Meals'
import Cart from './Cart/Cart'

const App = () => {
	const [cartShowStatus, setCartShowStatus] = useState(false)
	const onShowCart = () => setCartShowStatus(true)

	const onHideCart = () => setCartShowStatus(false)

	return (
		<Fragment>
			{cartShowStatus && <Cart onHideCart={onHideCart} />}
			<Header onShowCart={onShowCart} />
			<main>
				<Meals />
			</main>
		</Fragment>
	)
}

export default App
