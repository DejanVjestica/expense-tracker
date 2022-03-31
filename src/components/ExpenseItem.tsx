import React from 'react'
import { Date } from './core/Date'
import { Wrapper } from './core/Wrapper'
import { Expense } from './Expenses.types'

export const ExpenseItem = ({ time, title, amount }: Expense) => {
	return (
		<Wrapper className="expense-item">
			<Date date={time}></Date>
			<h3>{title}</h3>
			<p>cost: {amount}</p>
		</Wrapper>
	)
}
