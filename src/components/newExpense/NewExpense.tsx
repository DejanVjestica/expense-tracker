import React, { useState } from 'react'
import { Form } from '../core/Form'
import { Wrapper } from '../core/Wrapper'
import { Input } from '../core/Input'
import { Cta } from '../core/Cta'
import { Expense } from '../Expenses.types'

import './NewExpense.scss'

type useStateProps = {
	title: string
	amount: string
	time: string | Date
}

type NewExpenceProps = {
	onNewExpenseSave: (newExpenseData: Expense) => void
}

export const NewExpense = (props: NewExpenceProps) => {
	const [userInput, setUserInput] = useState<useStateProps>({
		title: '',
		amount: '',
		time: new Date('')
	})

	const titleChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				title: event.target.value
			}
		})
	}

	const amountChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				amount: event.target.value
			}
		})
	}

	const dateChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				time: event.target.value
			}
		})
	}

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const expanceData = {
			id: Math.round(Math.random() * 1000000),
			title: userInput.title,
			amount: userInput.amount,
			time: new Date(userInput.time)
		}

		props.onNewExpenseSave(expanceData)

		setUserInput({
			title: '',
			amount: '',
			time: new Date('')
		})
	}

	return (
		<Wrapper className="new-expense">
			<Form
				className="new-expense__form"
				onSubmit={submitHandler}
			>
				<Wrapper className="new-expense__controls">
					<Wrapper className="new-expense__control">
						<label>Title</label>
						<Input
							type="text"
							onChange={
								titleChangeHandler
							}
							value={userInput.title}
						/>
					</Wrapper>
					<Wrapper className="new-expense__control">
						<label>Amount</label>
						<Input
							type="number"
							min="0.01"
							step="0.01"
							onChange={
								amountChangeHandler
							}
							value={userInput.amount}
						/>
					</Wrapper>
					<Wrapper className="new-expense__control">
						<label>Date</label>
						<Input
							type="date"
							min="2020-01-01"
							onChange={
								dateChangeHandler
							}
							value={userInput.time.toLocaleString()}
						/>
					</Wrapper>
				</Wrapper>
				<Wrapper className="new-expense__action">
					<Cta type="submit">Add new expence</Cta>
				</Wrapper>
			</Form>
		</Wrapper>
	)
}
