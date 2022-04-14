import React from 'react'
import { ExpenseItem } from './ExpenseItem'
import { Wrapper } from './core/Wrapper'
import { Expense } from './Expenses.types'

type ExpensesProps = {
	expenses: Expense[]
}

export const Expenses = (props: ExpensesProps) => {
	return (
		<Wrapper className="expenses">
			{props.expenses.map((expense) => {
				return (
					<ExpenseItem
						key={expense.id}
						time={expense.time}
						amount={expense.amount}
						title={expense.title}
					></ExpenseItem>
				)
			})}
		</Wrapper>
	)
}
