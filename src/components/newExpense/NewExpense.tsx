import React from 'react'
import { Form } from '../core/Form'
import { Wrapper } from '../core/Wrapper'
import { Input } from '../core/Input'
import { Cta } from '../core/Cta'

import './NewExpense.scss'

export const NewExpense = () => {
	return (
		<Wrapper className="new-expense">
			<Form className="new-expense__form">
				<Wrapper className="new-expense__controls">
					<Wrapper className="new-expense__control">
						<label>Title</label>
						<Input
							type="text"
							placeholder="Add title"
						/>
					</Wrapper>
					<Wrapper className="new-expense__control">
						<label>Amount</label>
						<Input
							type="number"
							placeholder="Add amount"
							min="0.01"
							step="0.01"
						/>
					</Wrapper>
					<Wrapper className="new-expense__control">
						<label>Date</label>
						<Input
							placeholder="Add date"
							type="date"
							min="2020-01-01"
							max="2020-12-31"
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
