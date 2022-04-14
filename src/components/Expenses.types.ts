export type Expense = {
	id?: number
	title: string
	amount: string
	time: Date
}

export type newExpense = {
	id: number
	title: string
	amount: string
	time: string | Date
}
