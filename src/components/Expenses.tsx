import React, { useState } from 'react'
import { Wrapper } from './core/Wrapper'
import { Expense } from './Expenses.types'
import { FilterExpenses } from './newExpense/FilterExpenses'
import { ExpensesList } from './ExpensesList'
import { ExpensesChart } from './ExpensesChart'

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

	return (
		<Wrapper className="expenses">
			<FilterExpenses
				items={props.expenses}
				onChangeFilter={filterChangeHandler}
				selected={filteredYear}
			></FilterExpenses>
			<ExpensesChart
				expenses={filteredExpenses}
			></ExpensesChart>
			<ExpensesList items={filteredExpenses}></ExpensesList>
		</Wrapper>
	)
}
