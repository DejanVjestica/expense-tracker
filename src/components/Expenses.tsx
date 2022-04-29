import React, { useState } from 'react'
import { ExpenseItem } from './ExpenseItem'
import { Wrapper } from './core/Wrapper'
import { Expense } from './Expenses.types'
import { FilterExpenses } from './newExpense/FilterExpenses'

type ExpensesProps = {
	expenses: Expense[]
}

export const Expenses = (props: ExpensesProps) => {
	const [filteredYear, setFilteredYear] = useState<string>(
		new Date().getFullYear().toString()
	)

	const filterChangeHandler = (selectedYear: string) => {
		setFilteredYear(selectedYear)
	}

	const filteredExpenses = props.expenses.filter((expense) => {
		if (filteredYear === 'all') {
			return props.expenses
		}
		const year = expense.time.getFullYear().toString()
		return year === filteredYear
	})

	let expensesContent: JSX.Element | React.ReactElement[] = (
		<p className="expense-no-item">
			there is no expenses in this year
		</p>
	)

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				time={expense.time}
				amount={expense.amount}
				title={expense.title}
			></ExpenseItem>
		))
	}

	return (
		<Wrapper className="expenses">
			<FilterExpenses
				items={props.expenses}
				onChangeFilter={filterChangeHandler}
				selected={filteredYear}
			></FilterExpenses>
			{expensesContent}
		</Wrapper>
	)
}
