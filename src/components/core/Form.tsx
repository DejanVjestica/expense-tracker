import React from 'react'
import './Form.scss'

type FormProps = {
	children: React.ReactNode
	className?: string
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

export const Form = ({ children, ...props }: FormProps) => {
	return <form {...props}>{children}</form>
}
