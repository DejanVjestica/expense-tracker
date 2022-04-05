import React from 'react'
import './Input.scss'

type InputProps = React.ComponentProps<'input'>

export const Input = (props: InputProps) => {
	return <input {...props} />
}
