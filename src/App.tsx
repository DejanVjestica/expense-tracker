import React from 'react'
import { Expenses } from './components/Expenses'
import { NewExpense } from './components/newExpense/NewExpense'
import { Wrapper } from './components/core/Wrapper'
import './App.scss'

function App() {
	return (
		<Wrapper className="App">
			<header className="App-header">logo</header>
			<Wrapper className="App-wrapper">
				<NewExpense />
				<Expenses />
			</Wrapper>
		</Wrapper>
	)
}

export default App
