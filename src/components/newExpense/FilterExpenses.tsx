import React from 'react'
import { Select } from '../core/Select'
import { Expense } from '../Expenses.types'
import { Wrapper } from '../core/Wrapper'

import './FilterExpenses.scss'

type FilterExpensesProps = {
	items: Expense[]
	selected: string
	onChangeFilter: (selectedYear: string) => void
}

export const FilterExpenses = (props: FilterExpensesProps) => {
	let selectItems: string[] = []

	props.items.forEach((item) => {
		const year: string = item.time.getFullYear().toString()
		selectItems.push(year)
	})

	const hasCurrentYear = selectItems.includes(
		new Date().getFullYear().toString()
	)

	if (!hasCurrentYear) {
		selectItems = [
			...selectItems,
			new Date().getFullYear().toString()
		].sort()
	}

	const uniqueItems = Array.from(new Set(selectItems))

	const handleChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	): void => {
		props.onChangeFilter(event.target.value)
	}

	return (
		<Wrapper className="filter-expanses__controls">
			<label>Filter by Year</label>
			<Select
				value={props.selected}
				selectitems={uniqueItems}
				onChange={handleChange}
			></Select>
		</Wrapper>
	)
}
