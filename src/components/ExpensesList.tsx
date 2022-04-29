import React from 'react'
import { ExpenseItem } from './ExpenseItem'
import { Expense } from './Expenses.types'

type ExpensesListProps = {
	items: Expense[]
}

export const ExpensesList = (props: ExpensesListProps) => {
	// eslint-disable-next-line no-undef
	const expensesContent: JSX.Element = (
		<p className="expense-no-item">
			there is no expenses in this year
		</p>
	)

	if (props.items.length === 0) {
		return expensesContent
	}

	return (
		<ul className="expense-list">
			{props.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					time={expense.time}
					amount={expense.amount}
					title={expense.title}
				></ExpenseItem>
			))}
		</ul>
	)
}
