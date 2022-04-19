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

	return (
		<Wrapper className="expenses">
			<FilterExpenses
				items={props.expenses}
				onChangeFilter={filterChangeHandler}
				selected={filteredYear}
			></FilterExpenses>
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
