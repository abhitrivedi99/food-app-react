import React, { useRef, useState } from 'react'

import Input from '../UI/Input'

import classes from './MealItemForm.module.css'

const MealItemForm = ({ id, addItem }) => {
	const amountInputRef = useRef()
	const [formIsValid, setFormIsValid] = useState(true)

	const submitHandler = (event) => {
		event.preventDefault()

		const enteredAmount = Number(amountInputRef.current.value)
		if (enteredAmount < 1 || enteredAmount > 5) {
			setFormIsValid(false)
			return
		}

		addItem(enteredAmount)
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				label="Amount"
				ref={amountInputRef}
				input={{
					id: `amount_${id}`,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+ Add</button>
			{!formIsValid && <p>Please Enter Valid Amount(1-5)</p>}
		</form>
	)
}

export default MealItemForm
