import React, { useState } from 'react'
import { Expenses } from './components/Expenses'
import { NewExpense } from './components/newExpense/NewExpense'
import { Wrapper } from './components/core/Wrapper'
import { Expense } from './components/Expenses.types'
import './App.scss'

const initialExpenses: Expense[] = [
	{
		id: 1,
		title: 'tv',
		amount: '999',
		time: new Date(2017, 5, 12)
	},
	{
		id: 12,
		title: 'tv1',
		amount: '343',
		time: new Date(2017, 5, 12)
	},
	{
		id: 2,
		title: 'car insurance',
		amount: '370',
		time: new Date(2018, 7, 10)
	},
	{
		id: 3,
		title: 'vacation',
		amount: '1999',
		time: new Date(2019, 15, 6)
	},
	{
		id: 22,
		title: 'car insurance',
		amount: '370',
		time: new Date(2018, 7, 10)
	},
	{
		id: 4,
		title: 'flat',
		amount: '1240',
		time: new Date(2021, 6, 7)
	},
	{
		id: 5,
		title: 'flat',
		amount: '1240',
		time: new Date(2024, 6, 7)
	}
]

function App() {
	const [expenses, setExpenses] = useState<Expense[]>(initialExpenses)

	const addNewExpense = (newExpense: Expense): void => {
		setExpenses((prevExpenses) => {
			return [newExpense, ...prevExpenses]
		})
	}
	return (
		<Wrapper className="App">
			<header className="App-header">logo</header>
			<Wrapper className="App-wrapper">
				<NewExpense onNewExpenseSave={addNewExpense} />
				<Expenses expenses={expenses} />
			</Wrapper>
		</Wrapper>
	)
}

export default App
