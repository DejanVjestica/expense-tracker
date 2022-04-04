import React, { useState } from 'react'
import { Date } from './core/Date'
import { Wrapper } from './core/Wrapper'
import { Cta } from './core/Cta'
import { Expense } from './Expenses.types'

export const ExpenseItem = ({ time, title, amount }: Expense) => {
	const [getTitle, setTitle] = useState(title)

	const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		setTitle('new title')
	}

	return (
		<Wrapper className="expense-item">
			<Date date={time}></Date>
			<h3>{getTitle}</h3>
			<p>cost: {amount}</p>

			<Cta
				as="button"
				title="test"
				onClick={clickHandler}
			></Cta>
		</Wrapper>
	)
}
