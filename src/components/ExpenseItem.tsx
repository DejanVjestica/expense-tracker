import React from 'react'
import './ExpenseItem.scss'
import { Date } from './core/Date'
import { Expense } from './Expenses.types'

export const ExpenseItem = ({ time, title, amount }: Expense) => {
	return (
		<div className="expense-item">
			<Date date={time}></Date>
			<h3>{title}</h3>
			<p>cost: {amount}</p>
		</div>
	)
}
