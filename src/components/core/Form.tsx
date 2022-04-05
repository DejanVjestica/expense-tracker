import React from 'react'
import './Form.scss'

type FormProps = {
	children: React.ReactNode
	className?: string
}

export const Form = ({ children, ...props }: FormProps) => {
	return <form {...props}>{children}</form>
}
