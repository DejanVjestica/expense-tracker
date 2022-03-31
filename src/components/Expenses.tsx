import React from 'react'
import { ExpenseItem } from './ExpenseItem'
import { Wrapper } from './core/Wrapper'
import { Expense } from './Expenses.types'

type ExpensesProps = {
	expenses?: Expense[]
}

const expenses: Expense[] = [
	{
		id: 1,
		title: 'tv',
		amount: 999,
		time: new Date(2021, 5, 12)
	},
	{
		id: 2,
		title: 'car insurance',
		amount: 370,
		time: new Date(2021, 7, 10)
	},
	{
		id: 3,
		title: 'vacation',
		amount: 1999,
		time: new Date(2021, 15, 6)
	},
	{
		id: 4,
		title: 'flat',
		amount: 1240,
		time: new Date(2021, 6, 7)
	}
]

export const Expenses = (props: ExpensesProps) => {
	return (
		<Wrapper className="expenses">
			{expenses.map((expense) => {
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
